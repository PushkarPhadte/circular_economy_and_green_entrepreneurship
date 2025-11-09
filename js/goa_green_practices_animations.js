// @ts-check
import { animate, spring, splitText, stagger } from "../animejs/dist/modules/index.js";

document.addEventListener('DOMContentLoaded', () => {
  const springEasing = spring({ mass: 1, stiffness: 80, damping: 10, velocity: 0 });

  // Animate main sections
  const sections = document.querySelectorAll(
    '.goa-strategy, .waste-management-section, .eco-tourism, .map-section, .other-initiatives, .solar-energy-section, .construction-section, .community-section, .impact-section, .roadmap-section, .challenge-highlight'
  );

  sections.forEach((sec, i) => {
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
            duration: 850 + i * 50,
            delay: i * 80
          });
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    observer.observe(el);
  });

  // Animate blog article sections
  const articles = document.querySelectorAll('.initiative-article');
  articles.forEach((article, idx) => {
    const articleEl = /** @type {HTMLElement} */ (article);
    articleEl.style.opacity = '0';
    articleEl.style.transform = 'translateY(60px)';

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animate(articleEl, {
            opacity: [0, 1],
            translateY: [60, 0],
            ease: 'outExpo',
            duration: 900,
            delay: 100
          });
          obs.unobserve(article);
        }
      });
    }, { threshold: 0.05 });
    observer.observe(articleEl);
  });

  // Animate smaller cards
  ['.initiative-card', '.eco-card', '.hotel-certification-card', '.strategy-card', '.community-card', '.impact-card', '.solar-card', '.roadmap-item'].forEach(selector => {
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
      }, { threshold: 0.25 });
      observer.observe(cardEl);
    });
  });

  // Animate Mandrem Beach sections
  const mandremSections = document.querySelectorAll('.mandrem-beach-article');
  if (mandremSections.length > 0) {
    mandremSections.forEach((section) => {
      const sectionEl = /** @type {HTMLElement} */ (section);
      sectionEl.style.opacity = '0';
      sectionEl.style.transform = 'translateY(60px)';

      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animate(sectionEl, {
              opacity: [0, 1],
              translateY: [60, 0],
              ease: 'outExpo',
              duration: 900,
              delay: 100
            });
            obs.unobserve(section);
          }
        });
      }, { threshold: 0.05 });
      observer.observe(sectionEl);
    });
  }

  // Animate conversion items
  const conversionItems = document.querySelectorAll('.conversion-item');
  if (conversionItems.length > 0) {
    conversionItems.forEach((item, idx) => {
      const itemEl = /** @type {HTMLElement} */ (item);
      itemEl.style.opacity = '0';
      itemEl.style.transform = 'translateX(-30px)';

      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animate(itemEl, {
              opacity: [0, 1],
              translateX: [-30, 0],
              ease: 'outBack',
              duration: 600,
              delay: idx * 150
            });
            obs.unobserve(item);
          }
        });
      }, { threshold: 0.3 });
      observer.observe(itemEl);
    });
  }

  // Animate workflow stages
  const workflowStages = document.querySelectorAll('.workflow-stage');
  if (workflowStages.length > 0) {
    workflowStages.forEach((stage, idx) => {
      const stageEl = /** @type {HTMLElement} */ (stage);
      stageEl.style.opacity = '0';
      stageEl.style.transform = 'scale(0.85)';

      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animate(stageEl, {
              opacity: [0, 1],
              scale: [0.85, 1],
              ease: 'outBack',
              duration: 600,
              delay: idx * 200
            });
            obs.unobserve(stage);
          }
        });
      }, { threshold: 0.3 });
      observer.observe(stageEl);
    });
  }

  // Animate tech items
  const techItems = document.querySelectorAll('.tech-item');
  if (techItems.length > 0) {
    techItems.forEach((item, idx) => {
      const itemEl = /** @type {HTMLElement} */ (item);
      itemEl.style.opacity = '0';
      itemEl.style.transform = 'translateY(30px)';

      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animate(itemEl, {
              opacity: [0, 1],
              translateY: [30, 0],
              ease: springEasing,
              duration: 650,
              delay: idx * 120
            });
            obs.unobserve(item);
          }
        });
      }, { threshold: 0.3 });
      observer.observe(itemEl);
    });
  }

  // Animate concept boxes
  const conceptBoxes = document.querySelectorAll('.concept-box');
  if (conceptBoxes.length > 0) {
    conceptBoxes.forEach((box, idx) => {
      const boxEl = /** @type {HTMLElement} */ (box);
      boxEl.style.opacity = '0';
      boxEl.style.transform = 'scale(0.9)';

      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animate(boxEl, {
              opacity: [0, 1],
              scale: [0.9, 1],
              ease: 'outElastic(1, 0.6)',
              duration: 600,
              delay: idx * 100
            });
            obs.unobserve(box);
          }
        });
      }, { threshold: 0.3 });
      observer.observe(boxEl);
    });
  }

  // Animate challenge items
  const challengeItems = document.querySelectorAll('.challenge-item');
  if (challengeItems.length > 0) {
    challengeItems.forEach((item, idx) => {
      const itemEl = /** @type {HTMLElement} */ (item);
      itemEl.style.opacity = '0';
      itemEl.style.transform = 'translateX(-25px)';

      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animate(itemEl, {
              opacity: [0, 1],
              translateX: [-25, 0],
              ease: 'outCubic',
              duration: 500,
              delay: idx * 150
            });
            obs.unobserve(item);
          }
        });
      }, { threshold: 0.3 });
      observer.observe(itemEl);
    });
  }

  // Animate problem/solution sections
  const problemSolution = document.querySelectorAll('.problem-section, .solution-section');
  if (problemSolution.length > 0) {
    problemSolution.forEach((section, idx) => {
      const sectionEl = /** @type {HTMLElement} */ (section);
      sectionEl.style.opacity = '0';
      sectionEl.style.transform = idx === 0 ? 'translateX(-40px)' : 'translateX(40px)';

      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animate(sectionEl, {
              opacity: [0, 1],
              translateX: [idx === 0 ? -40 : 40, 0],
              ease: 'outCubic',
              duration: 700,
              delay: idx * 200
            });
            obs.unobserve(section);
          }
        });
      }, { threshold: 0.15 });
      observer.observe(sectionEl);
    });
  }

  // Animate achievement pills
  const achievementPills = document.querySelectorAll('.achievement-pill');
  if (achievementPills.length > 0) {
    achievementPills.forEach((pill, idx) => {
      const pillEl = /** @type {HTMLElement} */ (pill);
      pillEl.style.opacity = '0';
      pillEl.style.transform = 'scale(0.8)';

      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animate(pillEl, {
              opacity: [0, 1],
              scale: [0.8, 1],
              ease: 'outElastic(1, 0.6)',
              duration: 600,
              delay: idx * 80
            });
            obs.unobserve(pill);
          }
        });
      }, { threshold: 0.5 });
      observer.observe(pillEl);
    });
  }

  // Animate metric boxes
  const metricBoxes = document.querySelectorAll('.metric-box');
  if (metricBoxes.length > 0) {
    metricBoxes.forEach((box, idx) => {
      const boxEl = /** @type {HTMLElement} */ (box);
      boxEl.style.opacity = '0';
      boxEl.style.transform = 'translateY(20px)';

      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animate(boxEl, {
              opacity: [0, 1],
              translateY: [20, 0],
              ease: 'outBack',
              duration: 500,
              delay: idx * 100
            });
            obs.unobserve(box);
          }
        });
      }, { threshold: 0.3 });
      observer.observe(boxEl);
    });
  }

  // Legend markers animation
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

  // Hero heading animation
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

  // Hero paragraph animation
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
