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

  // Sections animation
  const sections = document.querySelectorAll('.goa-motivation, .goa-spotlight, .success-stories, .goa-initiatives, .resources-section, .cta-section');
  sections.forEach((section, index) => {
    if (section instanceof HTMLElement) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animate(section, {
              opacity: [0, 1],
              translateY: [30, 0],
              easing: 'easeOutCubic',
              duration: 700,
              delay: index * 100,
            });
            obs.unobserve(section);
          }
        });
      }, { threshold: 0.2 });
      observer.observe(section);
    }
  });

  // Statistics counter animation
  const statsSection = document.querySelector('.stats-section');
  if (statsSection instanceof HTMLElement) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const statCards = Array.from(statsSection.querySelectorAll('.stat-card'))
            .filter(el => el instanceof HTMLElement);

          animate(statCards, {
            opacity: [0, 1],
            translateY: [30, 0],
            easing: 'easeOutCubic',
            duration: 500,
            delay: stagger(100, { start: 300 }),
          });

          // Animate numbers
          document.querySelectorAll('.stat-value').forEach((statValue, index) => {
            if (statValue instanceof HTMLElement) {
              const target = parseFloat(statValue.getAttribute('data-target') || '0');
              const isDecimal = target % 1 !== 0;
              const duration = 2000;
              const startTime = performance.now() + (index * 100) + 500;

              /**
               * @param {number} currentTime
               */
              function updateNumber(currentTime) {
                const elapsed = currentTime - startTime;

                if (elapsed < 0) {
                  requestAnimationFrame(updateNumber);
                  return;
                }

                if (elapsed < duration) {
                  const progress = elapsed / duration;
                  const easedProgress = 1 - Math.pow(1 - progress, 4);
                  const currentValue = easedProgress * target;

                  if (isDecimal) {
                    statValue.textContent = currentValue.toFixed(2);
                  } else if (target >= 1000) {
                    statValue.textContent = Math.floor(currentValue).toLocaleString();
                  } else {
                    statValue.textContent = Math.floor(currentValue).toString();
                  }

                  requestAnimationFrame(updateNumber);
                } else {
                  if (isDecimal) {
                    statValue.textContent = target.toFixed(2);
                  } else if (target >= 1000) {
                    statValue.textContent = Math.floor(target).toLocaleString();
                  } else {
                    statValue.textContent = Math.floor(target).toString();
                  }
                }
              }

              requestAnimationFrame(updateNumber);
            }
          });

          obs.unobserve(statsSection);
        }
      });
    }, { threshold: 0.2 });

    observer.observe(statsSection);
  }

  const cardSelectors = [
    '.motivation-card',
    '.spotlight-card',
    '.story-card',
    '.initiative-card',
    '.resource-card',
    '.cta-step'
  ];

  cardSelectors.forEach(selector => {
    const cards = Array.from(document.querySelectorAll(selector))
      .filter(el => el instanceof HTMLElement);

    if (cards.length > 0) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const card = entry.target;
            if (card instanceof HTMLElement) {
              const index = cards.indexOf(card);
              animate(card, {
                opacity: [0, 1],
                translateY: [20, 0],
                easing: 'easeOutCubic',
                duration: 600,
                delay: index * 80,
              });
              obs.unobserve(card);
            }
          }
        });
      }, { threshold: 0.2 });

      cards.forEach(card => observer.observe(card));
    }
  });

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

  // Footer animation
  animate('footer p', {
    translateY: [20, 0],
    opacity: [0, 1],
    easing: 'easeOutSine',
    duration: 600,
    delay: 400,
  });
});
