// @ts-check
import { animate, stagger } from '../animejs/dist/modules/index.js';

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav');
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const dropdownParents = document.querySelectorAll('.has-dropdown');
  
  // Sticky nav with scroll effect
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      nav?.classList.add('scrolled');
    } else {
      nav?.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  });

  // Mobile menu toggle
  mobileToggle?.addEventListener('click', () => {
    mobileToggle.classList.toggle('active');
    navMenu?.classList.toggle('active');
    document.body.style.overflow = navMenu?.classList.contains('active') ? 'hidden' : '';
  });

  // Mobile dropdown toggle
  dropdownParents.forEach(parent => {
    const link = parent.querySelector('.nav-link');
    link?.addEventListener('click', (e) => {
      if (window.innerWidth <= 900) {
        e.preventDefault();
        parent.classList.toggle('active');
      }
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (window.innerWidth <= 900) {
      const target = e.target;
      if (target instanceof HTMLElement && 
          !target.closest('nav') && 
          navMenu?.classList.contains('active')) {
        mobileToggle?.classList.remove('active');
        navMenu?.classList.remove('active');
        document.body.style.overflow = '';
      }
    }
  });

  // Animate nav items on load
  const navItems = document.querySelectorAll('.nav-item');
  animate(navItems, {
    opacity: [0, 1],
    translateY: [-20, 0],
    duration: 600,
    delay: stagger(80),
    easing: 'easeOutCubic'
  });

  // Set active page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.includes(currentPage)) {
      link.classList.add('active');
    }
  });
});
