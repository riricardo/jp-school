import './style.css';
import { cards } from './data.js';
import {
  MAX, load, save, record, pool, hasKanji, score,
  summarize, choose
} from './engine.js';
import {
  japaneseMarkup,
  solutionJapaneseMarkup,
  studyPromptMarkup
} from './japanese.js';
import { japaneseVoices, speak, stopAudio } from './audio.js';

const APP_VERSION = '0.1.0';
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

const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
}[char]));
const situations = [...new Set(cards.flatMap(card => card.situations || []))]
  .sort((a, b) => a.localeCompare(b, 'pt'));

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
      <button id="settingsButton" class="icon" title="Configurações" aria-label="Configurações" aria-expanded="false">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m9 3-.5 2-2 1-2-.5-2 3L4 10v3l-1.5 2 2 3 2-.5 2 1L9 21h6l.5-2.5 2-1 2 .5 2-3-1.5-2v-3L21.5 9l-2-3-2 .5-2-1L15 3Z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      </button>
    </header>
    <section id="progress" class="progress" aria-label="Progresso por habilidade"></section>
    <div id="round" class="round" aria-live="polite"></div>
    <article id="flashcard">
      <div id="badge" class="badge"></div>
      <div id="prompt" class="prompt"></div>
      <button id="audioButton" class="audio" aria-label="Ouvir novamente" hidden>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M11 4 6 8H3v8h3l5 4Z M15 8a6 6 0 0 1 0 8 M18 5a10 10 0 0 1 0 14"></path>
        </svg>
      </button>
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
      <p class="small">Nos cartões Japonês → Português, mostra a leitura até alcançar 10 acertos em Kanji → Kana.</p>
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
      <p class="small">A voz japonesa depende das vozes instaladas no dispositivo.</p>
    </fieldset>
    <p id="available" class="small" role="status"></p>
    <button id="newRound" class="primary">Iniciar rodada nova</button>
    <button id="reset" class="danger">Zerar progresso</button>
    <footer>ManJapa · v${APP_VERSION}</footer>
  </dialog>`;

const $ = id => document.getElementById(id);
const selected = selector => [...document.querySelectorAll(selector)];

function updateSetting(key, value, startNewRound = false) {
  state[key] = value;
  save(state);
  if (startNewRound) createRound(false, false);
  else render();
  syncSettings();
}

function fillVoices() {
  const voices = japaneseVoices();
  $('voice').innerHTML = `<option value="auto">Automática (preferir feminina)</option>` +
    voices.map(voice => `<option value="${esc(voice.voiceURI)}">${esc(voice.name)}</option>`).join('');
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

function openSettings() {
  stopAudio();
  syncSettings();
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

function resetRound() {
  stopAudio();
  current = null;
  phase = 'question';
  counter = 0;
  deck = [];
  retries = [];
  previous = '';
}

function createRound(closeDialog = true, playAutomatically = closeDialog) {
  resetRound();
  const candidates = pool(cards, state);
  const count = Math.min(state.amount, candidates.length);

  for (let index = 0; index < count; index++) {
    const item = choose(candidates, state, previous);
    if (!item) break;
    deck.push(item);
    previous = `${item.id}/${item.skill}`;
    candidates.splice(candidates.findIndex(candidate =>
      candidate.id === item.id && candidate.skill === item.skill), 1);
  }

  previous = '';
  nextCard(playAutomatically);
  save(state);
  syncSettings();
  if (closeDialog && $('settings').open) closeSettings();
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
  if (!hasUnrevealedHints()) {
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
  const answerIsVisible = (
    (skill === 'reverse' && ['japanese', 'furigana', 'romaji'].includes(key)) ||
    (skill === 'toKanji' && ['japanese', 'furigana'].includes(key)) ||
    (skill === 'fromKanji' && ['furigana', 'romaji'].includes(key)) ||
    (skill === 'kana' && ['meaning', 'romaji'].includes(key))
  );

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
$('audioButton').onclick = play;

function play() {
  if (!current) return;
  const message = $('audioMsg');
  message.textContent = '';
  speak(current.card.kana || current.card.japanese, state, text => {
    message.textContent = text;
  });
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
$('speed').onchange = event => updateSetting('speed', Number(event.target.value));
$('voice').onchange = event => updateSetting('voice', event.target.value);

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
    (state.romaji && ['kana', 'toKanji'].includes(skill));
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
    (state.meaning && skill === 'kana') ||
    (state.romaji && ['kana', 'toKanji', 'fromKanji'].includes(skill));
  if (!answerVisible) return;

  record(state, current.id, skill, false);
  scheduleRetry(current.id, skill);
  current.assisted = true;
  save(state);
}

function render() {
  applyAutomaticAssistance();
  const stats = summarize(cards, state);
  $('progress').innerHTML = stats.map(item => `
    <div class="metric">
      <span>${labels[item.skill]}</span>
      <strong>${item.percent}%</strong>
      <div class="bar"><i style="width:${item.percent}%"></i></div>
    </div>`).join('');

  const remaining = deck.length + retries.length;
  $('round').textContent = current
    ? `${remaining + 1} cartões restantes nesta rodada · meta ${MAX}/10`
    : 'Rodada concluída';
  if (!current) {
    $('badge').textContent = pool(cards, state).length ? 'Rodada concluída' : 'Sem desafios';
    $('prompt').textContent = pool(cards, state).length
      ? 'Muito bem. Comece uma nova rodada quando quiser.'
      : 'Ajuste os modos ou o conteúdo nas configurações.';
    $('solution').hidden = true;
    $('audioButton').hidden = true;
    $('hints').hidden = true;
    $('audioMsg').textContent = '';
    $('actions').hidden = true;
    $('next').hidden = false;
    $('next').textContent = 'Nova rodada';
    $('next').disabled = pool(cards, state).length === 0;
    return;
  }

  const { card, skill } = current;
  const revealed = current.revealed || {};
  const cardHasKanji = hasKanji(card);
  const showAutomaticFurigana = shouldShowAutomaticFurigana(card, skill);
  const showFurigana = cardHasKanji && !revealed.japanese &&
    (revealed.furigana || showAutomaticFurigana);
  const showRomaji = revealed.romaji || (state.romaji && ['kana', 'toKanji'].includes(skill));
  const showMeaning = revealed.meaning || (state.meaning && skill === 'kana');
  $('badge').textContent = current.isRetry ? 'Revisão' : '';

  $('prompt').innerHTML = studyPromptMarkup(card, skill, revealed, showFurigana);

  const answerShown = phase === 'revealed';
  $('audioButton').hidden = false;
  $('solution').hidden = !answerShown;
  $('solution').innerHTML = answerShown ? solutionMarkup(card, skill, revealed) : '';

  const extra = [
    showRomaji ? `<div class="romaji">${esc(card.romaji)}</div>` : '',
    showMeaning ? `<div class="meaning">${esc(card.pt)}</div>` : ''
  ].join('');
  if (!answerShown && extra) $('prompt').insertAdjacentHTML('beforeend', extra);

  renderHints(card, skill, revealed);
  $('actions').hidden = answerShown;
  $('yes').disabled = !!current.assisted;
  $('yes').setAttribute('aria-label', current.assisted ? 'Dica revelada: resposta Sei indisponível' : 'Sei');
  $('next').hidden = !answerShown;
  $('next').textContent = 'Próximo →';
  $('next').disabled = false;
}

function solutionMarkup(card, skill, revealed) {
  const blocks = [];
  const promptShowsRomaji = revealed.romaji ||
    (state.romaji && ['kana', 'toKanji'].includes(skill));
  const promptShowsMeaning = revealed.meaning || (state.meaning && skill === 'kana') ||
    skill === 'reverse';
  const promptShowsJapanese = skill === 'fromKanji' ||
    shouldShowAutomaticFurigana(card, skill) ||
    !!revealed.japanese || !!revealed.furigana;
  const promptShowsReading = skill === 'kana' || skill === 'toKanji' ||
    !!revealed.furigana || (skill === 'kana' && state.autoFurigana);
  let rubyAddsReading = false;

  if (!promptShowsJapanese && card.japanese !== card.kana) {
    rubyAddsReading = true;
    blocks.push(solutionJapaneseMarkup(card, skill));
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
