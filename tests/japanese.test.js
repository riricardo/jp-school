import test from 'node:test';
import assert from 'node:assert/strict';
import { cards } from '../src/data.js';
import {
  japaneseMarkup,
  solutionJapaneseMarkup,
  studyPromptMarkup, ttsText, japaneseWords
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

test('Repeated は anchors align the full reading of 発音は難しいです', () => {
  assert.equal(japaneseMarkup({japanese:'発音は難しいです。',kana:'はつおんはむずかしいです。'},true),
    '<div class="japanese"><ruby>発音<rt>はつおん</rt></ruby>は<ruby>難<rt>むずか</rt></ruby>しいです。</div>');
});

test('Ambiguous furigana needs explicit segments and invalid segments cannot change displayed text', () => {
  const card={japanese:'甲あ乙',kana:'かああおつ'};
  assert.equal(japaneseMarkup(card,true),'<div class="japanese">甲あ乙</div>');
  assert.equal(japaneseMarkup({...card,segments:[['甲','かあ'],'あ',['乙','おつ']]},true),
    '<div class="japanese"><ruby>甲<rt>かあ</rt></ruby>あ<ruby>乙<rt>おつ</rt></ruby></div>');
  assert.equal(japaneseMarkup({...card,segments:[['別','べつ']]},true),'<div class="japanese">甲あ乙</div>');
});

test('Furigana preserves katakana and rejects trailing unmatched readings', () => {
  assert.match(japaneseMarkup({japanese:'テレビを見る',kana:'テレビをみる'},true),/テレビを<ruby>見<rt>み<\/rt><\/ruby>る/);
  assert.equal(japaneseMarkup({japanese:'見る',kana:'みるもの'},true),'<div class="japanese">見る</div>');
});

test('TTS retains lexical kanji context and supports explicit particle readings without altering display', () => {
  assert.equal(ttsText({japanese:'話しましょう',kana:'はなしましょう'}),'話しましょう');
  assert.equal(ttsText({japanese:'私は話します',kana:'わたしははなします'}),'私は話します');
  assert.equal(ttsText({japanese:'花',kana:'はな'}),'はな');
  const card={japanese:'発音は難しいです',kana:'はつおんはむずかしいです',ttsReading:'ハツオン ワ ムズカシイデス'};
  assert.equal(ttsText(card),'ハツオン ワ ムズカシイデス');
  assert.match(japaneseMarkup(card,true),/発音/);
  assert.equal(card.kana,'はつおんはむずかしいです');
});

test('Reviewed corpus preserves katakana, lexical ha and explicit pronunciation segments', () => {
  const television=cards.find(card=>card.japanese==='テレビゲーム');
  assert.equal(television.kana,'テレビゲーム');
  assert.equal(studyPromptMarkup(television,'kana'),'<div class="japanese">テレビゲーム</div>');
  assert.equal(cards.find(card=>card.id==='mj-p-4c68112813b4').romaji,'ohayou gozaimasu.');
  assert.equal(cards.find(card=>card.id==='mj-p-bb6e800adb89').romaji,'hatsuon wa atte imasu ka?');
  for(const card of cards.filter(card=>card.japanese.includes('話しましょう'))){
    assert.ok(ttsText(card).includes('話しましょう'));
    assert.ok(card.romaji.includes('hanashimashou'));
  }
  const pronunciation=cards.find(card=>card.id==='mj-p-789a57e7c41f');
  assert.match(japaneseMarkup(pronunciation,true),/<ruby>発音<rt>はつおん<\/rt><\/ruby>は<ruby>難<rt>むずか<\/rt><\/ruby>しいです。/);
  assert.equal(ttsText(pronunciation),'ハツオン ワ ムズカシイデス。');
  for(const card of cards.filter(card=>/^[\p{Script=Katakana}ー・]+$/u.test(card.japanese))){
    assert.equal(card.kana,card.japanese,card.id);
  }
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

test('Isolated words use the stored reading instead of an ambiguous kanji reading', () => {
  for (const [japanese, kana] of [['水', 'みず'], ['上', 'うえ'], ['紙', 'かみ'], ['机', 'つくえ']]) {
    const card = { kind: 'word', japanese, kana };
    assert.equal(ttsText(card), kana);
    assert.equal(japaneseWords(card).map(word => word.reading).join(''), kana);
  }
});

test('Clickable words preserve sentence text, punctuation and contextual kanji readings', () => {
  const card = { japanese: '水を飲みます。', kana: 'みずをのみます。' };
  const words = japaneseWords(card);
  assert.equal(words.map(word => word.text).join(''), card.japanese);
  assert.equal(words.map(word => word.reading).join(''), card.kana);
  assert.equal(words.find(word => word.text === '水').spoken, 'みず');
  assert.equal(words.at(-1).isWord, false);
});

test('Word controls preserve the exact written text and reading throughout the corpus', () => {
  for (const card of cards) {
    const words = japaneseWords(card);
    assert.equal(words.map(word => word.text).join(''), card.japanese, card.id);
    assert.equal(words.map(word => word.reading).join(''), card.kana, card.id);
  }
});
