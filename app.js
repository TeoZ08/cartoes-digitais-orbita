// Dados ilustrativos. Substituir apenas com dados autorizados pela contratante.
const PROFILES={
  rafael:{nome:'Rafael Martins',cargo:'Consultor de Consórcios',empresa:'Órbita Consórcios',phone:'',email:''},
  mariana:{nome:'Mariana Alves',cargo:'Consultora de Consórcios',empresa:'Órbita Consórcios',phone:'',email:''}
};
const INTERESTS={
  imoveis:{label:'imóveis',message:'Olá, Mariana! Gostaria de saber mais sobre consórcio de imóveis.'},
  veiculos:{label:'veículos',message:'Olá, Mariana! Gostaria de saber mais sobre consórcio de veículos.'},
  servicos:{label:'serviços',message:'Olá, Mariana! Gostaria de saber mais sobre consórcio de serviços.'}
};
const profile=PROFILES[document.body.dataset.perfil];
let chosenInterest=null;
let toastTimer;
function toast(message){
  const el=document.querySelector('.toast');
  if(!el)return;
  el.textContent=message;
  el.classList.add('active');
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>el.classList.remove('active'),4100);
}
function esc(s){return String(s??'').replace(/\\/g,'\\\\').replace(/,/g,'\\,').replace(/;/g,'\\;').replace(/\n/g,'\\n')}
function saveContact(){
  if(!profile)return;
  const lines=['BEGIN:VCARD','VERSION:3.0',`FN:${esc(profile.nome)}`,`ORG:${esc(profile.empresa)}`,`TITLE:${esc(profile.cargo)}`];
  if(profile.phone)lines.push(`TEL;TYPE=CELL:${profile.phone}`);
  if(profile.email)lines.push(`EMAIL:${profile.email}`);
  lines.push(`URL:${location.href}`,'END:VCARD');
  const blob=new Blob([lines.join('\r\n')+'\r\n'],{type:'text/vcard;charset=utf-8'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');a.href=url;
  a.download=profile.nome.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-')+'.vcf';
  a.click();setTimeout(()=>URL.revokeObjectURL(url),3000);
  toast('Contato disponível para adicionar à agenda.');
}
async function copyText(text){
  try{await navigator.clipboard.writeText(text);return true}catch{}
  try{
    const field=document.createElement('textarea');
    field.value=text;field.style.position='fixed';field.style.left='-9999px';
    document.body.append(field);field.select();
    const ok=document.execCommand('copy');field.remove();return ok;
  }catch{return false}
}
async function share(){
  if(navigator.share){try{await navigator.share({title:document.title,url:location.href});return}catch(e){if(e.name==='AbortError')return}}
  toast(await copyText(location.href)?'Link do perfil copiado.':'Copie o endereço na barra do navegador.');
}
function whatsappLink(message){
  if(!profile?.phone)return null;
  const number=profile.phone.replace(/\D/g,'');
  if(number.length<10)return null;
  return 'https://wa.me/'+number+'?text='+encodeURIComponent(message);
}
function contact(){
  const url=whatsappLink('Olá! Gostaria de conversar sobre opções de consórcio.');
  if(url){window.location.href=url;return}
  toast('O WhatsApp será ativado com o número oficial do consultor.');
}
function setInterest(key){
  if(!INTERESTS[key]||document.body.dataset.perfil!=='mariana')return;
  chosenInterest=key;
  for(const btn of document.querySelectorAll('[data-interest]'))btn.setAttribute('aria-pressed',String(btn.dataset.interest===key));
  const summary=document.getElementById('interest-summary');
  const button=document.querySelector('[data-action="quote"]');
  if(summary)summary.textContent=INTERESTS[key].message;
  if(button){button.disabled=false;button.textContent=profile.phone?'Conversar sobre '+INTERESTS[key].label+' ↗':'Copiar mensagem de exemplo ↗';}
}
async function quote(){
  if(!chosenInterest){toast('Escolha uma modalidade primeiro.');return}
  const msg=INTERESTS[chosenInterest].message;
  const url=whatsappLink(msg);
  if(url){window.location.href=url;return}
  toast(await copyText(msg)?'Mensagem copiada. O número da consultora será adicionado na personalização.':'O número da consultora ainda não foi configurado. Mensagem: '+msg);
}
document.addEventListener('click',e=>{
  const b=e.target.closest('[data-action],[data-interest]');
  if(!b)return;
  if(b.dataset.interest){setInterest(b.dataset.interest);return}
  const a=b.dataset.action;
  if(a==='vcard')saveContact();
  else if(a==='share')share();
  else if(a==='whatsapp')contact();
  else if(a==='quote')quote();
});