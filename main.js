/* =============================================
   DJ BETO — main.js
   ============================================= */

/* ── YouTube custom player ── */
function playYT(el, embedUrl) {
  // Pause any currently playing video
  document.querySelectorAll('.yt-player.playing').forEach(p => {
    p.classList.remove('playing');
    p.querySelector('iframe').src = '';
  });
  el.classList.add('playing');
  el.querySelector('iframe').src = embedUrl;
}

/* ── Music tabs ── */
function switchTab(btn, id) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(id).classList.add('active');
}

/* ── Scroll fade-in animation ── */
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity  = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.beat-card, .video-card-yt, .evento-item, .stat-box, .letra-card').forEach(el => {
  el.style.opacity   = '0';
  el.style.transform = 'translateY(18px)';
  el.style.transition = 'opacity .5s ease, transform .5s ease, border-color .3s, box-shadow .3s';
  fadeObserver.observe(el);
});

/* ── Active nav link on scroll ── */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 110) current = s.id;
  });
  navLinks.forEach(a => {
    a.style.color = (a.getAttribute('href') === '#' + current)
      ? 'var(--azul-electrico)'
      : '';
  });
});

/* ── Contact form send button ── */
const sendBtn = document.getElementById('send-btn');
if (sendBtn) {
  sendBtn.addEventListener('click', () => {
    sendBtn.textContent = '¡Mensaje Enviado! ✓';
    sendBtn.style.background = '#00AA55';
  });
}
