const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('nav');
menuBtn?.addEventListener('click',()=>{nav.style.display=nav.style.display==='flex'?'none':'flex';nav.style.position='absolute';nav.style.top='72px';nav.style.left='0';nav.style.right='0';nav.style.padding='22px';nav.style.background='#f7f5ef';nav.style.flexDirection='column';nav.style.alignItems='flex-start';});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{if(innerWidth<=900)nav.style.display='none';}));
const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('is-visible');});},{threshold:.12});
document.querySelectorAll('.reveal-section,.reveal-item').forEach(el=>observer.observe(el));
function copyToClipboard(text, message) {
  navigator.clipboard.writeText(text).then(function() {
    showToast(message);
  }).catch(function(err) {
    // 구형 브라우저 호환용 예외 처리
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showToast(message);
  });
}

function showToast(message) {
  const toast = document.getElementById('copy-toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(function() {
    toast.classList.remove('show');
  }, 2000);
}