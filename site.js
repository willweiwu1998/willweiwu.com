const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.site-nav');
if(toggle&&nav){
  if(!nav.id)nav.id='primary-navigation';
  toggle.setAttribute('aria-controls',nav.id);
  const setMenu=(open)=>{nav.classList.toggle('open',open);document.body.classList.toggle('nav-open',open);toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');toggle.textContent=open?'Close':'Menu';};
  toggle.addEventListener('click',()=>setMenu(!nav.classList.contains('open')));
  nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>setMenu(false)));
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&nav.classList.contains('open')){setMenu(false);toggle.focus();}});
  window.addEventListener('resize',()=>{if(window.innerWidth>900)setMenu(false);});
}
document.querySelectorAll('[data-year]').forEach(el=>{el.textContent=new Date().getFullYear();});
