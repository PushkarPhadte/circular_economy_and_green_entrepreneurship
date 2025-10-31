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

  // Institution showcase fade-in
  const showcase = document.querySelector('.institution-showcase');
  if (showcase instanceof HTMLElement) {
    animate(showcase, {
      opacity: [0, 1],
      translateY: [40, 0],
      easing: 'easeOutCubic',
      duration: 1000,
      delay: 400,
    });
  }

  // Image container animation
  const imageContainer = document.querySelector('.institution-image-container');
  if (imageContainer instanceof HTMLElement) {
    animate(imageContainer, {
      opacity: [0, 1],
      scale: [0.9, 1],
      easing: 'spring(1, 80, 10, 0)',
      duration: 1200,
      delay: 600,
    });
  }

  // Institution details slide-in
  const institutionDetails = document.querySelector('.institution-details');
  if (institutionDetails instanceof HTMLElement) {
    animate(institutionDetails, {
      opacity: [0, 1],
      translateX: [40, 0],
      easing: 'easeOutCubic',
      duration: 1000,
      delay: 800,
    });
  }

  // Info items stagger animation
  const infoItems = Array.from(document.querySelectorAll('.info-item'))
    .filter(el => el instanceof HTMLElement);
  
  if (infoItems.length > 0) {
    animate(infoItems, {
      opacity: [0, 1],
      translateX: [-20, 0],
      easing: 'easeOutCubic',
      duration: 600,
      delay: stagger(80, { start: 1000 }),
    });
  }

  // Institution description fade-in
  const description = document.querySelector('.institution-description');
  if (description instanceof HTMLElement) {
    animate(description, {
      opacity: [0, 1],
      translateY: [20, 0],
      easing: 'easeOutSine',
      duration: 800,
      delay: 1400,
    });
  }

  // Mission card scale-in
  const missionSection = document.querySelector('.mission-section');
  if (missionSection instanceof HTMLElement) {
    animate(missionSection, {
      opacity: [0, 1],
      scale: [0.95, 1],
      easing: 'spring(1, 80, 10, 0)',
      duration: 1000,
      delay: 1600,
    });
  }

  // Floating shapes animation
  const shapes = Array.from(document.querySelectorAll('.shape'))
    .filter(el => el instanceof HTMLElement);
  
  if (shapes.length > 0) {
    animate(shapes, {
      opacity: [0, 0.15],
      scale: [0, 1],
      easing: 'easeOutElastic(1, .6)',
      duration: 1500,
      delay: stagger(200, { start: 1000 }),
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
      delay: 1800,
    });
  }

  // Footer animation
  animate('footer p', {
    translateY: [20, 0],
    opacity: [0, 1],
    easing: 'easeOutSine',
    duration: 600,
    delay: 2000,
  });

  // Hover animation for mission icon
  const missionIcon = document.querySelector('.mission-icon');
  if (missionIcon instanceof HTMLElement) {
    missionIcon.addEventListener('mouseenter', () => {
      animate(missionIcon, {
        scale: [1, 1.2, 1],
        rotate: [0, 360],
        duration: 600,
        easing: 'easeOutElastic(1, .6)',
      });
    });
  }
});
