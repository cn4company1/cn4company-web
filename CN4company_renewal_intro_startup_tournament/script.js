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
// 클립보드 복사 함수
function copyToClipboard(text, message) {
  if (navigator.clipboard && window.isSecureContext) {
    // 최신 브라우저 방식 (HTTPS 및 Netlify 환경)
    navigator.clipboard.writeText(text).then(function() {
      showToast(message);
    }).catch(function(err) {
      fallbackCopyTextToClipboard(text, message);
    });
  } else {
    // 구형 브라우저 또는 대체 방식
    fallbackCopyTextToClipboard(text, message);
  }
}

// 대체 복사 방식 (ExecCommand)
function fallbackCopyTextToClipboard(text, message) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";  // 모바일 스크롤 튐 방지
  textArea.style.left = "-999999px";
  textArea.style.top = "-999999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  
  try {
    document.execCommand('copy');
    showToast(message);
  } catch (err) {
    alert("복사에 실패했습니다. 직접 선택하여 복사해 주세요.");
  }
  
  document.body.removeChild(textArea);
}

// 토스트 알림 표시 함수
function showToast(message) {
  const toast = document.getElementById('copy-toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(function() {
    toast.classList.remove('show');
  }, 2000);
}