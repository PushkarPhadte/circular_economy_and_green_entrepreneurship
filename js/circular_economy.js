// @ts-check
import { animate, stagger, createTimeline, splitText, utils } from '../animejs/dist/modules/index.js';

document.addEventListener('DOMContentLoaded', () => {
  const infoSections = document.querySelectorAll('.circular-info');
  infoSections.forEach(info => {
    if (info instanceof HTMLElement) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animate(info, {
              opacity: [0, 1],
              translateY: [36, 0],
              easing: 'easeOutCubic',
              duration: 800,
            });

            // Dust effect
            const p = info.querySelector('p');
            if (p instanceof HTMLElement) {
              const original = p.textContent.trim();
              p.innerHTML = original
                .split(' ')
                .map(w => `<span class="dust">${w}</span>`)
                .join(' ');

              /** @type {HTMLElement[]} */
              const spans = Array.from(p.querySelectorAll('.dust')).filter(el => el instanceof HTMLElement);

              spans.forEach(span => {
                const angle = Math.random() * Math.PI * 2;
                const r = 100 + Math.random() * 50;
                span.style.opacity = '0';
                span.style.transform = `
                  translate(${Math.cos(angle) * r}px, ${Math.sin(angle) * r}px)
                  rotate(${(Math.random() - 0.5) * 60}deg)
                  scale(${0.6 + Math.random() * 0.6})
                `;
              });

              animate(spans, {
                translateX: 0,
                translateY: 0,
                rotate: 0,
                scale: 1,
                opacity: 1,
                easing: 'easeOutQuart',
                duration: 1000,
                delay: stagger(25),
                complete: () => {
                  spans.forEach(span => {
                    span.style.opacity = '';
                    span.style.transform = '';
                  });
                }
              });
            }

            const items = info.querySelectorAll('ul li');
            animate(items, {
              translateX: [-20, 0],
              opacity: [0, 1],
              easing: 'easeOutCubic',
              duration: 500,
              delay: stagger(80, { start: 200 }),
            });

            obs.unobserve(info);
          }
        });
      }, { threshold: 0.3 });

      observer.observe(info);
    }
  });

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
      complete: () => {
        split.chars.forEach(char => {
          char.style.opacity = '';
          char.style.transform = '';
        });
      }
    });
  }

  // Benefits section
  const benefitsSection = document.querySelector('.benefits-section');
  if (benefitsSection instanceof HTMLElement) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animate(benefitsSection, {
            opacity: [0, 1],
            translateY: [30, 0],
            easing: 'easeOutQuad',
            duration: 700,
          });
          /** @type {HTMLElement[]} */
          const cards = Array.from(benefitsSection.querySelectorAll('.card')).filter(el => el instanceof HTMLElement);
          animate(cards, {
            opacity: [0, 1],
            translateY: [20, 0],
            easing: 'easeOutCubic',
            duration: 500,
            delay: stagger(120),
          });
          obs.unobserve(benefitsSection);
        }
      });
    }, { threshold: 0.3 });
    observer.observe(benefitsSection);
  }

  // Footer
  animate('footer p', {
    translateY: [20, 0],
    opacity: [0, 1],
    easing: 'easeOutSine',
    duration: 600,
    delay: 400,
  });

  // Header animation
  const header = document.querySelector('header');
  if (header instanceof HTMLElement) {
    animate(header, {
      backgroundColor: ['rgba(38, 89, 75, 0.85)', 'rgba(38, 89, 75, 1)'],
      easing: 'easeInOutSine',
      duration: 3000,
      direction: 'alternate',
      loop: true,
    });
  }

  // Timeline animation
  const timelineSection = document.querySelector('.timeline-section');
  if (timelineSection instanceof HTMLElement) {
    const timelineItems = Array.from(document.querySelectorAll('.timeline-item'))
      .filter(el => el instanceof HTMLElement);

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animate(timelineItems, {
            opacity: [0, 1],
            translateX: [-30, 0],
            easing: 'easeOutCubic',
            duration: 600,
            delay: stagger(150, { start: 200 }),
          });
          obs.unobserve(timelineSection);
        }
      });
    }, { threshold: 0.2 });

    observer.observe(timelineSection);
  }

  // Animation for statistics
  const statsSection = document.querySelector('.stats-dashboard');
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
});
