const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, char => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
}[char]));

const normalizeKana = value => value.replace(/[\u30a1-\u30f6]/g, char =>
  String.fromCharCode(char.charCodeAt(0) - 0x60));

function rubyMarkup(card) {
  const japanese = card.japanese || '';
  const reading = normalizeKana(card.kana || '');
  const tokens = japanese.match(/\p{Script=Han}+|[\p{Script=Hiragana}\p{Script=Katakana}ー]+|[^\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}ー]+/gu) || [];
  const output = [];
  let readingPosition = 0;
  let kanji = '';

  for (const token of tokens) {
    if (/^\p{Script=Han}+$/u.test(token)) {
      kanji += token;
      continue;
    }

    if (/^[\p{Script=Hiragana}\p{Script=Katakana}ー]+$/u.test(token)) {
      const anchor = normalizeKana(token);
      const anchorPosition = reading.indexOf(anchor, readingPosition);
      if (anchorPosition < readingPosition) return escapeHtml(japanese);

      const kanjiReading = reading.slice(readingPosition, anchorPosition);
      if (kanji && kanjiReading) {
        output.push(`<ruby>${escapeHtml(kanji)}<rt>${escapeHtml(kanjiReading)}</rt></ruby>`);
      } else if (kanji) {
        output.push(escapeHtml(kanji));
      }
      kanji = '';
      output.push(escapeHtml(token));
      readingPosition = anchorPosition + anchor.length;
      continue;
    }

    const anchorPosition = reading.indexOf(token, readingPosition);
    if (anchorPosition < readingPosition || kanji && anchorPosition !== readingPosition) {
      return escapeHtml(japanese);
    }

    if (kanji) {
      const kanjiReading = reading.slice(readingPosition, anchorPosition);
      if (kanjiReading) {
        output.push(`<ruby>${escapeHtml(kanji)}<rt>${escapeHtml(kanjiReading)}</rt></ruby>`);
      } else {
        output.push(escapeHtml(kanji));
      }
      kanji = '';
    }
    output.push(escapeHtml(token));
    readingPosition = anchorPosition + token.length;
  }

  if (kanji) {
    const kanjiReading = reading.slice(readingPosition);
    output.push(kanjiReading
      ? `<ruby>${escapeHtml(kanji)}<rt>${escapeHtml(kanjiReading)}</rt></ruby>`
      : escapeHtml(kanji));
  }
  return output.join('');
}

export function japaneseMarkup(card, showFurigana) {
  if (!showFurigana || card.japanese === card.kana) {
    return `<div class="japanese">${escapeHtml(card.japanese)}</div>`;
  }
  if (Array.isArray(card.segments) && card.segments.some(Array.isArray)) {
    const segmented = card.segments.map(segment => {
      if (!Array.isArray(segment)) return escapeHtml(segment);
      return `<ruby>${escapeHtml(segment[0])}<rt>${escapeHtml(segment[1])}</rt></ruby>`;
    }).join('');
    return `<div class="japanese">${segmented}</div>`;
  }
  return `<div class="japanese">${rubyMarkup(card)}</div>`;
}

export function solutionJapaneseMarkup(card, skill) {
  return japaneseMarkup(card, !['kana', 'toKanji'].includes(skill));
}

export function studyPromptMarkup(card, skill, revealed = {}, automaticFurigana = false) {
  if (skill === 'reverse') {
    const translation = `<div class="translation-prompt">${escapeHtml(card.pt)}</div>`;
    return revealed.japanese || revealed.furigana
      ? `${translation}${japaneseMarkup(card, !!revealed.furigana)}`
      : translation;
  }

  if (skill === 'toKanji') {
    return revealed.japanese || revealed.furigana
      ? japaneseMarkup(card, !!revealed.furigana)
      : `<div class="japanese">${escapeHtml(card.kana)}</div>`;
  }

  if (skill === 'fromKanji') {
    return japaneseMarkup(card, !!revealed.furigana);
  }

  if (revealed.japanese || revealed.furigana || automaticFurigana) {
    return japaneseMarkup(card, !!revealed.furigana || automaticFurigana);
  }

  return `<div class="japanese">${escapeHtml(card.kana)}</div>`;
}
