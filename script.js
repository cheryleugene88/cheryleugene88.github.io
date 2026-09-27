// ============ THEME TOGGLE — light/dark, saved per-visitor via localStorage ============
(function(){
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');
  let saved = null;
  try{ saved = localStorage.getItem('theme'); }catch(e){}
  if(saved === 'light'){ root.setAttribute('data-theme','light'); if(btn) btn.textContent='☀️'; }
  btn && btn.addEventListener('click', function(){
    const isLight = root.getAttribute('data-theme') === 'light';
    if(isLight){ root.removeAttribute('data-theme'); btn.textContent='🌙'; }
    else{ root.setAttribute('data-theme','light'); btn.textContent='☀️'; }
    try{ localStorage.setItem('theme', isLight ? 'dark' : 'light'); }catch(e){}
  });
})();

// ============ MOBILE NAV — toggle the pill menu open/closed ============
document.getElementById('navToggle').addEventListener('click',function(){
  document.getElementById('pills').classList.toggle('open');
});
// close the mobile menu after tapping any nav link
document.querySelectorAll('.pills a').forEach(a=>a.addEventListener('click',()=>{
  document.getElementById('pills').classList.remove('open');
}));

// ============ SCROLL-REVEAL — fade/slide sections in as they enter the viewport ============
try{
  const els=document.querySelectorAll('.reveal');
  const io=new IntersectionObserver(entries=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
  },{threshold:.15});
  els.forEach(el=>io.observe(el));
}catch(e){
  // fallback for older browsers without IntersectionObserver support
  document.querySelectorAll('.reveal').forEach(el=>el.classList.add('in'));
}

// ============ PHOTO CAROUSEL (Organization & Volunteering) — prev/next buttons scroll the photo strip ============
const carTrack=document.getElementById('carTrack');
const carPrev=document.getElementById('carPrev');
const carNext=document.getElementById('carNext');
if(carTrack && carPrev && carNext){
  const scrollStep=()=> carTrack.querySelector('.car-slide').offsetWidth + 14; // slide width + gap
  carPrev.addEventListener('click',()=> carTrack.scrollBy({left:-scrollStep(), behavior:'smooth'}));
  carNext.addEventListener('click',()=> carTrack.scrollBy({left:scrollStep(), behavior:'smooth'}));
}
