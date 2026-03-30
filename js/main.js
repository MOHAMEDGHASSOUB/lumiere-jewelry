// Configuration based on gemini.md
const CONFIG = {
  phone: "212600000000",
  messages: {
    general: "Hello! I'm interested in your jewelry collection.",
    order: "Hello! I'd like to place an order for [ITEM]. Can you help me?",
    price: "Hello! I'd like to know the price of [ITEM]. Thank you!",
    custom: "Hello! I'd like to request a custom jewelry design. Can we discuss the details?"
  }
};

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initScrollReveal();
  initWhatsAppLinks();
  initNavbarScroll();
});

// Mobile Menu
function initMobileMenu() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if(menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = menuBtn.querySelector('i');
      if(navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  }
}

// Scroll Reveal Animations
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  
  const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    });
  }, revealOptions);

  reveals.forEach(reveal => {
    revealObserver.observe(reveal);
  });
}

// WhatsApp Dynamic Links
function initWhatsAppLinks() {
  const waButtons = document.querySelectorAll('.wa-btn');
  
  waButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      
      const action = btn.getAttribute('data-action') || 'general';
      const item = btn.getAttribute('data-item');
      
      let messageTemplate = CONFIG.messages[action] || CONFIG.messages.general;
      
      if (item) {
        messageTemplate = messageTemplate.replace('[ITEM]', item);
      }
      
      const encodedMessage = encodeURIComponent(messageTemplate);
      const waUrl = `https://wa.me/${CONFIG.phone}?text=${encodedMessage}`;
      
      window.open(waUrl, '_blank');
    });
  });
}

// Navbar Scroll Effect
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(10, 10, 10, 0.95)';
      navbar.style.padding = '1rem 5%';
      navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
    } else {
      navbar.style.background = 'rgba(10, 10, 10, 0.6)';
      navbar.style.padding = '1.5rem 5%';
      navbar.style.boxShadow = 'none';
    }
  });
}
