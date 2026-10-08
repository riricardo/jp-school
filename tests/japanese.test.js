import test from 'node:test';
import assert from 'node:assert/strict';
import {
  japaneseMarkup,
  solutionJapaneseMarkup,
  studyPromptMarkup
} from '../src/japanese.js';

test('furigana is applied to kanji only, not repeated above kana', () => {
  const card = {
    japanese: '助けてください',
    kana: 'たすけてください'
  };
  assert.equal(
    japaneseMarkup(card, true),
    '<div class="japanese"><ruby>助<rt>たす</rt></ruby>けてください</div>'
  );
});

test('furigana matches multiple kanji groups around kana anchors', () => {
  const card = {
    japanese: '観光で来ました',
    kana: 'かんこうできました'
  };
  assert.equal(
    japaneseMarkup(card, true),
    '<div class="japanese"><ruby>観光<rt>かんこう</rt></ruby>で<ruby>来<rt>き</rt></ruby>ました</div>'
  );
});

test('Japanese punctuation is not included in furigana reading', () => {
  const card = {
    japanese: 'すみません、駅はどこですか？',
    kana: 'すみません、えきはどこですか？'
  };
  assert.equal(
    japaneseMarkup(card, true),
    '<div class="japanese">すみません、<ruby>駅<rt>えき</rt></ruby>はどこですか？</div>'
  );
});

test('unmatched readings are shown as Japanese without misleading furigana', () => {
  const card = {
    japanese: '助けてください',
    kana: 'よみがちがう'
  };
  assert.equal(japaneseMarkup(card, true), '<div class="japanese">助けてください</div>');
});

test('Japanese markup escapes card text', () => {
  assert.equal(
    japaneseMarkup({ japanese: '<漢>', kana: '&' }, true),
    '<div class="japanese">&lt;漢&gt;</div>'
  );
});

test('Kana → Kanji replaces the kana prompt with one Japanese phrase when furigana is revealed', () => {
  const markup = studyPromptMarkup(
    { japanese: '助けてください', kana: 'たすけてください' },
    'toKanji',
    { furigana: true }
  );
  assert.equal(
    markup,
    '<div class="japanese"><ruby>助<rt>たす</rt></ruby>けてください</div>'
  );
  assert.equal((markup.match(/class="japanese"/g) || []).length, 1);
});

test('Português → Japonês reveals the phrase only once alongside its translation', () => {
  const markup = studyPromptMarkup(
    { japanese: '助けてください', kana: 'たすけてください', pt: 'me ajude' },
    'reverse',
    { furigana: true }
  );
  assert.equal((markup.match(/class="japanese"/g) || []).length, 1);
  assert.equal((markup.match(/<ruby>/g) || []).length, 1);
  assert.match(markup, /me ajude/);
});

test('Kana and Japanese prompts reveal Kanji without repeating the already visible reading', () => {
  const card = { japanese: '助けてください', kana: 'たすけてください' };
  assert.equal(
    solutionJapaneseMarkup(card, 'toKanji'),
    '<div class="japanese">助けてください</div>'
  );
  assert.equal(
    solutionJapaneseMarkup(card, 'kana'),
    '<div class="japanese">助けてください</div>'
  );
});

test('Portuguese prompt keeps furigana when revealing Japanese', () => {
  const card = { japanese: '助けてください', kana: 'たすけてください' };
  assert.equal(
    solutionJapaneseMarkup(card, 'reverse'),
    '<div class="japanese"><ruby>助<rt>たす</rt></ruby>けてください</div>'
  );
});
