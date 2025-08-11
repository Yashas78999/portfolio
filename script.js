// Mobile nav toggle
const nav = document.getElementById('nav');
const navToggle = document.getElementById('nav-toggle');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Close mobile nav when a link is clicked (good UX)
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    nav.classList.remove('open');
  });
});

// Smooth scroll for internal links (works in most browsers)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (!targetId || targetId === '#') return;
    const target = document.querySelector(targetId);
    if (!target) return;
    e.preventDefault();

    // Use scrollIntoView with smooth behavior
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Contact form: simple validation + placeholder behavior
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // Basic front-end validation
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    if (!name || !email || !message) {
      alert('Please fill all fields before submitting.');
      return;
    }

    // Replace this with Formspree / EmailJS integration when ready
    alert('Thanks — your message was received (demo).');

    form.reset();
  });
}

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
