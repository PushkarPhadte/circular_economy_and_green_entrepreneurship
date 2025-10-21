// @ts-check
import { animate, stagger, splitText } from '../animejs/dist/modules/index.js';

document.addEventListener('DOMContentLoaded', () => {
  // Heading split animation
  const heading = document.querySelector('.fall-heading');
  if (heading instanceof HTMLElement) {
    const split = splitText(heading, { words: true });
    split.words.forEach(w => w.style.opacity = '0');
    animate(split.words, {
      opacity: [0, 1],
      translateY: [-30, 0],
      easing: 'easeOutBack',
      duration: 600,
      delay: stagger(50),
    });
  }

  // Innovation cards animation
  const innovationCards = document.querySelectorAll('.innovation-card');
  innovationCards.forEach((el, idx) => {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(ent => {
        if (ent.isIntersecting) {
          animate(el, {
            opacity: [0, 1],
            translateY: [20, 0],
            easing: 'easeOutCubic',
            duration: 600,
            delay: Math.min(idx * 80, 400),
          });
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.15 });
    observer.observe(el);
  });

  // Gallery items animation
  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach((el, idx) => {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(ent => {
        if (ent.isIntersecting) {
          animate(el, {
            opacity: [0, 1],
            scale: [0.95, 1],
            easing: 'easeOutCubic',
            duration: 500,
            delay: idx * 100,
          });
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.2 });
    observer.observe(el);
  });

  const futureVision = document.querySelector('.future-vision');
  if (futureVision instanceof HTMLElement) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animate(futureVision, {
            opacity: [0, 1],
            translateY: [20, 0],
            easing: 'easeOutCubic',
            duration: 600,
            delay: 0, // No delay - animate immediately when visible
          });
          obs.unobserve(futureVision);
        }
      });
    }, { threshold: 0.2 });
    observer.observe(futureVision);
  }

  // Related topics animation (appears after future vision)
  const relatedSection = document.querySelector('.related-topics-section');
  if (relatedSection instanceof HTMLElement) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animate(relatedSection, {
            opacity: [0, 1],
            translateY: [30, 0],
            easing: 'easeOutCubic',
            duration: 600,
            delay: 0,
          });

          const cards = Array.from(relatedSection.querySelectorAll('.related-card'))
            .filter(el => el instanceof HTMLElement);

          animate(cards, {
            opacity: [0, 1],
            translateY: [30, 0],
            easing: 'easeOutCubic',
            duration: 500,
            delay: stagger(80, { start: 200 }),
          });

          obs.unobserve(relatedSection);
        }
      });
    }, { threshold: 0.15 });

    observer.observe(relatedSection);
  }
});
