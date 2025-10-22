// @ts-check
import { animate, stagger, splitText, utils } from '../animejs/dist/modules/index.js';

document.addEventListener('DOMContentLoaded', () => {
  // Hero heading animation
  const $heading = document.querySelector('.hero h1');
  if ($heading instanceof HTMLElement) {
    const split = splitText($heading, { words: true });
    split.words.forEach(word => {
      word.style.opacity = '0';
      word.style.transform = 'translateY(-30px)';
    });
    animate(split.words, {
      opacity: [0, 1],
      translateY: [-30, 0],
      easing: 'easeOutBack',
      duration: 600,
      delay: stagger(50),
    });
  }

  // Sections animation
  const sections = document.querySelectorAll('.relationship-flow, .stats-section, .synergy-section, .case-examples, .principles-section');
  sections.forEach(section => {
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
      }, { threshold: 0.15 });
      observer.observe(section);
    }
  });

  // Stats cards with counter animation
  const statCards = document.querySelectorAll('.stat-card');
  if (statCards.length > 0) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // First animate the cards appearing
          animate(statCards, {
            opacity: [0, 1],
            scale: [0.9, 1],
            easing: 'easeOutBack',
            duration: 600,
            delay: stagger(120),
          });

          // Then animate the numbers counting up
          statCards.forEach((card, index) => {
            const numberEl = card.querySelector('.stat-number');
            if (numberEl) {
              const text = numberEl.textContent.trim();

              // Parse the target value and format
              let targetValue = 0;
              let prefix = '';
              let suffix = '';

              if (text.includes('$') && text.includes('T')) {
                // $2T
                prefix = '$';
                suffix = 'T';
                targetValue = 2;
              } else if (text.includes('M+')) {
                // 10M+
                suffix = 'M+';
                targetValue = 10;
              } else if (text.includes('%')) {
                // 90%
                suffix = '%';
                targetValue = 90;
              } else if (text.includes('$') && text.includes('B+')) {
                // $100B+
                prefix = '$';
                suffix = 'B+';
                targetValue = 100;
              }

              // Create counter object
              const counter = { value: 0 };

              // Animate the counter
              animate(counter, {
                value: targetValue,
                duration: 2000,
                easing: 'easeOutExpo',
                delay: index * 120 + 300, // Start after cards appear
                onUpdate: () => {
                  const currentValue = Math.floor(counter.value);
                  numberEl.textContent = `${prefix}${currentValue}${suffix}`;
                }
              });
            }
          });

          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    if (statCards[0]) observer.observe(statCards[0]);
  }

  // Example cards animation
  const exampleCards = document.querySelectorAll('.example-card');
  if (exampleCards.length > 0) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animate(exampleCards, {
            opacity: [0, 1],
            translateX: [-20, 0],
            easing: 'easeOutCubic',
            duration: 600,
            delay: stagger(100),
          });
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    if (exampleCards[0]) observer.observe(exampleCards[0]);
  }

  // Principles animation
  const principleItems = document.querySelectorAll('.principle-item');
  if (principleItems.length > 0) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animate(principleItems, {
            opacity: [0, 1],
            translateY: [20, 0],
            easing: 'easeOutCubic',
            duration: 600,
            delay: stagger(100),
          });
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    if (principleItems[0]) observer.observe(principleItems[0]);
  }

  // Related topics section animation
  const relatedSection = document.querySelector('.related-topics-section');
  if (relatedSection instanceof HTMLElement) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animate section container
          animate(relatedSection, {
            opacity: [0, 1],
            translateY: [30, 0],
            easing: 'easeOutCubic',
            duration: 700,
          });

          // Animate related cards with stagger
          const relatedCards = document.querySelectorAll('.related-card');
          if (relatedCards.length > 0) {
            animate(relatedCards, {
              opacity: [0, 1],
              translateY: [20, 0],
              easing: 'easeOutCubic',
              duration: 600,
              delay: stagger(120),
            });
          }

          obs.unobserve(relatedSection);
        }
      });
    }, { threshold: 0.15 });
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