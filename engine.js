(function(root){
'use strict';
const MAX=10;
function proficiency(data,stats){const points=data.reduce((sum,c)=>sum+Math.min(MAX,Math.max(0,stats[c.id]?.streak||0)),0);return {points,max:data.length*MAX,percent:data.length?points/(data.length*MAX)*100:0};}
function pick(pool,stats,count,random=Math.random){return pool.map(c=>({id:c.id,key:Math.pow(Math.max(.000001,random()),1/(1+(stats[c.id]?.errors||0)*2+MAX-(stats[c.id]?.streak||0)))})).sort((a,b)=>b.key-a.key).slice(0,count).map(c=>c.id);}
function answer(round,stats,known){const id=round.queue.shift();if(!id)return;const s=stats[id]??={streak:0,errors:0};if(known){s.streak=Math.min(MAX,s.streak+1);if(round.hard[id]){round.hard[id]--;if(round.hard[id])round.queue.splice(Math.min(3,round.queue.length),0,id);}}else{s.streak=0;s.errors++;round.hard[id]=2;round.queue.splice(Math.min(2,round.queue.length),0,id);}return id;}
const api={proficiency,pick,answer};if(typeof module!=='undefined')module.exports=api;else root.StudyEngine=api;
})(typeof window!=='undefined'?window:globalThis);
