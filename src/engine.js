export const MAX=10;
export const SKILLS=['kana','reverse','toKanji','fromKanji'];
export const STORAGE='manjapa-v1';
export const defaults={
  mode:'mixed',
  skills:[...SKILLS],
  content:'all',
  kinds:['word','phrase','grammar'],
  situation:'all',
  amount:100,
  retry:20,
  autoFurigana:true,
  romaji:false,
  meaning:false,
  autoAudio:false,
  speed:1,
  voice:'auto',
  progress:{}
};
function migrateLegacy(state){
  const settings=state?.settings;
  if(!settings||typeof settings!=='object')return null;
  const skillMap={
    forward:['kana'],
    reverse:['reverse'],
    toKanji:['toKanji'],
    fromKanji:['fromKanji']
  };
  const directions=Array.isArray(settings.directions)
    ?settings.directions
    :settings.inverse?['reverse']:['forward'];
  return {
    ...structuredClone(defaults),
    skills:[...new Set(directions.flatMap(direction=>skillMap[direction]||[]))],
    kinds:Array.isArray(settings.kinds)
      ?settings.kinds.filter(kind=>defaults.kinds.includes(kind))
      :[...defaults.kinds],
    amount:Math.max(1,Math.min(2000,Math.round(Number(settings.amount)||100))),
    retry:Math.max(1,Math.min(2000,Math.round(Number(settings.repeatGap)||20))),
    autoFurigana:settings.autoFurigana!==false,
    romaji:!!settings.romaji,
    meaning:!!settings.meaning
  };
}
export function load(){
  let stored;
  try {
    const saved=localStorage.getItem(STORAGE);
    stored=saved?JSON.parse(saved):null;
    if(!stored){
      const legacy=JSON.parse(localStorage.getItem('japanese-pocket-v2'));
      return migrateLegacy(legacy)||structuredClone(defaults);
    }
  }catch{return structuredClone(defaults);}
  if(!stored||typeof stored!=='object')return structuredClone(defaults);
  const state={...structuredClone(defaults),...stored};
  if(!Array.isArray(stored.skills)){
    const modeMap={kanji:'kana',listening:'kana'};
    const mode=modeMap[stored.mode]||stored.mode;
    state.skills=mode==='mixed'||!SKILLS.includes(mode)?[...SKILLS]:[mode];
  }else{
    const skillMap={kanji:'kana',listening:'kana'};
    state.skills=[...new Set(stored.skills
      .map(skill=>skillMap[skill]||skill)
      .filter(skill=>SKILLS.includes(skill)))];
  }
  if(!Array.isArray(stored.kinds)){
    state.kinds=stored.content==='words'?['word']:stored.content==='phrases'?['phrase']:stored.content==='grammar'?['grammar']:[...defaults.kinds];
  }else{
    state.kinds=stored.kinds.filter(kind=>defaults.kinds.includes(kind));
  }
  state.amount=Math.max(1,Math.min(2000,Math.round(Number(state.amount)||100)));
  state.retry=Math.max(1,Math.min(2000,Math.round(Number(state.retry)||20)));
  state.progress={};
  if(stored.progress&&typeof stored.progress==='object'){
    for(const [id,scores] of Object.entries(stored.progress)){
      if(!scores||typeof scores!=='object')continue;
      const kanaScore=Math.max(
        Number(scores.kana)||0,
        Number(scores.kanji)||0,
        Number(scores.listening)||0
      );
      state.progress[id]={};
      if(kanaScore)state.progress[id].kana=Math.min(MAX,kanaScore);
      if(Number(scores.fromKanji))state.progress[id].fromKanji=Math.min(MAX,Number(scores.fromKanji));
      for(const skill of ['reverse','toKanji']){
        if(Number(scores[skill]))state.progress[id][skill]=Math.min(MAX,Number(scores[skill]));
      }
    }
  }
  return state;
}
export function save(state){localStorage.setItem(STORAGE,JSON.stringify(state));}
export function score(state,id,skill){return Math.max(0,Math.min(MAX,state.progress?.[id]?.[skill]||0));}
export function record(state,id,skill,correct){state.progress[id]??={};state.progress[id][skill]=correct?Math.min(MAX,score(state,id,skill)+1):0;}
export function hasKanji(card){return /\p{Script=Han}/u.test(card.japanese||'');}
export function eligible(card,skill){
  return !(['toKanji','fromKanji'].includes(skill)&&!hasKanji(card));
}
export function availableSkills(card,selection){
  const skills=Array.isArray(selection)?selection:selection==='mixed'?SKILLS:[selection];
  return skills.filter(skill=>SKILLS.includes(skill)&&eligible(card,skill));
}
export function filtered(cards,state){
  const kinds=Array.isArray(state.kinds)?state.kinds:null;
  return cards.filter(card=>
    (kinds?kinds.includes(card.kind):state.content==='all'||(state.content==='words'?card.kind==='word':state.content==='grammar'?card.kind==='grammar':card.kind==='phrase'))&&
    (state.situation==='all'||card.situations?.includes(state.situation))
  );
}
export function pool(cards,state){
  const skills=Array.isArray(state.skills)?state.skills:state.mode;
  return filtered(cards,state)
    .flatMap(card=>availableSkills(card,skills).map(skill=>({id:card.id,skill,card})))
    .filter(item=>score(state,item.id,item.skill)<MAX);
}
export function summarize(cards,state){return SKILLS.map(skill=>{const applicable=filtered(cards,state).filter(c=>eligible(c,skill));const earned=applicable.reduce((t,c)=>t+score(state,c.id,skill),0);const total=applicable.length*MAX;return {skill,earned,total,percent:total?Math.round(earned/total*100):0};});}
export function choose(candidates,state,previous){const items=candidates.filter(x=>`${x.id}/${x.skill}`!==previous);const selected=items.length?items:candidates;if(!selected.length)return null;const sorted=[...selected].sort((a,b)=>score(state,a.id,a.skill)-score(state,b.id,b.skill)+Math.random()*.1-.05);return sorted[0];}
