(() => {
  'use strict';
  const $ = id => document.getElementById(id),
    KEY = 'japanese-pocket-v2',
    E = window.StudyEngine,
    data = window.STUDY_DATA;
  let state = {
    settings: {
      mode: 'all',
      inverse: false,
      furigana: false,
      romaji: false,
      meaning: false,
      autoFurigana: true,
      amount: 100,
      repeatGap: 20
    },
    stats: {},
    round: null
  };
  try {
    const saved = JSON.parse(localStorage.getItem(KEY));
    if (saved) {
      state = {
        ...state,
        ...saved,
        settings: {
          ...state.settings,
          ...saved.settings
        }
      };
    } else {
      const old = JSON.parse(localStorage.getItem('japanese-pocket-v1'));
      if (old) {
        state.settings = {
          ...state.settings,
          ...old.settings
        };
        for (const id of old.known || []) state.stats[id] = {
          streak: 1,
          errors: 0
        };
        if (old.started && old.queue?.length) state.round = {
          queue: old.queue,
          hard: {},
          mode: state.settings.mode,
          inverse: false
        };
      }
    }
  } catch {}
  if (!state.settings.kinds) state.settings.kinds = state.settings.mode === 'all' ? ['word', 'phrase', 'paragraph'] : [state.settings.mode || 'word'];
  if (!state.settings.directions) state.settings.directions = state.settings.inverse ? ['reverse'] : ['forward'];
  state.settings.kinds = state.settings.kinds.filter(k => ['word', 'phrase', 'paragraph', 'grammar'].includes(k));
  state.settings.directions = state.settings.directions.filter(k => E.skills.includes(k));
  state.settings.amount = Math.max(100, Math.min(2000, Math.round((Number(state.settings.amount) || 100) / 100) * 100));
  state.stats = state.stats && typeof state.stats === 'object' ? state.stats : {};
  state.settings.repeatGap = Math.max(1, Math.min(2000, Math.round(Number(state.settings.repeatGap) || 20)));
  // Conserva o histórico antigo sem atribuí-lo às novas direções.
  for (const item of Object.values(state.stats)) {
    if (typeof item.streak === 'number' && !item.legacy) item.legacy = {
      streak: item.streak,
      errors: item.errors || 0
    };
  }
  const pool = () => data.filter(c => state.settings.kinds.includes(c.kind));

  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch {
      $('storageWarning').hidden = false;
    }
  }
  const labels = {
    forward: 'Japonês → português',
    reverse: 'Português → japonês',
    toKanji: 'Kana → kanji',
    fromKanji: 'Kanji → kana'
  };

  function score() {
    for (const k of E.skills) {
      const s = E.proficiency(data, state.stats, k);
      $('percent-' + k).textContent = (Math.floor(s.percent * 10) / 10).toLocaleString('pt-BR') + '%';
      $('fill-' + k).style.width = s.percent + '%';
    }
  }
  const kindInputs = {
      words: 'word',
      phrases: 'phrase',
      paragraphs: 'paragraph',
      grammar: 'grammar'
    },
    directionInputs = {
      forward: 'forward',
      reverse: 'reverse',
      toKanji: 'toKanji',
      fromKanji: 'fromKanji'
    };

  function settings() {
    for (const k of ['autoFurigana', 'romaji', 'meaning']) $(k).checked = !!state.settings[k];
    for (const [id, k] of Object.entries(kindInputs)) $(id).checked = state.settings.kinds.includes(k);
    for (const [id, k] of Object.entries(directionInputs)) $(id).checked = state.settings.directions.includes(k);
    $('amount').textContent = state.settings.amount;
    $('repeatGap').value = state.settings.repeatGap;
    $('less').disabled = state.settings.amount <= 100;
    $('more').disabled = state.settings.amount >= 2000;
    const n = pool().reduce((n, c) => n + state.settings.directions.filter(k => E.eligible(c, k)).length, 0);
    const valid = n > 0 && state.settings.directions.length > 0;
    $('restart').disabled = !valid;
    $('newRound').disabled = !valid;
    $('available').textContent = !state.settings.kinds.length ? 'Selecione pelo menos um tipo de conteúdo.' : !state.settings.directions.length ? 'Selecione pelo menos um sentido.' : n ? `${n} desafios disponíveis · ${Math.min(n,state.settings.amount)} nesta rodada.` : 'Este conteúdo ainda não tem cartões.';
  }

  function closeSettings() {
    if ($('settings').open) $('settings').close();
    $('lesson').hidden = false;
    document.body.classList.remove('config-open');
    $('settingsButton').setAttribute('aria-expanded', 'false');
  }

  function openSettings() {
    settings();
    $('lesson').hidden = true;
    document.body.classList.add('config-open');
    $('settingsButton').setAttribute('aria-expanded', 'true');
    $('settings').showModal();
  }

  function start() {
    const queue = E.pick(pool(), state.stats, state.settings.amount, state.settings.directions);
    if (!queue.length) {
      openSettings();
      return;
    }
    state.round = {
      queue,
      repeatGap: state.settings.repeatGap
    };
    save();
    closeSettings();
    render();
  }
  let revealed = {};

  function invalidateAttempt() {
    E.markAssisted(state.round, state.stats);
    save();
    score();
  }

  function appendJapanese(card, furigana) {
    for (const segment of card.segments || [card.japanese]) {
      if (typeof segment === 'string') {
        $('japanese').append(document.createTextNode(segment));
        continue;
      }
      const ruby = document.createElement('ruby');
      ruby.append(document.createTextNode(segment[0]));
      const rt = document.createElement('rt');
      rt.textContent = segment[1];
      rt.hidden = !furigana;
      ruby.append(rt);
      $('japanese').append(ruby);
    }
  }

  function render() {
    revealed = state.round?.revealed || {};
    score();
    settings();
    const task = state.round?.queue[0],
      c = data.find(c => c.id === task?.id);
    $('japanese').replaceChildren();
    $('completed').hidden = !!c;
    $('answers').hidden = !c;
    $('reveal').hidden = !c;
    $('usage').hidden = true;
    $('usage').open = false;
    $('card').classList.toggle('paragraph', c?.kind === 'paragraph');
    for (const id of ['japanese', 'portuguesePrompt', 'romajiText', 'meaningText']) $(id).hidden = true;
    $('skillLabel').textContent = task ? labels[task.skill] : '';
    if (!c) return;
    $('usageText').textContent = c.note || '';
    const ex = c.example || {};
    for (const [id, key] of [
        ['exampleJapanese', 'japanese'],
        ['exampleKana', 'kana'],
        ['exampleRomaji', 'romaji'],
        ['exampleMeaning', 'meaning']
      ]) $(id).textContent = ex[key] || '';
    visibility();
  }

  function visibility() {
    const task = state.round?.queue[0],
      c = data.find(c => c.id === task?.id);
    if (!c) return;
    const k = task.skill,
      kana = E.reading(c),
      show = !!revealed.answer;
    $('japanese').replaceChildren();
    $('japanese').hidden = false;
    $('portuguesePrompt').hidden = k !== 'reverse';
    $('portuguesePrompt').textContent = c.meaning;
    // Nas traduções, o kanji pode aparecer com leitura automática até dominar.
    const mastered = (state.stats[c.id]?.fromKanji?.streak || 0) >= 10;
    const furigana = !!state.settings.autoFurigana && !mastered;
    if (k === 'forward' || (k === 'reverse' && show)) appendJapanese(c, furigana);
    else if (k === 'toKanji') {
      if (show) appendJapanese(c, false);
      else $('japanese').textContent = kana;
    } else appendJapanese(c, show);

    $('japanese').hidden = k === 'reverse' && !show;
    $('romajiText').textContent = c.romaji;
    $('romajiText').hidden = !(state.settings.romaji || revealed.romaji) || (k === 'reverse' && !show) || (k === 'fromKanji' && !show && !revealed.romaji);
    $('meaningText').textContent = c.meaning;
    $('meaningText').hidden = k !== 'forward' || !(show || state.settings.meaning);
    $('showJapanese').hidden = false;
    $('showJapanese').textContent = 'Revelar resposta';
    $('showJapanese').disabled = show;
    $('showKana').hidden = true;
    $('showMeaning').hidden = true;
    $('showRomaji').hidden = false;
    $('showRomaji').disabled = !$('romajiText').hidden;
    $('usage').hidden = !(c.note && show);
    // Tradução automática também entrega a resposta no treino JP → PT.
    if (k === 'forward' && !$('meaningText').hidden && !state.round.assisted) invalidateAttempt();
    $('yes').disabled = !!state.round.assisted;
    $('yes').setAttribute('aria-label', state.round.assisted ? 'Resposta revelada: use Não sei' : 'Sei');
    $('attemptHint').hidden = !state.round.assisted;
  }

  function answer(known) {
    if (!state.round?.queue.length) return;
    E.answer(state.round, state.stats, known);
    state.round.revealed = {};
    save();
    render();
  }
  $('yes').onclick = () => answer(true);
  $('no').onclick = () => answer(false);
  for (const [button, key] of [
      ['showJapanese', 'answer'],
      ['showRomaji', 'romaji']
    ]) $(button).onclick = () => {
    revealed[key] = true;
    state.round.revealed = revealed;
    const skill = state.round.queue[0].skill;
    if (key === 'answer' || (key === 'romaji' && ['reverse', 'fromKanji'].includes(skill))) invalidateAttempt();
    save();
    visibility();
  };
  $('settingsButton').onclick = openSettings;
  $('closeSettings').onclick = closeSettings;
  $('settings').addEventListener('cancel', event => {
    event.preventDefault();
    closeSettings();
  });
  $('settings').addEventListener('close', () => {
    $('lesson').hidden = false;
    document.body.classList.remove('config-open');
    $('settingsButton').setAttribute('aria-expanded', 'false');
  });
  for (const key of ['autoFurigana', 'romaji', 'meaning']) $(key).onchange = () => {
    state.settings[key] = $(key).checked;
    save();
    if (state.round?.queue.length) visibility();
  };
  for (const [id, key] of Object.entries(kindInputs)) $(id).onchange = () => {
    state.settings.kinds = Object.entries(kindInputs).filter(([i]) => $(i).checked).map(([, k]) => k);
    save();
    settings();
  };
  for (const [id, key] of Object.entries(directionInputs)) $(id).onchange = () => {
    state.settings.directions = Object.entries(directionInputs).filter(([i]) => $(i).checked).map(([, k]) => k);
    save();
    settings();
  };
  for (const [id, step] of [
      ['less', -100],
      ['more', 100]
    ]) $(id).onclick = () => {
    state.settings.amount = Math.max(100, Math.min(2000, state.settings.amount + step));
    save();
    settings();
  };
  // A mudança vale para os próximos erros, inclusive na rodada atual.
  $('repeatGap').onchange = () => {
    state.settings.repeatGap = Math.max(1, Math.min(2000, Math.round(Number($('repeatGap').value) || 20)));
    if (state.round) state.round.repeatGap = state.settings.repeatGap;
    save();
    settings();
  };
  // Apaga o histórico somente após confirmação explícita; mantém preferências.
  $('resetProgress').onclick = () => {
    if (!window.confirm('Zerar todo o progresso? Isso apaga as quatro proficiências, o histórico antigo e a rodada atual. Não é possível desfazer.')) return;
    state.stats = {};
    state.round = null;
    revealed = {};
    // Evita que uma versão antiga restaure o histórico apagado.
    try {
      localStorage.removeItem('japanese-pocket-v1');
    } catch {}
    save();
    score();
    start();
  };
  $('restart').onclick = start;
  $('newRound').onclick = start;
  // Rodadas antigas não separavam habilidades; retoma como JP → PT.
  if (state.round) {
    state.round.queue = (state.round.queue || []).map(t => typeof t === 'string' ? {
      id: t,
      skill: 'forward'
    } : t).filter(t => data.some(c => c.id === t.id && E.eligible(c, t.skill)) && E.skills.includes(t.skill));
    state.round.repeatGap = state.settings.repeatGap;
    // Marca duplicatas antigas como revisões para não criar uma cadeia de repetições.
    const queued = new Set();
    for (const task of state.round.queue) {
      const key = task.id + ':' + task.skill;
      if (queued.has(key)) task.review = true;
      queued.add(key);
    }
    delete state.round.hard;
    save();
    render();
  } else start();
  if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    let reloading = false;
    const controlled = !!navigator.serviceWorker.controller;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (controlled && !reloading) {
        reloading = true;
        save();
        location.reload();
      }
    });
    navigator.serviceWorker.register('./sw.js', {
      updateViaCache: 'none'
    }).then(reg => {
      reg.update().catch(() => {});
      window.addEventListener('online', () => reg.update().catch(() => {}));
    }).catch(() => {});
  }
})();
