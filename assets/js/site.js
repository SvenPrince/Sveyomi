const $=id=>document.getElementById(id);
const y=$('year'); if(y) y.textContent=new Date().getFullYear();
const mb=$('menuBtn'), mm=$('mobileMenu');
if(mb&&mm){mb.onclick=()=>mm.classList.toggle('open');mm.querySelectorAll('a').forEach(a=>a.onclick=()=>mm.classList.remove('open'));}

