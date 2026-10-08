import test from 'node:test';
import assert from 'node:assert/strict';
import {record,score,eligible,pool,summarize,defaults,filtered,load,SKILLS,hasKanji} from '../src/engine.js';
import {cards,studySituations} from '../src/data.js';
const card={id:'x',japanese:'水',kana:'みず',kind:'word',situations:['Restaurante']};
const noKanji={id:'y',japanese:'すみません',kana:'すみません',kind:'phrase',situations:['Aeroporto']};
const katakanaOnly={id:'k',japanese:'パスポート',kana:'パスポート',kind:'word',situations:['Aeroporto']};
const grammar={id:'g',japanese:'水を飲みます',kana:'みずをのみます',kind:'grammar',situations:['Cotidiano']};
test('Progress is tracked in the four learning directions',()=>{
 assert.deepEqual(SKILLS,['kana','reverse','toKanji','fromKanji']);
 const s=structuredClone(defaults);
 for(const skill of SKILLS)record(s,'x',skill,true);
 assert.deepEqual(Object.keys(s.progress.x),SKILLS);
});
test('10 correct cap and wrong resets',()=>{const s=structuredClone(defaults);for(let i=0;i<12;i++)record(s,'x','kana',true);assert.equal(score(s,'x','kana'),10);record(s,'x','kana',false);assert.equal(score(s,'x','kana'),0);});
test('Japanese listening score does not reset Kanji → Kana progress',()=>{
 const s=structuredClone(defaults);
 record(s,'x','fromKanji',true);
 record(s,'x','fromKanji',true);
 record(s,'x','kana',false);
 assert.equal(score(s,'x','kana'),0);
 assert.equal(score(s,'x','fromKanji'),2);
});
test('Kanji direction challenges are unavailable without Kanji',()=>{
 for(const skill of ['toKanji','fromKanji'])assert.equal(eligible(noKanji,skill),false);
 assert.equal(pool([card,noKanji],structuredClone(defaults)).length,6);
});
test('Kanji detection ignores Kana-only cards and supports Han characters',()=>{
 assert.equal(hasKanji(card),true);
 assert.equal(hasKanji(noKanji),false);
 assert.equal(hasKanji(katakanaOnly),false);
 for(const skill of ['toKanji','fromKanji']){
  assert.equal(eligible(katakanaOnly,skill),false);
  assert.equal(eligible(card,skill),true);
 }
});
test('Progress summary reflects real denominator',()=>{const s=structuredClone(defaults);record(s,'x','kana',true);assert.equal(summarize([card],s).find(x=>x.skill==='kana').percent,10);});
test('Selected skill checkboxes limit challenges without mixing disabled modes',()=>{
 const s={...structuredClone(defaults),skills:['toKanji'],kinds:['word']};
 assert.deepEqual(pool([card,noKanji],s).map(item=>item.skill),['toKanji']);
});
test('Content checkboxes filter words and phrases independently',()=>{
 const s={...structuredClone(defaults),kinds:['phrase']};
 assert.deepEqual(filtered([card,noKanji],s).map(item=>item.id),['y']);
});
test('Study situations provide the complete ordered taxonomy',()=>{
 assert.equal(studySituations.length,25);
 assert.equal(new Set(studySituations).size,25);
 assert.deepEqual(cards.flatMap(item=>item.situations),cards.flatMap(item=>item.situations)
  .filter(situation=>studySituations.includes(situation)));
 assert.deepEqual(
  filtered(cards,{...structuredClone(defaults),situation:'🍜 Restaurante'}).map(item=>item.id),
  ['taberu','mizu','arigatou','menu','grammar-wo-object','grammar-de-location','grammar-te-kudasai']
 );
});
test('Grammar is an independently selectable content kind',()=>{
 const s={...structuredClone(defaults),kinds:['grammar']};
 const grammarCards=filtered(cards,s);
 assert.ok(grammarCards.length>=5);
 assert.ok(grammarCards.every(item=>item.kind==='grammar'&&item.japanese&&item.kana&&item.romaji&&item.pt));
 assert.equal(pool(cards,s).length,grammarCards.reduce((count,item)=>count+SKILLS.filter(skill=>eligible(item,skill)).length,0));
});
test('Existing mode and content preferences migrate to checkbox settings',()=>{
 const previous=globalThis.localStorage;
 globalThis.localStorage={getItem:()=>JSON.stringify({mode:'listening',content:'words',progress:{x:{kana:3}}})};
 try{
  const s=load();
  assert.deepEqual(s.skills,['kana']);
  assert.deepEqual(s.kinds,['word']);
  assert.equal(score(s,'x','kana'),3);
  assert.equal(s.autoFurigana,true);
 }finally{
  if(previous===undefined)delete globalThis.localStorage;
  else globalThis.localStorage=previous;
 }
});
test('Saved legacy situation filters migrate to the new labels',()=>{
 const previous=globalThis.localStorage;
 globalThis.localStorage={
  getItem:()=>JSON.stringify({situation:'Restaurante'})
 };
 try{
  assert.equal(load().situation,'🍜 Restaurante');
 }finally{
  if(previous===undefined)delete globalThis.localStorage;
  else globalThis.localStorage=previous;
 }
});
test('Legacy settings preserve their study directions and display preferences',()=>{
 const previous=globalThis.localStorage;
 const saved={
  settings:{
   directions:['forward','reverse','toKanji','fromKanji'],
   kinds:['word','phrase'],
   amount:300,
   repeatGap:35,
   autoFurigana:false,
   romaji:true,
   meaning:true
  }
 };
 globalThis.localStorage={
  getItem:key=>key==='japanese-pocket-v2'?JSON.stringify(saved):null
 };
 try{
  const s=load();
  assert.deepEqual(s.skills,['kana','reverse','toKanji','fromKanji']);
  assert.equal(s.amount,300);
  assert.equal(s.retry,35);
  assert.equal(s.autoFurigana,false);
  assert.equal(s.romaji,true);
  assert.equal(s.meaning,true);
 }finally{
  if(previous===undefined)delete globalThis.localStorage;
  else globalThis.localStorage=previous;
 }
});
test('Legacy JP-PT scores fold Listening and Kanji into the unified skill',()=>{
 const previous=globalThis.localStorage;
 globalThis.localStorage={
  getItem:()=>JSON.stringify({
   skills:['kanji','listening','reverse','toKanji','fromKanji'],
   kinds:['word','phrase'],
   progress:{x:{kana:3,kanji:5,listening:4,reverse:2,toKanji:6,fromKanji:7}}
  })
 };
 try{
  const s=load();
  assert.deepEqual(s.skills,SKILLS);
  assert.equal(score(s,'x','kana'),5);
  assert.equal(score(s,'x','reverse'),2);
  assert.equal(score(s,'x','toKanji'),6);
  assert.equal(score(s,'x','fromKanji'),7);
  assert.equal(summarize([card],s).length,4);
 }finally{
  if(previous===undefined)delete globalThis.localStorage;
  else globalThis.localStorage=previous;
 }
});
