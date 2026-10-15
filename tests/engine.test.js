import test from 'node:test';
import assert from 'node:assert/strict';
import {record,score,eligible,pool,summarize,defaults,filtered,load,save,MAX,SKILLS,hasKanji,choose,buildRound,hintRevealsAnswer} from '../src/engine.js';
import {cards,studySituations} from '../src/data.js';
const card={id:'x',japanese:'水',kana:'みず',kind:'word',situations:['Restaurante']};
const noKanji={id:'y',japanese:'すみません',kana:'すみません',kind:'phrase',situations:['Aeroporto']};
const katakanaOnly={id:'k',japanese:'パスポート',kana:'パスポート',kind:'word',situations:['Aeroporto']};
const grammar={id:'g',japanese:'水を飲みます',kana:'みずをのみます',kind:'grammar',situations:['Cotidiano']};
test('Round selection prioritizes lower scores and avoids the previous challenge',()=>{
 const state=structuredClone(defaults);
 record(state,'x','kana',true);
 const candidates=[{id:'x',skill:'kana'},{id:'y',skill:'kana'},{id:'k',skill:'kana'}];
 assert.equal(choose(candidates,state,'y/kana').id,'k');
 assert.equal(choose([candidates[0]],state,'x/kana'),candidates[0]);
 assert.equal(choose([],state,''),null);
});
test('Round construction yields before work and preserves candidates and score priority',async()=>{
 const state=structuredClone(defaults);
 record(state,'x','kana',true);
 const candidates=pool([card,noKanji,katakanaOnly],state);
 const original=[...candidates];
 let yielded=false;
 const task=buildRound(candidates,state,candidates.length,{yieldTask:async()=>{yielded=true;}});
 assert.equal(yielded,true);
 const round=await task;
 assert.deepEqual(candidates,original);
 assert.equal(new Set(round.map(item=>`${item.id}/${item.skill}`)).size,candidates.length);
 assert.equal(round.at(-1).id,'x');
 assert.equal(round.at(-1).skill,'kana');
});
test('Cancelled round construction stops when a new configuration replaces it',async()=>{
 const state=structuredClone(defaults);
 let cancelled=false;
 const round=await buildRound(pool([card],state),state,4,{
   cancelled:()=>cancelled,
   yieldTask:async()=>{cancelled=true;}
 });
 assert.equal(round,null);
});
test('Progress is tracked in the four learning directions',()=>{
 assert.deepEqual(SKILLS,['kana','reverse','toKanji','fromKanji']);
 const s=structuredClone(defaults);
 for(const skill of SKILLS)record(s,'x',skill,true);
 assert.deepEqual(Object.keys(s.progress.x),SKILLS);
});
test('Five correct answers master only the exact card and skill; a wrong answer resets its streak',()=>{
 const s=structuredClone(defaults);
 for(let i=0;i<MAX-1;i++)record(s,'x','kana',true);
 assert.ok(pool([card],s).some(item=>item.skill==='kana'));
 record(s,'x','kana',true);
 assert.equal(score(s,'x','kana'),5);
 assert.ok(!pool([card],s).some(item=>item.skill==='kana'));
 assert.equal(score(s,'y','kana'),0);
 assert.equal(score(s,'x','reverse'),0);
 record(s,'x','kana',false);
 assert.equal(score(s,'x','kana'),0);
});
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
test('Progress summary reflects real denominator',()=>{const s=structuredClone(defaults);record(s,'x','kana',true);assert.equal(summarize([card],s).find(x=>x.skill==='kana').percent,20);});
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
 const restaurantCards=filtered(cards,{...structuredClone(defaults),situation:'🍜 Restaurante'});
 assert.ok(['taberu','mizu','arigatou','menu','grammar-wo-object','grammar-de-location','grammar-te-kudasai']
  .every(id=>restaurantCards.some(item=>item.id===id)));
 assert.ok(restaurantCards.every(item=>item.situations.includes('🍜 Restaurante')));
 assert.equal(new Set(cards.map(item=>item.id)).size,cards.length);
 assert.equal(cards.filter(item=>item.id.startsWith('mj-')).length,1343);
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
  assert.equal(score(s,'x','kana'),1.5);
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
  assert.equal(score(s,'x','kana'),2.5);
  assert.equal(score(s,'x','reverse'),1);
  assert.equal(score(s,'x','toKanji'),3);
  assert.equal(score(s,'x','fromKanji'),3.5);
  assert.equal(summarize([card],s).length,4);
 }finally{
  if(previous===undefined)delete globalThis.localStorage;
  else globalThis.localStorage=previous;
 }
});

test('Versioned score migration preserves percentage, incomplete mastery and saved settings exactly once',()=>{
 const previous=globalThis.localStorage;
 let stored=JSON.stringify({speed:0.8,voice:'local-ja',progress:{
  zero:{kana:0},half:{kana:5,reverse:2},almost:{kana:9},complete:{kana:10},bad:{kana:-3,reverse:'invalid'}
 }});
 globalThis.localStorage={getItem:()=>stored,setItem:(_,value)=>{stored=value;}};
 try{
  const s=load();
  for(let value=0;value<=10;value++){
   const raw=stored;
   stored=JSON.stringify({progress:{x:{kana:value}}});
   assert.equal(score(load(),'x','kana')/MAX,value/10);
   stored=raw;
  }
  assert.equal(score(s,'almost','kana'),4.5);
  assert.equal(score(s,'complete','kana'),5);
  assert.equal(score(s,'bad','kana'),0);
  assert.equal(s.speed,0.8);
  assert.equal(s.voice,'local-ja');
  save(s);
  assert.deepEqual(load().progress,s.progress);
  record(s,'almost','kana',true);
  assert.equal(score(s,'almost','kana'),5);
 }finally{
  if(previous===undefined)delete globalThis.localStorage;
  else globalThis.localStorage=previous;
 }
});

test('Hints penalize only the answer being tested',()=>{
 assert.equal(hintRevealsAnswer('kana','romaji'),false);
 assert.equal(hintRevealsAnswer('kana','meaning'),true);
 assert.equal(hintRevealsAnswer('toKanji','romaji'),false);
 assert.equal(hintRevealsAnswer('toKanji','japanese'),true);
 assert.equal(hintRevealsAnswer('fromKanji','japanese'),false);
 assert.equal(hintRevealsAnswer('fromKanji','furigana'),true);
 assert.equal(hintRevealsAnswer('reverse','meaning'),false);
 assert.equal(hintRevealsAnswer('reverse','romaji'),true);
});
