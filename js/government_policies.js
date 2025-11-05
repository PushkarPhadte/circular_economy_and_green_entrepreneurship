// @ts-check
import { animate, stagger, splitText } from '../animejs/dist/modules/index.js';

document.addEventListener('DOMContentLoaded', () => {
  // Animate headings
  const headings = document.querySelectorAll('.fall-heading');
  headings.forEach(heading => {
    if (heading instanceof HTMLElement) {
      const split = splitText(heading, { chars: true });
      split.chars.forEach(c => { c.style.opacity = '0'; c.style.transform = 'translateY(-20px)'; });
      animate(split.chars, {
        opacity: [0, 1], translateY: [-20, 0],
        easing: 'easeOutBack', duration: 600, delay: stagger(30)
      });
    }
  });

  const revealEls = document.querySelectorAll('.in-view, .policy-card, .comparison-table');
  revealEls.forEach((el, i) => {
    const obs = new IntersectionObserver((entries, o) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          animate(el, {
            opacity: [0, 1], translateY: [30, 0],
            easing: 'easeOutCubic', duration: 700, delay: i * 100
          });
          o.unobserve(el);
        }
      });
    }, { threshold: 0.2 });
    obs.observe(el);
  });

  const upcomingSection = document.querySelector('.upcoming-policies');
  if (upcomingSection instanceof HTMLElement) {
    const upcomingObs = new IntersectionObserver((entries, o) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const upcomingCards = Array.from(upcomingSection.querySelectorAll('.upcoming-card'))
            .filter(el => el instanceof HTMLElement);

          animate(upcomingCards, {
            opacity: [0, 1],
            translateY: [30, 0],
            easing: 'easeOutCubic',
            duration: 600,
            delay: stagger(100, { start: 0 })
          });

          o.unobserve(upcomingSection);
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: '100px 0px'
    });

    upcomingObs.observe(upcomingSection);
  }

  // Related topics animation
  const relatedSection = document.querySelector('.related-topics-section');
  if (relatedSection instanceof HTMLElement) {
    const obs = new IntersectionObserver((entries, o) => {
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
            delay: stagger(80, { start: 200 }),
          });

          o.unobserve(relatedSection);
        }
      });
    }, { threshold: 0.15 });

    obs.observe(relatedSection);
  }

  // Animate impact cards
  const pieSection = document.querySelector('.policy-impact');
  if (pieSection instanceof HTMLElement) {
    const pieObs = new IntersectionObserver((entries, o) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const pieChart = pieSection.querySelector('.impact-pie-chart');
          if (pieChart) {
            animate(pieChart, {
              opacity: [0, 1],
              translateY: [30, 0],
              duration: 800,
              easing: 'easeOutCubic',
              delay: 200
            });
          }

          const impactCards = Array.from(pieSection.querySelectorAll('.impact-card'))
            .filter(el => el instanceof HTMLElement);

          animate(impactCards, {
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 700,
            easing: 'easeOutCubic',
            delay: stagger(100, { start: 400 })
          });

          const futureProjection = pieSection.querySelector('.future-projection');
          if (futureProjection instanceof HTMLElement) {
            animate(futureProjection, {
              opacity: [0, 1],
              translateY: [30, 0],
              duration: 800,
              easing: 'easeOutCubic',
              delay: 1000
            });
          }

          o.unobserve(pieSection);
        }
      });
    }, { threshold: 0.2 });

    pieObs.observe(pieSection);
  }
});
