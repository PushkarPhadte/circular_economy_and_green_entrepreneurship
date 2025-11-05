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

  const overviewSection = document.querySelector('.green-entrepreneurship-overview');
  if (overviewSection instanceof HTMLElement) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animate main content
          animate('.overview-main', {
            opacity: [0, 1],
            translateX: [-50, 0],
            easing: 'easeOutCubic',
            duration: 800,
          });

          // Animate benefits column
          animate('.overview-benefits', {
            opacity: [0, 1],
            translateX: [50, 0],
            easing: 'easeOutCubic',
            duration: 800,
            delay: 200,
          });

          // Animate highlight boxes
          const highlightBoxes = Array.from(document.querySelectorAll('.highlight-box'))
            .filter(el => el instanceof HTMLElement);

          animate(highlightBoxes, {
            opacity: [0, 1],
            translateY: [20, 0],
            easing: 'easeOutCubic',
            duration: 600,
            delay: stagger(100, { start: 400 }),
          });

          // Animate benefit items
          const benefitItems = Array.from(document.querySelectorAll('.benefit-item'))
            .filter(el => el instanceof HTMLElement);

          animate(benefitItems, {
            opacity: [0, 1],
            translateY: [20, 0],
            easing: 'easeOutCubic',
            duration: 600,
            delay: stagger(120, { start: 600 }),
          });

          // Animate stats bar
          animate('.overview-stats-bar', {
            opacity: [0, 1],
            translateY: [30, 0],
            easing: 'spring(1, 80, 10, 0)',
            duration: 1000,
            delay: 1000,
          });

          obs.unobserve(overviewSection);
        }
      });
    }, { threshold: 0.2 });

    observer.observe(overviewSection);
  }

  // Key Insights Animation
  const insightsSection = document.querySelector('.key-insights-section');
  if (insightsSection instanceof HTMLElement) {
    const insightCards = Array.from(document.querySelectorAll('.insight-card'))
      .filter(el => el instanceof HTMLElement);

    animate(insightCards, {
      opacity: [0, 1],
      translateY: [30, 0],
      easing: 'spring(1, 80, 10, 0)',
      duration: 1000,
      delay: stagger(150, { start: 600 }),
    });

    // Add pulse animation on hover
    insightCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        const icon = card.querySelector('.insight-icon');
        if (icon instanceof HTMLElement) {
          animate(icon, {
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0],
            duration: 500,
            easing: 'easeOutElastic(1, .6)',
          });
        }
      });
    });
  }

  // Info sections animation
  const infoSections = document.querySelectorAll('.entrepreneur-info, .entrepreneur-history, .entrepreneur-examples');
  infoSections.forEach(section => {
    if (section instanceof HTMLElement) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animate(section, {
              opacity: [0, 1],
              translateY: [30, 0],
              easing: 'easeOutCubic',
              duration: 700,
            });
            obs.unobserve(section);
          }
        });
      }, { threshold: 0.2 });
      observer.observe(section);
    }
  });

  // Sidebar animation
  const greenFacts = document.querySelector('.green-facts');
  if (greenFacts instanceof HTMLElement) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animate(greenFacts, {
            opacity: [0, 1],
            translateX: [50, 0],
            easing: 'easeOutCubic',
            duration: 700,
          });
          obs.unobserve(greenFacts);
        }
      });
    }, { threshold: 0.3 });
    observer.observe(greenFacts);
  }

  // Benefits cards animation
  const benefitsSection = document.querySelector('.benefits-section');
  if (benefitsSection instanceof HTMLElement) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animate(benefitsSection, {
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 600,
          });
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
    }, { threshold: 0.2 });
    observer.observe(benefitsSection);
  }

  // Animate related topics section
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

  // Animated counter for statistics
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

  // Footer animation
  animate('footer p', {
    translateY: [20, 0],
    opacity: [0, 1],
    easing: 'easeOutSine',
    duration: 600,
    delay: 400,
  });
});