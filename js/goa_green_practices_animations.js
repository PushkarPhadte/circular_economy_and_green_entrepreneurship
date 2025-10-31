// @ts-check
import { animate, createSpring, splitText, stagger } from "../animejs/dist/modules/index.js";

document.addEventListener('DOMContentLoaded', () => {
  const springEasing = createSpring({ mass: 1, stiffness: 80, damping: 10, velocity: 0 });

  const sections = document.querySelectorAll(
    '.goa-strategy, .waste-models, .eco-tourism, .map-section, .gallery-section'
  );

  sections.forEach((sec, i) => {
    /** @type {HTMLElement} */
    const el = /** @type {HTMLElement} */ (sec);
    el.style.opacity = '0';
    el.style.transform = 'translateY(54px)';
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animate(el, {
            opacity: [0, 1],
            translateY: [54, 0],
            ease: 'outExpo',
            duration: 850 + i * 100,
            delay: i * 110
          });
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.13 });
    observer.observe(el);
  });

  // Animate eco cards
  ['.waste-card', '.eco-card'].forEach(selector => {
    document.querySelectorAll(selector).forEach((card, idx) => {
      const cardEl = /** @type {HTMLElement} */ (card);
      cardEl.style.opacity = '0';
      cardEl.style.transform = 'scale(0.89)';
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animate(cardEl, {
              opacity: [0, 1],
              scale: [0.89, 1],
              ease: springEasing,
              duration: 700,
              delay: idx * 90
            });
            obs.unobserve(card);
          }
        });
      }, { threshold: 0.35 });
      observer.observe(cardEl);
    });
  });

  // Gallery
  const galleryImg = /** @type {HTMLElement|null} */(document.getElementById('gallery-image'));
  if (galleryImg) {
    galleryImg.addEventListener('load', () => {
      animate(galleryImg, {
        opacity: [0.5, 1],
        scale: [0.94, 1],
        ease: 'outExpo',
        duration: 350
      });
    });
  }

  document.querySelectorAll('.legend-marker').forEach((lm, i) => {
    const legendEl = /** @type {HTMLElement} */ (lm);
    animate(legendEl, {
      scale: [0.7, 1],
      opacity: [0, 1],
      duration: 800,
      delay: 300 + i * 140,
      ease: 'outBack'
    });
  });

  const heroHeading = document.querySelector('.hero h1');
  if (heroHeading instanceof HTMLElement) {
    const split = splitText(heroHeading, { chars: true });

    split.chars.forEach(char => {
      char.style.opacity = '0';
      char.style.transform = 'translateY(-50px)';
    });

    animate(split.chars, {
      opacity: [0, 1],
      translateY: [-50, 0],
      ease: 'outBack',
      duration: 800,
      delay: stagger(30)
    });
  }

  // Related topics animation
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
          });

          const cards = Array.from(relatedSection.querySelectorAll('.related-card'))
            .filter(el => el instanceof HTMLElement);

          animate(cards, {
            opacity: [0, 1],
            translateY: [30, 0],
            easing: 'easeOutCubic',
            duration: 500,
            delay: stagger(100, { start: 200 }),
          });

          obs.unobserve(relatedSection);
        }
      });
    }, { threshold: 0.2 });

    observer.observe(relatedSection);
  }

  const heroParagraph = document.querySelector('.hero p');
  if (heroParagraph instanceof HTMLElement) {
    heroParagraph.style.opacity = '0';
    heroParagraph.style.transform = 'translateY(30px)';

    animate(heroParagraph, {
      opacity: [0, 1],
      translateY: [30, 0],
      ease: 'outExpo',
      duration: 800,
      delay: 500
    });
  }
});
