
// ─── Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

// ─── Header scroll effect
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  header.style.background = window.scrollY > 50
    ? 'rgba(20, 20, 20, 0.7)'
    : 'rgba(20, 20, 20, 0.7)';
});

// ─── Form
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.form-submit');
  btn.textContent = 'Mensagem Enviada ✓';
  btn.style.background = '#a8c400';
  setTimeout(() => {
    btn.textContent = 'Enviar Mensagem →';
    btn.style.background = '';
    e.target.reset();
  }, 3000);
}

// ─── Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ─── Hamburger (mobile) toggle
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

if (hamburger && nav) {
  function toggleNav() {
    nav.classList.toggle('open');
    hamburger.classList.toggle('open');
  }

  hamburger.addEventListener('click', toggleNav);

  // close menu when a nav link is clicked (mobile)
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('open')) toggleNav();
    });
  });

  // ensure menu closes if viewport is resized to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900 && nav.classList.contains('open')) {
      nav.classList.remove('open');
      hamburger.classList.remove('open');
    }
  });
}
