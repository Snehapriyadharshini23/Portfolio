// Smooth scrolling for navbar links
document.querySelectorAll('.menu a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });

    // Close menu on mobile after clicking
    document.querySelector('.menu').classList.remove('active');
  });
});

// Simple contact form handler
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  alert("✅ Thank you! Your message has been sent.");
  form.reset();
});

// Mobile navbar toggle
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});
