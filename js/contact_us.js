// @ts-check
import { animate, stagger, splitText } from '../animejs/dist/modules/index.js';

document.addEventListener('DOMContentLoaded', () => {
  // Hero heading animation
  const $heading = document.querySelector('.fall-heading');
  if ($heading instanceof HTMLElement) {
    const split = splitText($heading, { chars: true });
    split.chars.forEach(char => {
      char.style.opacity = '0';
      char.style.transform = 'translateY(-50px)';
    });
    animate(split.chars, {
      opacity: [0, 1],
      translateY: [-50, 0],
      easing: 'easeOutBack',
      duration: 800,
      delay: stagger(30),
    });
  }

  // School info card animation
  const schoolCard = document.querySelector('.school-card');
  if (schoolCard instanceof HTMLElement) {
    animate(schoolCard, {
      opacity: [0, 1],
      translateY: [30, 0],
      easing: 'easeOutCubic',
      duration: 800,
      delay: 400,
    });
  }

  // Developer cards animation
  const developerCards = Array.from(document.querySelectorAll('.developer-card'))
    .filter(el => el instanceof HTMLElement);
  
  if (developerCards.length > 0) {
    animate(developerCards, {
      opacity: [0, 1],
      translateY: [30, 0],
      easing: 'easeOutCubic',
      duration: 700,
      delay: stagger(150, { start: 600 }),
    });
  }

  // Footer quote animation
  const footerQuote = document.querySelector('.footer-quote');
  if (footerQuote instanceof HTMLElement) {
    animate(footerQuote, {
      opacity: [0, 1],
      translateY: [20, 0],
      easing: 'easeOutSine',
      duration: 600,
      delay: 1200,
    });
  }

  // Footer animation
  animate('footer p', {
    translateY: [20, 0],
    opacity: [0, 1],
    easing: 'easeOutSine',
    duration: 600,
    delay: 1400,
  });
});
