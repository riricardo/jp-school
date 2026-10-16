import './style.css';
import { cards, studySituations } from './data.js';
import {
  MAX, load, save, record, pool, hasKanji, score,
  summarize, buildRound, hintRevealsAnswer
} from './engine.js';
import {
  japaneseMarkup,
  solutionJapaneseMarkup,
  studyPromptMarkup, ttsText, japaneseWords
} from './japanese.js';
import { aiJapaneseVoices, japaneseVoices, speak, stopAudio, clampPlaybackRate, MIN_PLAYBACK_RATE } from './audio.js';
import { setupInstall } from './install.js';

const APP_VERSION = '0.2.0';
const labels = {
  kana: 'Japonês → Português',
  reverse: 'Português → Japonês',
  toKanji: 'Kana → Kanji',
  fromKanji: 'Kanji → Kana'
};
const skillOptions = [
  ['kana', 'Japonês → Português'],
  ['reverse', 'Português → Japonês'],
  ['toKanji', 'Kana → Kanji'],
  ['fromKanji', 'Kanji → Kana']
];
const kindOptions = [
  ['word', 'Vocabulário'],
  ['phrase', 'Frases'],
  ['grammar', 'Gramática']
];
const app = document.querySelector('#app');
let state = load();
let current = null;
let phase = 'question';
let previous = '';
let counter = 0;
let deck = [];
let retries = [];
let roundGeneration = 0;
let buildingRound = false;
let slowAudioClicks = 0;

const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
}[char]));
const situations = studySituations;

app.innerHTML = `
  <main>
    <header>
      <div class="brand" aria-label="ManJapa">
        <span class="brand-name">ManJapa</span>
        <svg class="flag" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" role="img" aria-labelledby="flag-title flag-desc">
          <title id="flag-title">ManJapa — ícone do Japão</title>
          <desc id="flag-desc">Bandeira japonesa minimalista dentro de um ícone branco suavemente arredondado.</desc>
          <defs>
            <linearGradient id="flag-surface" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stop-color="#FFFFFF"/>
              <stop offset="1" stop-color="#F4F5F7"/>
            </linearGradient>
            <linearGradient id="flag-sun" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stop-color="#E94350"/>
              <stop offset="1" stop-color="#C91F35"/>
            </linearGradient>
          </defs>
          <rect x="12" y="12" width="488" height="488" rx="112" fill="url(#flag-surface)"/>
          <rect x="13" y="13" width="486" height="486" rx="111" fill="none" stroke="#E8E9EC" stroke-width="2"/>
          <circle cx="256" cy="256" r="110" fill="url(#flag-sun)"/>
        </svg>
      </div>
      <div class="header-controls">
      <span id="selectedSituation" class="icon selected-situation" role="img"></span>
      <button id="settingsButton" class="icon" title="Configurações" aria-label="Configurações" aria-expanded="false">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m9 3-.5 2-2 1-2-.5-2 3L4 10v3l-1.5 2 2 3 2-.5 2 1L9 21h6l.5-2.5 2-1 2 .5 2-3-1.5-2v-3L21.5 9l-2-3-2 .5-2-1L15 3Z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      </button>
      </div>
    </header>
    <section id="progress" class="progress" aria-label="Progresso por habilidade"></section>
    <div id="round" class="round" aria-live="polite"></div>
    <article id="flashcard">
      <div id="badge" class="badge"></div>
      <div id="prompt" class="prompt"></div>
      <div id="audioControls" class="audio-controls" hidden>
      <button id="audioButton" class="audio" aria-label="Ouvir novamente" title="Ouvir novamente" hidden>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M11 4 6 8H3v8h3l5 4Z M15 8a6 6 0 0 1 0 8 M18 5a10 10 0 0 1 0 14"></path>
        </svg>
      </button>
      <button id="slowAudioButton" class="audio slow-audio" aria-label="Ouvir mais devagar" title="Ouvir mais devagar" hidden>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 4 6 8H3v8h3l5 4Z M15 8a6 6 0 0 1 0 8"></path></svg>
        <svg class="slow-clock" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M12 6v6l4 2"></path></svg>
      </button>
      </div>
      <p id="audioMsg" class="audio-msg" role="status"></p>
      <div id="hints" class="hints" hidden>
        <button id="hintJapanese" class="hint-button">Kanji</button>
        <button id="hintFurigana" class="hint-button">Furigana</button>
        <button id="hintRomaji" class="hint-button">Romaji</button>
        <button id="hintMeaning" class="hint-button">PT</button>
      </div>
      <div id="solution" class="solution" hidden></div>
    </article>
    <section id="actions" class="actions">
      <button id="no" class="no" aria-label="Não sei">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5L19 19M19 5L5 19"/></svg>
      </button>
      <button id="yes" class="yes" aria-label="Sei">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 12 5 5L20 6"/></svg>
      </button>
    </section>
    <button id="next" class="next" hidden></button>
  </main>

  <dialog id="settings">
    <div class="dialog-header">
      <h2>Configurações</h2>
      <button class="icon" id="closeSettings" aria-label="Fechar">✕</button>
    </div>
    <fieldset>
      <legend>Modos de estudo</legend>
      <div class="checkbox-grid">
        ${skillOptions.map(([value, label]) => `
          <label class="check-option">
            <input type="checkbox" data-skill="${value}">
            <span>${label}</span>
          </label>`).join('')}
      </div>
    </fieldset>
    <fieldset>
      <legend>Conteúdo</legend>
      <div class="checkbox-grid">
        ${kindOptions.map(([value, label]) => `
          <label class="check-option">
            <input type="checkbox" data-kind="${value}">
            <span>${label}</span>
          </label>`).join('')}
      </div>
      <p class="small">Gramática pratica partículas, conjugações e estruturas de frases.</p>
      <label class="field">Situação
        <select id="situation">
          <option value="all">Todas</option>
          ${situations.map(item => `<option value="${esc(item)}">${esc(item)}</option>`).join('')}
        </select>
      </label>
    </fieldset>
    <fieldset>
      <legend>Exibição e dicas</legend>
      <label class="check-option"><input id="autoFurigana" type="checkbox"><span>Furigana até dominar o kanji</span></label>
      <p class="small">Nos cartões Japonês → Português, mostra a leitura até alcançar ${MAX} acertos em Kanji → Kana.</p>
      <label class="check-option"><input id="romaji" type="checkbox"><span>Mostrar romaji automaticamente</span></label>
      <label class="check-option"><input id="meaning" type="checkbox"><span>Mostrar tradução automaticamente</span></label>
    </fieldset>
    <fieldset>
      <legend>Rodada e revisão</legend>
      <div class="field">
        <span>Cartões por rodada</span>
        <div class="stepper">
          <button id="amountLess" type="button" aria-label="Diminuir quantidade">−</button>
          <output id="amount"></output>
          <button id="amountMore" type="button" aria-label="Aumentar quantidade">+</button>
        </div>
      </div>
      <label class="field">Repetir erro após cartões
        <input id="retry" type="number" min="1" max="2000" step="1">
      </label>
    </fieldset>
    <fieldset>
      <legend>Áudio</legend>
      <label class="field">Voz japonesa<select id="voice"></select></label>
      <label class="field">Velocidade
        <select id="speed">
          <option value="0.5">0,5×</option>
          <option value="0.6">0,6×</option>
          <option value="0.7">0,7×</option>
          <option value="0.8">0,8×</option>
          <option value="0.9">0,9×</option>
          <option value="1">1×</option>
          <option value="1.1">1,1×</option>
          <option value="1.2">1,2×</option>
          <option value="1.3">1,3×</option>
          <option value="1.4">1,4×</option>
          <option value="1.5">1,5×</option>
          <option value="1.6">1,6×</option>
          <option value="1.7">1,7×</option>
          <option value="1.8">1,8×</option>
          <option value="1.9">1,9×</option>
          <option value="2">2×</option>
        </select>
      </label>
      <label class="check-option"><input id="autoAudio" type="checkbox"><span>Listening: reproduzir áudio automaticamente</span></label>
      <p class="small">Voz do sistema é a opção padrão. Áudio offline depende de uma voz japonesa local. Kokoro IA é opcional e pode precisar de internet; não faz parte do cache essencial.</p>
    </fieldset>
    <p id="available" class="small" role="status"></p>
    <button id="newRound" class="primary">Iniciar rodada nova</button>
    <button id="reset" class="danger">Zerar progresso</button>
    <button id="refreshApp" class="secondary" type="button">Atualizar aplicativo</button>
    <button id="installApp" class="secondary" type="button">Instalar ManJapa</button>
    <p id="installStatus" class="small" role="status"></p>
    <p id="offlineStatus" class="small" role="status">Verificando disponibilidade offline...</p>
    <footer>ManJapa · v${APP_VERSION}</footer>
  </dialog>`;

const $ = id => document.getElementById(id);
const selected = selector => [...document.querySelectorAll(selector)];
setupInstall($('installApp'), $('installStatus'));

function updateSetting(key, value, startNewRound = false) {
  state[key] = value;
  save(state);
  if (startNewRound) createRound(false, false);
  else render();
  syncSettings();
}

function fillVoices() {
  const voices = japaneseVoices();
  $('voice').innerHTML = `<optgroup label="Voz do sistema">
    <option value="auto">Voz do sistema · Japonês</option>` +
    voices.map(voice => `<option value="${esc(voice.voiceURI)}">${esc(voice.name)}</option>`).join('') +
    `</optgroup><optgroup label="Hugging Face · Kokoro IA">` +
    aiJapaneseVoices.map(([value, label]) => `<option value="hf:kokoro:${esc(value)}">${esc(label)}</option>`).join('') +
    `</optgroup>`;
  $('voice').value = [...$('voice').options].some(option => option.value === state.voice)
    ? state.voice
    : 'auto';
}

function syncSettings() {
  selected('[data-skill]').forEach(input => {
    input.checked = state.skills.includes(input.dataset.skill);
  });
  selected('[data-kind]').forEach(input => {
    input.checked = state.kinds.includes(input.dataset.kind);
  });
  $('situation').value = state.situation;
  $('autoFurigana').checked = state.autoFurigana;
  $('romaji').checked = state.romaji;
  $('meaning').checked = state.meaning;
  $('retry').value = state.retry;
  $('amount').textContent = state.amount;
  $('amountLess').disabled = state.amount <= 1;
  $('amountMore').disabled = state.amount >= 2000;
  $('autoAudio').checked = state.autoAudio;
  $('speed').value = state.speed;
  fillVoices();

  const available = pool(cards, state).length;
  $('newRound').disabled = available === 0;
  $('available').textContent = !state.skills.length
    ? 'Selecione pelo menos um modo de estudo.'
    : !state.kinds.length
      ? 'Selecione pelo menos um tipo de conteúdo.'
      : available
        ? `${available} desafios disponíveis · até ${Math.min(available, state.amount)} nesta rodada.`
        : 'Não há desafios disponíveis para esta seleção.';
}

let offlineCheck = 0;

function withTimeout(task, milliseconds = 5000) {
  let timer;
  return Promise.race([
    task,
    new Promise((_, reject) => {
      timer = setTimeout(() => reject(new Error('timeout')), milliseconds);
    })
  ]).finally(() => clearTimeout(timer));
}

async function checkOfflineReady() {
  const check = ++offlineCheck;
  const status = $('offlineStatus');
  if (!import.meta.env.PROD) {
    status.textContent = 'Modo offline disponível no build de produção.';
    return;
  }
  if (!('serviceWorker' in navigator) || !window.isSecureContext) {
    status.textContent = 'Modo offline indisponível neste navegador ou endereço.';
    return;
  }
  // Only the controlling worker can describe the version serving this tab.
  const worker = navigator.serviceWorker.controller;
  if (!worker) {
    status.textContent = 'Acesso offline ainda não está pronto. Aguarde o carregamento com conexão.';
    return;
  }

  let channel;
  try {
    channel = new MessageChannel();
    const result = await withTimeout(new Promise((resolve, reject) => {
      channel.port1.onmessage = event => {
        const data = event.data;
        if (data?.type !== 'OFFLINE_STATUS' || typeof data.ready !== 'boolean' ||
            !Array.isArray(data.missing) || data.error || (data.ready && data.missing.length)) {
          reject(new Error('Invalid offline response'));
        } else resolve(data);
      };
      channel.port1.onmessageerror = () => reject(new Error('Invalid offline message'));
      worker.postMessage({ type: 'CHECK_OFFLINE' }, [channel.port2]);
    }));
    if (check !== offlineCheck || worker !== navigator.serviceWorker.controller) return;
    status.textContent = result.ready
      ? 'Arquivos essenciais disponíveis offline. Áudio depende da voz escolhida.'
      : `${result.missing.length} arquivos essenciais ainda não estão disponíveis offline.`;
  } catch {
    if (check === offlineCheck) {
      status.textContent = 'Não foi possível confirmar o acesso offline. O estudo pode continuar.';
    }
  } finally {
    channel?.port1.close();
    channel?.port2.close();
  }
}

function openSettings() {
  stopAudio();
  syncSettings();
  checkOfflineReady();
  $('settingsButton').setAttribute('aria-expanded', 'true');
  $('settings').showModal();
}

function closeSettings() {
  $('settings').close();
  $('settingsButton').setAttribute('aria-expanded', 'false');
}

$('settingsButton').onclick = openSettings;
$('closeSettings').onclick = closeSettings;
$('settings').addEventListener('click', event => {
  if (event.target === $('settings')) closeSettings();
});
$('settings').addEventListener('close', () => {
  $('settingsButton').setAttribute('aria-expanded', 'false');
});
window.speechSynthesis?.addEventListener?.('voiceschanged', fillVoices);
// Mobile browsers often populate voices only after an explicit user gesture.
document.addEventListener('visibilitychange', () => {
  if (document.hidden) stopAudio();
  else {
    fillVoices();
    checkOfflineReady();
  }
});
window.addEventListener('pageshow', () => {
  fillVoices();
  checkOfflineReady();
});
window.addEventListener('online', checkOfflineReady);
window.addEventListener('offline', checkOfflineReady);
$('refreshApp').onclick = async () => {
  const button = $('refreshApp');
  button.disabled = true;
  button.textContent = 'Verificando atualização...';

  try {
    if (!navigator.onLine) {
      throw new Error('offline');
    }

    const registration = await withTimeout(
      navigator.serviceWorker?.getRegistration(import.meta.env.BASE_URL)
    );

    if (!registration) {
      throw new Error('Service Worker indisponível');
    }

    await withTimeout(registration.update(), 15000);

    if (registration.waiting) {
      $('available').textContent =
        'Atualização pronta. Feche todas as abas do ManJapa e reabra para usar a nova versão.';
    } else if (registration.installing) {
      $('available').textContent =
        'Atualização em preparação. Aguarde e verifique novamente.';
    } else {
      $('available').textContent =
        'Verificação concluída. Se houver uma atualização, ela estará disponível na próxima abertura.';
    }
  } catch {
    $('available').textContent =
      'Não foi possível verificar atualizações. O estudo continua disponível.';
  } finally {
    button.disabled = false;
    button.textContent = 'Atualizar aplicativo';
    checkOfflineReady();
  }
};

function resetRound() {
  roundGeneration++;
  stopAudio();
  resetAudioControls();
  current = null;
  phase = 'question';
  counter = 0;
  deck = [];
  retries = [];
  previous = '';
}

async function createRound(closeDialog = true, playAutomatically = closeDialog) {
  resetRound();
  const generation = roundGeneration;
  buildingRound = true;
  render();
  if (closeDialog && $('settings').open) closeSettings();
  try {
    const snapshot = structuredClone(state);
    const result = await buildRound(pool(cards, snapshot), snapshot, snapshot.amount, {
      cancelled: () => generation !== roundGeneration
    });
    if (generation !== roundGeneration || !result) return;
    deck = result;
    buildingRound = false;
    nextCard(playAutomatically);
    syncSettings();
  } catch {
    if (generation !== roundGeneration) return;
    buildingRound = false;
    render();
    $('prompt').textContent = 'Não foi possível preparar a rodada. Tente novamente.';
  }
}

function pull() {
  const pending = retries.findIndex(item => item.due <= counter || deck.length === 0);
  if (pending >= 0) {
    const [item] = retries.splice(pending, 1);
    const card = cards.find(candidate => candidate.id === item.id);
    const stillAvailable = pool(cards, state).some(candidate =>
      candidate.id === item.id && candidate.skill === item.skill);
    if (card && stillAvailable) return { ...item, card, isRetry: true };
  }
  return deck.shift() || null;
}

function nextCard(playAutomatically = true) {
  stopAudio();
  resetAudioControls();
  $('audioMsg').textContent = '';
  phase = 'question';
  current = pull();
  if (current) {
    previous = `${current.id}/${current.skill}`;
    counter++;
  }
  render();
  if (playAutomatically && state.autoAudio && hasJapanesePrompt()) play();
}

function hasJapanesePrompt() {
  if (!current) return false;
  if (current.skill !== 'reverse') return true;
  return phase === 'revealed' ||
    ['japanese', 'furigana', 'romaji'].some(key => current.revealed?.[key]);
}

function scheduleRetry(id, skill) {
  if (!retries.some(item => item.id === id && item.skill === skill)) {
    retries.push({ id, skill, due: counter + Number(state.retry || 20) });
  }
}

function answer(correct) {
  if (!current || phase !== 'question') return;
  const { id, skill } = current;
  stopAudio();
  if (!current.assisted) record(state, id, skill, correct);
  if (!correct) scheduleRetry(id, skill);
  save(state);
  if (correct) {
    nextCard();
    return;
  }
  phase = 'revealed';
  render();
  if (state.autoAudio && hasJapanesePrompt()) play();
}

function showHint(key) {
  if (!current || phase !== 'question') return;
  const japaneseWasVisible = hasJapanesePrompt();
  current.revealed ??= {};
  current.revealed[key] = true;
  if (key === 'japanese') current.revealed.furigana = false;
  const { skill } = current;
  const answerIsVisible = hintRevealsAnswer(skill, key);

  if (answerIsVisible && !current.assisted) {
    record(state, current.id, skill, false);
    scheduleRetry(current.id, skill);
    current.assisted = true;
    save(state);
  }
  render();
  if (!japaneseWasVisible && state.autoAudio && hasJapanesePrompt()) play();
}

for (const [id, key] of [
  ['hintJapanese', 'japanese'],
  ['hintFurigana', 'furigana'],
  ['hintRomaji', 'romaji'],
  ['hintMeaning', 'meaning']
]) {
  $(id).onclick = () => showHint(key);
}

$('yes').onclick = () => answer(true);
$('no').onclick = () => answer(false);
$('next').onclick = () => current ? nextCard() : createRound();
$('newRound').onclick = () => createRound();
$('audioButton').onclick = () => {
  if (!current) return;
  $('slowAudioButton').hidden = false;
  play(1, true);
};
$('slowAudioButton').onclick = () => {
  if (!current || $('slowAudioButton').hidden) return;
  slowAudioClicks++;
  play(1, true, slowAudioClicks % 2 === 1 ? 0.7 : MIN_PLAYBACK_RATE);
};

function resetAudioControls() {
  slowAudioClicks = 0;
  $('slowAudioButton').hidden = true;
}

function play(speedFactor = 1, restart = false, rateOverride) {
  if (!current) return;
  const message = $('audioMsg');
  message.textContent = '';
  const playback = { ...state, speed: clampPlaybackRate(rateOverride ?? state.speed * speedFactor) };
  speak(ttsText(current.card), playback, text => {
    message.textContent = text;
  }, { restart });
}

for (const input of selected('[data-skill]')) {
  input.addEventListener('change', () => {
    updateSetting(
      'skills',
      selected('[data-skill]').filter(item => item.checked).map(item => item.dataset.skill),
      true
    );
  });
}

for (const input of selected('[data-kind]')) {
  input.addEventListener('change', () => {
    updateSetting(
      'kinds',
      selected('[data-kind]').filter(item => item.checked).map(item => item.dataset.kind),
      true
    );
  });
}

$('situation').addEventListener('change', event => updateSetting('situation', event.target.value, true));
$('retry').addEventListener('change', event => {
  updateSetting('retry', Math.max(1, Math.min(2000, Number(event.target.value) || 20)));
});
$('amountLess').onclick = () => updateSetting('amount', Math.max(1, state.amount - 100), true);
$('amountMore').onclick = () => updateSetting('amount', Math.min(2000, state.amount + 100), true);
$('autoFurigana').onchange = event => updateSetting('autoFurigana', event.target.checked);
$('romaji').onchange = event => updateSetting('romaji', event.target.checked);
$('meaning').onchange = event => updateSetting('meaning', event.target.checked);
$('autoAudio').onchange = event => {
  const enabled = event.target.checked;
  updateSetting('autoAudio', enabled);
  if (!enabled) stopAudio();
  else if (hasJapanesePrompt()) play();
};
$('speed').onchange = event => {
  stopAudio();
  updateSetting('speed', Number(event.target.value));
};
$('voice').onchange = event => {
  stopAudio();
  updateSetting('voice', event.target.value);
};

$('reset').onclick = () => {
  if (!confirm('Zerar todo o progresso das quatro habilidades?')) return;
  state.progress = {};
  save(state);
  createRound();
};

function renderHints(card, skill, revealed) {
  const cardHasKanji = hasKanji(card);
  const showAutomaticFurigana = shouldShowAutomaticFurigana(card, skill);
  const visibleKanji = cardHasKanji && (
    skill === 'fromKanji' ||
    (showAutomaticFurigana && !revealed.japanese) ||
    !!revealed.japanese || !!revealed.furigana
  );
  const visibleFurigana = !cardHasKanji || !!revealed.furigana ||
    (showAutomaticFurigana && !revealed.japanese);
  const visibleRomaji = !!revealed.romaji ||
    (state.romaji && ['kana', 'toKanji', 'fromKanji'].includes(skill));
  const visibleMeaning = !!revealed.meaning ||
    skill === 'reverse' ||
    (state.meaning && skill === 'kana');
  const availableHints = [
    ['japanese', 'hintJapanese', cardHasKanji, visibleKanji],
    ['furigana', 'hintFurigana', true, visibleFurigana],
    ['romaji', 'hintRomaji', true, visibleRomaji],
    ['meaning', 'hintMeaning', true, visibleMeaning]
  ];
  let visible = false;
  for (const [key, id, relevant, isVisible] of availableHints) {
    const button = $(id);
    button.hidden = !relevant;
    button.disabled = !relevant || isVisible;
    button.setAttribute('aria-pressed', String(isVisible));
    if (relevant) visible = true;
  }
  $('hints').style.gridTemplateColumns = `repeat(${availableHints.filter(item => item[2]).length}, minmax(0, 1fr))`;
  $('hints').hidden = !visible || phase === 'revealed';
}

function shouldShowAutomaticFurigana(card, skill) {
  return state.autoFurigana && skill === 'kana' && hasKanji(card) &&
    score(state, card.id, 'fromKanji') < MAX;
}

function hasUnrevealedHints() {
  return ['hintJapanese', 'hintFurigana', 'hintRomaji', 'hintMeaning']
    .some(id => !$(id).hidden && !$(id).disabled);
}

function applyAutomaticAssistance() {
  if (!current || current.assisted || phase !== 'question') return;
  const { skill } = current;
  const answerVisible =
    (state.meaning && skill === 'kana' && hintRevealsAnswer(skill, 'meaning')) ||
    (state.romaji && ['kana', 'toKanji', 'fromKanji'].includes(skill) && hintRevealsAnswer(skill, 'romaji'));
  if (!answerVisible) return;

  record(state, current.id, skill, false);
  scheduleRetry(current.id, skill);
  current.assisted = true;
  save(state);
}

function render() {
  applyAutomaticAssistance();
  const stats = summarize(cards, state);
  $('selectedSituation').textContent = state.situation === 'all' ? '✳' : state.situation.split(' ')[0];
  $('selectedSituation').title = state.situation === 'all' ? 'Todas as situações' : state.situation;
  $('selectedSituation').setAttribute('aria-label', $('selectedSituation').title);
  $('progress').innerHTML = stats.map(item => `
    <div class="metric">
      <span>${labels[item.skill]}</span>
      <strong>${item.percent}%</strong>
      <div class="bar"><i style="width:${item.percent}%"></i></div>
    </div>`).join('');

  const remaining = deck.length + retries.filter(item =>
    !current || item.id !== current.id || item.skill !== current.skill).length;
  $('round').textContent = current
    ? `${remaining + 1} cartões restantes nesta rodada · ${MAX} acertos por cartão e modo`
    : buildingRound ? 'Preparando rodada...' : 'Rodada concluída';
  if (!current) {
    const available = pool(cards, state).length;
    $('badge').textContent = buildingRound ? '' : available ? 'Rodada concluída' : 'Sem desafios';
    $('prompt').textContent = buildingRound ? 'Preparando rodada...' : available
      ? 'Muito bem. Comece uma nova rodada quando quiser.'
      : 'Ajuste os modos ou o conteúdo nas configurações.';
    $('solution').hidden = true;
    $('audioButton').hidden = true;
    $('audioControls').hidden = true;
    $('slowAudioButton').hidden = true;
    $('hints').hidden = true;
    $('audioMsg').textContent = '';
    $('actions').hidden = true;
    $('next').hidden = buildingRound;
    $('next').textContent = 'Nova rodada';
    $('next').disabled = buildingRound || available === 0;
    return;
  }

  const { card, skill } = current;
  const revealed = current.revealed || {};
  const cardHasKanji = hasKanji(card);
  const showAutomaticFurigana = shouldShowAutomaticFurigana(card, skill);
  const showFurigana = cardHasKanji && !revealed.japanese &&
    (revealed.furigana || showAutomaticFurigana);
  const showRomaji = revealed.romaji || (state.romaji && ['kana', 'toKanji', 'fromKanji'].includes(skill));
  const showMeaning = revealed.meaning || (state.meaning && skill === 'kana');
  $('badge').textContent = current.isRetry ? 'Revisão' : '';

  $('prompt').innerHTML = studyPromptMarkup(card, skill, revealed, showFurigana);

  const answerShown = phase === 'revealed';
  $('audioButton').hidden = false;
  $('audioControls').hidden = false;
  $('solution').hidden = !answerShown;
  $('solution').innerHTML = answerShown ? solutionMarkup(card, skill, revealed) : '';

  const extra = [
    showRomaji ? `<div class="romaji">${esc(card.romaji)}</div>` : '',
    showMeaning ? `<div class="meaning">${esc(card.pt)}</div>` : ''
  ].join('');
  if (extra) $('prompt').insertAdjacentHTML('beforeend', extra);

  enableWordAudio(card);
  renderHints(card, skill, revealed);
  $('actions').hidden = answerShown;
  $('yes').disabled = !!current.assisted;
  $('yes').setAttribute('aria-label', current.assisted ? 'Dica revelada: resposta Sei indisponível' : 'Sei');
  $('next').hidden = !answerShown;
  $('next').textContent = 'Próximo →';
  $('next').disabled = false;
}

function enableWordAudio(card) {
  const words = japaneseWords(card);
  for (const element of selected('#prompt .japanese, #solution .japanese, #solution .kana-reading')) {
    const copy = element.cloneNode(true);
    copy.querySelectorAll('rt').forEach(node => node.remove());
    const isKana = copy.textContent === card.kana && card.kana !== card.japanese;
    if (isKana && words.map(word => word.reading).join('') !== card.kana) continue;
    const furigana = !!element.querySelector('ruby');
    element.innerHTML = words.map(word => {
      const text = isKana ? word.reading : word.text;
      const content = !isKana && furigana
        ? japaneseMarkup({ japanese: word.text, kana: word.reading }, true)
          .replace(/^<div class="japanese">|<\/div>$/g, '')
        : esc(text);
      return word.isWord
        ? `<button type="button" class="spoken-word" data-speech="${esc(card.kind === 'word' ? ttsText(card) : word.spoken)}" aria-label="Ouvir ${esc(text)}">${content}</button>`
        : content;
    }).join('');
  }
}

$('flashcard').addEventListener('click', event => {
  const word = event.target.closest('[data-speech]');
  if (!word) return;
  speak(word.dataset.speech, state, text => { $('audioMsg').textContent = text; }, { restart: true });
});

function solutionMarkup(card, skill, revealed) {
  const blocks = [];
  const promptShowsRomaji = revealed.romaji ||
    (state.romaji && ['kana', 'toKanji', 'fromKanji'].includes(skill));
  const promptShowsMeaning = revealed.meaning || (state.meaning && skill === 'kana') ||
    skill === 'reverse';
  const promptShowsJapanese = skill === 'fromKanji' ||
    (['kana', 'toKanji'].includes(skill) && !hasKanji(card)) ||
    shouldShowAutomaticFurigana(card, skill) ||
    !!revealed.japanese || !!revealed.furigana;
  const promptShowsReading = skill === 'kana' || skill === 'toKanji' ||
    !!revealed.furigana || (skill === 'kana' && state.autoFurigana);
  let rubyAddsReading = false;

  if (!promptShowsJapanese) {
    const japanese = solutionJapaneseMarkup(card, skill);
    rubyAddsReading = japanese.includes('<ruby>') || !hasKanji(card);
    blocks.push(japanese);
  }
  if (!promptShowsReading && !rubyAddsReading && card.japanese !== card.kana) {
    blocks.push(`<div class="kana-reading">${esc(card.kana)}</div>`);
  }
  if (!promptShowsRomaji) {
    blocks.push(`<div class="romaji">${esc(card.romaji)}</div>`);
  }
  if (!promptShowsMeaning) {
    blocks.push(`<div class="meaning">${esc(card.pt)}</div>`);
  }
  return blocks.join('');
}

render();
if (!current && pool(cards, state).length) createRound();

// Updates wait for existing tabs to close; never reload a study session.
if (import.meta.env.PROD && 'serviceWorker' in navigator) {
  navigator.serviceWorker.addEventListener('controllerchange', checkOfflineReady);
  withTimeout(navigator.serviceWorker.register(`${import.meta.env.BASE_URL}sw.js`, { updateViaCache: 'none' }), 15000)
    .then(registration => {
      const watchInstalling = () => {
        const worker = registration.installing;
        worker?.addEventListener('statechange', () => {
          checkOfflineReady();
          if (worker.state === 'installed' && navigator.serviceWorker.controller) {
            $('available').textContent = 'Atualização pronta. Feche todas as abas do ManJapa e reabra para usar a nova versão.';
          }
        });
      };
      registration.addEventListener('updatefound', watchInstalling);
      watchInstalling();
      checkOfflineReady();
    })
    .catch(() => {
      if (navigator.serviceWorker.controller) checkOfflineReady();
      else $('offlineStatus').textContent = 'Não foi possível preparar o acesso offline. Reabra o aplicativo com conexão.';
    });
}

checkOfflineReady();
