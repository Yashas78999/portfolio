// Mobile nav toggle
const nav = document.getElementById('nav');
const navToggle = document.getElementById('nav-toggle');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Close nav when link is clicked (mobile)
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => nav.classList.remove('open'));
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (!targetId || targetId === '#') return;
    const target = document.querySelector(targetId);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Contact form: simple validation + demo behavior
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();

    if (!name || !email || !message) {
      alert('Please fill all fields before submitting.');
      return;
    }

    alert('Thanks — your message was received (demo).');
    this.reset();
  });
}

// Footer year auto-update
document.getElementById('year').textContent = new Date().getFullYear();
