// @ts-check
import { animate, stagger, splitText } from '../animejs/dist/modules/index.js';

document.addEventListener('DOMContentLoaded', () => {
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

  const overviewSection = document.querySelector('.circular-economy-overview');
  if (overviewSection instanceof HTMLElement) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animate main content (left column)
          animate('.overview-main', {
            opacity: [0, 1],
            translateX: [-50, 0],
            easing: 'easeOutCubic',
            duration: 800,
          });

          // Animate benefits column (right)
          animate('.overview-benefits', {
            opacity: [0, 1],
            translateX: [50, 0],
            easing: 'easeOutCubic',
            duration: 800,
            delay: 200,
          });

          // Animate circular diagram
          animate('.circular-diagram', {
            opacity: [0, 1],
            scale: [0.8, 1],
            easing: 'spring(1, 80, 10, 0)',
            duration: 1200,
            delay: 400,
          });

          // Animate ring segments with stagger
          const ringSegments = Array.from(document.querySelectorAll('.ring-segment'))
            .filter(el => el instanceof HTMLElement);

          animate(ringSegments, {
            opacity: [0, 1],
            scale: [0, 1],
            easing: 'easeOutElastic(1, .6)',
            duration: 1000,
            delay: stagger(150, { start: 600 }),
          });

          // Animate benefit items
          const benefitItems = Array.from(document.querySelectorAll('.benefit-item'))
            .filter(el => el instanceof HTMLElement);

          animate(benefitItems, {
            opacity: [0, 1],
            translateY: [20, 0],
            easing: 'easeOutCubic',
            duration: 600,
            delay: stagger(120, { start: 800 }),
          });

          obs.unobserve(overviewSection);
        }
      });
    }, { threshold: 0.2 });

    observer.observe(overviewSection);
  }

  const problemSection = document.querySelector('.consumption-problem-section');
  if (problemSection instanceof HTMLElement) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animate warning badge
          animate('.warning-badge', {
            opacity: [0, 1],
            translateY: [-20, 0],
            scale: [0.8, 1],
            easing: 'spring(1, 80, 10, 0)',
            duration: 800,
          });

          // Animate heading
          animate('.problem-header h2', {
            opacity: [0, 1],
            translateY: [20, 0],
            easing: 'easeOutCubic',
            duration: 700,
            delay: 200,
          });

          // Animate main text
          animate('.problem-main-text', {
            opacity: [0, 1],
            translateX: [-30, 0],
            easing: 'easeOutCubic',
            duration: 800,
            delay: 400,
          });

          // Animate stat cards
          const statCards = Array.from(document.querySelectorAll('.problem-stat-card'))
            .filter(el => el instanceof HTMLElement);

          animate(statCards, {
            opacity: [0, 1],
            translateX: [30, 0],
            easing: 'easeOutCubic',
            duration: 700,
            delay: stagger(150, { start: 600 }),
          });

          // Animate impact boxes
          const impactBoxes = Array.from(document.querySelectorAll('.impact-box'))
            .filter(el => el instanceof HTMLElement);

          animate(impactBoxes, {
            opacity: [0, 1],
            translateY: [30, 0],
            easing: 'easeOutCubic',
            duration: 600,
            delay: stagger(100, { start: 800 }),
          });

          obs.unobserve(problemSection);
        }
      });
    }, { threshold: 0.2 });

    observer.observe(problemSection);
  }

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

  const storiesSection = document.querySelector('.success-stories-section');
  if (storiesSection instanceof HTMLElement) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animate heading
          animate('.success-stories-section h2', {
            opacity: [0, 1],
            translateY: [30, 0],
            easing: 'easeOutCubic',
            duration: 700,
          });

          // Animate subtitle
          animate('.section-subtitle', {
            opacity: [0, 1],
            translateY: [20, 0],
            easing: 'easeOutCubic',
            duration: 600,
            delay: 200,
          });

          // Animate story cards with stagger
          const storyCards = Array.from(document.querySelectorAll('.story-card'))
            .filter(el => el instanceof HTMLElement);

          animate(storyCards, {
            opacity: [0, 1],
            translateY: [40, 0],
            easing: 'easeOutCubic',
            duration: 700,
            delay: stagger(120, { start: 400 }),
          });

          obs.unobserve(storiesSection);
        }
      });
    }, { threshold: 0.2 });

    observer.observe(storiesSection);
  }

  document.querySelectorAll('.story-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      const icon = card.querySelector('.story-icon');
      if (icon instanceof HTMLElement) {
        animate(icon, {
          scale: [1, 1.15, 1],
          rotate: [0, 10, 0],
          duration: 500,
          easing: 'easeOutElastic(1, .6)',
        });
      }
    });
  });

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

          const cards = Array.from(benefitsSection.querySelectorAll('.card'))
            .filter(el => el instanceof HTMLElement);

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

          // Animated number counting
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

  document.querySelectorAll('.segment-content').forEach(segment => {
    segment.addEventListener('mouseenter', () => {
      if (segment instanceof HTMLElement) {
        animate(segment, {
          scale: [1, 1.15, 1],
          easing: 'easeOutElastic(1, .6)',
          duration: 600,
        });
      }
    });
  });

  document.querySelectorAll('.achievement-tag, .achievement-badge').forEach(tag => {
    tag.addEventListener('mouseenter', () => {
      if (tag instanceof HTMLElement) {
        animate(tag, {
          scale: [1, 1.08, 1],
          duration: 400,
          easing: 'easeOutCubic',
        });
      }
    });
  });

  animate('footer p', {
    translateY: [20, 0],
    opacity: [0, 1],
    easing: 'easeOutSine',
    duration: 600,
    delay: 400,
  });
});

