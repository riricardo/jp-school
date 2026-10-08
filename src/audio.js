// Voz de japonês via Web Speech: gratuita, mas depende das vozes instaladas no aparelho.
// Uma voz feminina NÃO pode ser garantida pelo navegador. Veja README para Piper Plus.
let lastUtterance=null;
export function japaneseVoices(){return (window.speechSynthesis?.getVoices()||[]).filter(v=>v.lang.toLowerCase().startsWith('ja'));}
export function preferVoice(voices,chosen='auto'){
 if(chosen!=='auto') return voices.find(v=>v.voiceURI===chosen)||voices[0];
 const femaleHints=/female|kyoko|nanami|haruka|sayaka|yuna|mizuki|sakura|hikari|tsukuyomi/i;
 return voices.find(v=>femaleHints.test(v.name))||voices[0];
}
export function speak(text,state,onError=()=>{}){
 if(!window.speechSynthesis){onError('Este navegador não oferece áudio japonês.');return false;}
 const voices=japaneseVoices();
 if(!voices.length){onError('Nenhuma voz japonesa instalada. Instale uma voz de japonês no sistema.');return false;}
 if(lastUtterance?.text===text&&window.speechSynthesis.speaking)return true;
 lastUtterance=null;
 window.speechSynthesis.cancel();
 const u=new SpeechSynthesisUtterance(text);
 u.lang='ja-JP';
 u.rate=Number(state.speed)||1;
 u.voice=preferVoice(voices,state.voice);
 u.onend=()=>{if(lastUtterance===u)lastUtterance=null;};
 u.onerror=event=>{
  if(lastUtterance!==u||['canceled','interrupted'].includes(event.error))return;
  lastUtterance=null;
  onError('Não foi possível reproduzir o áudio.');
 };
 lastUtterance=u;
 window.speechSynthesis.speak(u);
 return true;
}
export function stopAudio(){lastUtterance=null;window.speechSynthesis?.cancel();}
