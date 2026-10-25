const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.site-nav');
if(toggle&&nav){
  if(!nav.id)nav.id='primary-navigation';
  toggle.setAttribute('aria-controls',nav.id);
  const setMenu=(open)=>{nav.classList.toggle('open',open);document.body.classList.toggle('nav-open',open);toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');};
  toggle.addEventListener('click',()=>setMenu(!nav.classList.contains('open')));
  nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>setMenu(false)));
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&nav.classList.contains('open')){setMenu(false);toggle.focus();}});
  window.addEventListener('resize',()=>{if(window.innerWidth>900)setMenu(false);});
}
document.querySelectorAll('a[href]').forEach(link=>link.addEventListener('click',event=>{
  if(event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey||link.target==='_blank'||link.hasAttribute('download'))return;
  const destination=new URL(link.href,window.location.href);
  if(destination.origin!==window.location.origin||destination.pathname.endsWith('.pdf')||destination.href===window.location.href)return;
  event.preventDefault();
  document.body.classList.add('page-leaving');
  window.setTimeout(()=>{window.location.href=destination.href;},180);
}));
document.querySelectorAll('[data-year]').forEach(el=>{el.textContent=new Date().getFullYear();});
