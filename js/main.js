document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    navToggle.classList.toggle('open');
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href.startsWith('#')){
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // Scroll reveal for elements with .reveal
  const revealEls = document.querySelectorAll('.section, .card, .hero-copy, .project-card');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, {threshold: 0.12});
  revealEls.forEach(el => { el.classList.add('reveal'); io.observe(el); });
});

// Contact form handler (demo only)
function handleContact(e){
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  // Replace with real POST endpoint
  fetch('/send-message', {method:'POST', body: data}).then(r => {
    alert('Thanks! We received your message.');
    form.reset();
  }).catch(err => {
    alert('Unable to send message right now. Please try WhatsApp: +256 742 851 503');
  });
  return false;
}