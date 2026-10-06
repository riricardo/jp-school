(() => {
'use strict';
const $ = id => document.getElementById(id);
const KEY = 'japanese-pocket-v1';
let state = {settings:{mode:'all',furigana:false,romaji:false,meaning:false},known:[],queue:[],attempts:0,started:false};
try { const saved=JSON.parse(localStorage.getItem(KEY)); if(saved) {state.settings={...state.settings,...saved.settings};state.known=Array.isArray(saved.known)?saved.known:[];state.queue=Array.isArray(saved.queue)?saved.queue:[];state.attempts=Number(saved.attempts)||0;state.started=!!saved.started;} } catch {}
if(!['all','word','phrase'].includes(state.settings.mode))state.settings.mode='all';
const data=window.STUDY_DATA;
const selected=()=>data.filter(c=>state.settings.mode==='all'||c.kind===state.settings.mode);
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(state));}catch{$('storageWarning').hidden=false;}};
const shuffle=a=>{for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
function start(){state.queue=shuffle(selected().map(c=>c.id));state.known=state.known.filter(id=>!selected().some(c=>c.id===id));state.attempts=0;state.started=true;save();render();}
let revealed={};
function render(){
revealed={}; const pool=selected();state.queue=state.queue.filter(id=>pool.some(c=>c.id===id));
const c=data.find(c=>c.id===state.queue[0]);
$('japanese').replaceChildren();$('romajiText').hidden=true;$('meaningText').hidden=true;
$('reveal').hidden=!c;$('answers').hidden=!c;
$('progress').textContent=`Sei nesta rodada: ${pool.filter(c=>state.known.includes(c.id)).length}/${pool.length} · Restantes: ${state.queue.length} · Respostas: ${state.attempts}`;
if(!c){$('kind').textContent='Rodada concluída';$('japanese').textContent='おつかれさま！';$('meaningText').textContent='Bom trabalho! Abra ⚙️ para recomeçar.';$('meaningText').hidden=false;return;}
$('kind').textContent=c.kind==='word'?'PALAVRA':'FRASE';
for(const seg of c.segments){if(typeof seg==='string')$('japanese').append(document.createTextNode(seg));else{const ruby=document.createElement('ruby');ruby.append(document.createTextNode(seg[0]));const rt=document.createElement('rt');rt.textContent=seg[1];ruby.append(rt);$('japanese').append(ruby);}}
$('romajiText').textContent=c.romaji;$('meaningText').textContent=c.meaning;visibility();
}
function visibility(){const kana=state.settings.furigana||revealed.furigana;document.querySelectorAll('ruby').forEach(r=>r.classList.toggle('hide-reading',!kana));$('romajiText').hidden=!(state.settings.romaji||revealed.romaji);$('meaningText').hidden=!(state.settings.meaning||revealed.meaning);$('showKana').disabled=kana||!$('japanese').querySelector('ruby');$('showRomaji').disabled=!$('romajiText').hidden;$('showMeaning').disabled=!$('meaningText').hidden;}
function answer(known){const id=state.queue.shift();if(!id)return;state.attempts++;if(known){if(!state.known.includes(id))state.known.push(id);}else{state.known=state.known.filter(x=>x!==id);state.queue.splice(Math.min(3,state.queue.length),0,id);}save();render();}
$('yes').onclick=()=>answer(true);$('no').onclick=()=>answer(false);
for(const [button,key] of [['showKana','furigana'],['showRomaji','romaji'],['showMeaning','meaning']])$(button).onclick=()=>{revealed[key]=true;visibility();};
$('settingsButton').onclick=()=>{$('settings').hidden=!$('settings').hidden;$('settingsButton').setAttribute('aria-expanded',String(!$('settings').hidden));};
for(const key of ['furigana','romaji','meaning']){$(key).checked=state.settings[key];$(key).onchange=()=>{state.settings[key]=$(key).checked;save();visibility();};}
$('mode').value=state.settings.mode;$('mode').onchange=()=>{state.settings.mode=$('mode').value;start();};
$('restart').onclick=start;$('reset').onclick=()=>{if(confirm('Apagar todo o progresso e começar de novo?')){state.known=[];start();}};
if(!state.started)start();else render();
if('serviceWorker' in navigator && location.protocol!=='file:')navigator.serviceWorker.register('./sw.js').then(()=>navigator.serviceWorker.ready).then(()=>{$('offline').textContent='Arquivos salvos para uso offline.';}).catch(()=>{$('offline').textContent='Cache offline indisponível. Tente recarregar com internet.';});
})();