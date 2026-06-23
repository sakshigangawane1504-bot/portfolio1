// ── MOBILE MENU ──
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

function closeMobileMenu() {
  mobileMenu.classList.remove('open');
}

// ── ROLE TYPING ANIMATION ──
const roles = ['Data Analytics Associate', 'Power BI Developer', 'SQL Analyst', 'Python Data Analyst', 'BI & Dashboard Expert'];
let roleIndex = 0;
const roleTag = document.getElementById('roleTag');
roleTag.style.transition = 'opacity 0.3s ease';

setInterval(() => {
  roleTag.style.opacity = '0';
  setTimeout(() => {
    roleIndex = (roleIndex + 1) % roles.length;
    roleTag.textContent = roles[roleIndex];
    roleTag.style.opacity = '1';
  }, 300);
}, 2500);

// ── CONTACT FORM ──
// ── CONTACT FORM WITH FORMSPREE ──
const form = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');
 
form.addEventListener('submit', async function(e) {
  e.preventDefault();
 
  const data = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value
  };
 
  // ✏️ Replace YOUR_CODE below with your Formspree code
  const FORMSPREE_URL = 'https://formspree.io/f/xaqgnoqr';
 
  try {
    formNote.textContent = 'Sending...';
    const response = await fetch(FORMSPREE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
 
    if (response.ok) {
      formNote.style.color = '#7c5cfc';
      formNote.textContent = '✅ Message sent! Sakshi will get back to you soon.';
      form.reset();
    } else {
      formNote.style.color = '#e056a0';
      formNote.textContent = '❌ Something went wrong. Please email directly.';
    }
  } catch (error) {
    formNote.style.color = '#e056a0';
    formNote.textContent = '❌ Something went wrong. Please email directly.';
  }
});

// ── SCROLL REVEAL ANIMATION ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.skill-card, .project-card, .contact-item, .timeline-item, .cert-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// ── ACTIVE NAV LINK ON SCROLL ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === `#${current}` ? '#7c5cfc' : '';
  });
});
