// Set your actual LinkedIn and GitHub URLs here
const linkedinURL = 'https://www.linkedin.com/in/saiphapale';
const githubURL = 'https://github.com/saiphapale';

document.getElementById('linkedin-link').href = linkedinURL;
document.getElementById('github-link').href = githubURL;
document.getElementById('linkedin-link2').href = linkedinURL;
document.getElementById('github-link2').href = githubURL;

document.getElementById('resume-btn').addEventListener('click', function(e) {
  e.preventDefault();
  // Replace the link below with your actual resume PDF URL
  window.open('https://drive.google.com/file/d/1QwQkQwQkQwQkQwQkQwQkQwQkQwQkQwQ/view?usp=sharing', '_blank');
});

// Smooth scroll for navbar links
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// Highlight active section in navbar
const sections = document.querySelectorAll('section, header');
window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY + 80;
  sections.forEach(section => {
    if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      navLinks.forEach(link => link.classList.remove('active'));
      const id = section.getAttribute('id');
      if (id) {
        const activeLink = document.querySelector('.nav-links a[href="#' + id + '"]');
        if (activeLink) activeLink.classList.add('active');
      }
    }
  });
});

// Animate progress bars on scroll
function animateProgressBars() {
  document.querySelectorAll('.progress-bar').forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      bar.style.width = bar.getAttribute('style').replace('width:', '').trim();
    } else {
      bar.style.width = '0';
    }
  });
}
window.addEventListener('scroll', animateProgressBars);
window.addEventListener('load', animateProgressBars);

// Animate skills progress bars on scroll
const skillBoxes = document.querySelectorAll('.skill-progress-box');
const skillObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      // Animate the progress bar fill
      const fill = entry.target.querySelector('.progress-bar-fill');
      if (fill && fill.dataset.width) {
        fill.style.width = fill.dataset.width;
      }
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });
skillBoxes.forEach(box => skillObserver.observe(box));

// Contact form submit animation
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    contactForm.reset();
    const btn = contactForm.querySelector('button');
    btn.textContent = 'Message Sent!';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = 'Send Message';
      btn.disabled = false;
    }, 2000);
  });
} 