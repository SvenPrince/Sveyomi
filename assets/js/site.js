const $=id=>document.getElementById(id);
const y=$('year'); if(y) y.textContent=new Date().getFullYear();
const mb=$('menuBtn'), mm=$('mobileMenu');
if(mb&&mm){mb.onclick=()=>mm.classList.toggle('open');mm.querySelectorAll('a').forEach(a=>a.onclick=()=>mm.classList.remove('open'));}


const lb=document.createElement('div');lb.className='lightbox';lb.innerHTML='<img alt="">';document.body.appendChild(lb);
document.querySelectorAll('.gallery-item img').forEach(img=>{img.onclick=()=>{lb.querySelector('img').src=img.dataset.full||img.src;lb.classList.add('open');};});
lb.onclick=()=>lb.classList.remove('open');document.addEventListener('keydown',e=>{if(e.key==='Escape')lb.classList.remove('open');});