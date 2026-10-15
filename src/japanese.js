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
  const reading = normalizeKana(card.kana || '').replace(/[\s\p{P}\p{S}]/gu, '');
  const tokens = japanese.match(/\p{Script=Han}+|[\p{Script=Hiragana}\p{Script=Katakana}ー]+|[^\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}ー]+/gu) || [];
  const memo = new Map();
  // Match the entire suffix, rather than accepting the first repeated kana anchor.
  function align(index, position) {
    if (index === tokens.length) return position === reading.length ? [[]] : [];
    const key = `${index}/${position}`;
    if (memo.has(key)) return memo.get(key);
    const token = tokens[index];
    const results = [];
    if (/^\p{Script=Han}+$/u.test(token)) {
      for (let end = position + 1; end <= reading.length && results.length < 2; end++) {
        for (const suffix of align(index + 1, end)) {
          results.push([[token, reading.slice(position, end)], ...suffix]);
          if (results.length === 2) break;
        }
      }
    } else {
      const anchor = normalizeKana(token).replace(/[\s\p{P}\p{S}]/gu, '');
      if (reading.startsWith(anchor, position)) {
        for (const suffix of align(index + 1, position + anchor.length)) results.push([token, ...suffix]);
      }
    }
    memo.set(key, results);
    return results;
  }
  const matches = align(0, 0);
  return matches.length === 1 ? segmentMarkup(matches[0]) : escapeHtml(japanese);
}

function segmentMarkup(segments) {
  return segments.map(segment => Array.isArray(segment)
    ? `<ruby>${escapeHtml(segment[0])}<rt>${escapeHtml(segment[1])}</rt></ruby>`
    : escapeHtml(segment)).join('');
}

export function ttsText(card) {
  // Kanji supply lexical context: 話す starts with ha, unlike the topic particle は.
  return card.ttsReading || card.japanese || card.kana || '';
}

export function japaneseMarkup(card, showFurigana) {
  if (!showFurigana || card.japanese === card.kana) {
    return `<div class="japanese">${escapeHtml(card.japanese)}</div>`;
  }
  if (Array.isArray(card.segments) && card.segments.some(Array.isArray)) {
    const valid = card.segments.every(segment => typeof segment === 'string' ||
      (Array.isArray(segment) && segment.length === 2 && segment.every(part => typeof part === 'string') &&
       /\p{Script=Han}/u.test(segment[0]) && segment[1].length > 0));
    const text = card.segments.map(segment => Array.isArray(segment) ? segment[0] : segment).join('');
    const reading = card.segments.map(segment => Array.isArray(segment) ? segment[1] : segment).join('');
    const readingKey = value => normalizeKana(value).replace(/[\s\p{P}\p{S}]/gu, '');
    if (valid && text === card.japanese && readingKey(reading) === readingKey(card.kana || '')) {
      return `<div class="japanese">${segmentMarkup(card.segments)}</div>`;
    }
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
