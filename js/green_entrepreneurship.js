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

  // Entrepreneur Slider
  const entrepreneurShowcase = document.querySelector('.entrepreneurs-showcase');
  if (entrepreneurShowcase instanceof HTMLElement) {
    const track = entrepreneurShowcase.querySelector('.entrepreneur-track');
    const slides = Array.from(entrepreneurShowcase.querySelectorAll('.entrepreneur-slide'))
      .filter(el => el instanceof HTMLElement);
    const prevBtn = entrepreneurShowcase.querySelector('.slider-nav.prev');
    const nextBtn = entrepreneurShowcase.querySelector('.slider-nav.next');
    const indicators = Array.from(entrepreneurShowcase.querySelectorAll('.indicator'));
    const currentSlideEl = entrepreneurShowcase.querySelector('.current-slide');

    let currentSlide = 0;
    const totalSlides = slides.length;
    /** @type {number | undefined} */
    let autoPlayInterval;
    let isAnimating = false;

    /**
     * @param {number} direction - 1 for next, -1 for previous
     */
    function updateSlider(direction = 1) {
      if (isAnimating) return;
      isAnimating = true;

      const outgoingSlide = slides[currentSlide];
      const targetSlide = (currentSlide + direction + totalSlides) % totalSlides;
      const incomingSlide = slides[targetSlide];

      // Animate outgoing slide
      if (outgoingSlide instanceof HTMLElement) {
        animate(outgoingSlide, {
          opacity: [1, 0],
          translateX: [0, direction * -100],
          easing: 'easeInCubic',
          duration: 400,
          complete: () => {
            outgoingSlide.classList.remove('active');
            outgoingSlide.style.opacity = '0';
            outgoingSlide.style.transform = '';
          }
        });
      }

      // Update current slide index
      currentSlide = targetSlide;

      // Animate incoming slide
      if (incomingSlide instanceof HTMLElement) {
        incomingSlide.classList.add('active');
        incomingSlide.style.opacity = '0';

        animate(incomingSlide, {
          opacity: [0, 1],
          translateX: [direction * 100, 0],
          easing: 'easeOutCubic',
          duration: 500,
          delay: 200,
          complete: () => {
            isAnimating = false;
          }
        });

        // Animate inner elements
        const badge = incomingSlide.querySelector('.entrepreneur-badge');
        const logo = incomingSlide.querySelector('.company-logo');
        const metrics = incomingSlide.querySelectorAll('.metric');
        const pills = incomingSlide.querySelectorAll('.pill');

        if (badge instanceof HTMLElement) {
          animate(badge, {
            scale: [0, 1],
            rotate: [180, 0],
            easing: 'easeOutElastic(1, .6)',
            duration: 800,
            delay: 400,
          });
        }

        if (logo instanceof HTMLElement) {
          animate(logo, {
            scale: [0, 1],
            rotate: [-20, 0],
            easing: 'spring(1, 80, 10, 0)',
            duration: 800,
            delay: 500,
          });
        }

        if (metrics.length > 0) {
          const metricsArray = Array.from(metrics).filter(el => el instanceof HTMLElement);
          animate(metricsArray, {
            opacity: [0, 1],
            translateY: [20, 0],
            easing: 'easeOutCubic',
            duration: 500,
            delay: stagger(80, { start: 600 }),
          });
        }

        if (pills.length > 0) {
          const pillsArray = Array.from(pills).filter(el => el instanceof HTMLElement);
          animate(pillsArray, {
            opacity: [0, 1],
            scale: [0.8, 1],
            easing: 'easeOutBack',
            duration: 400,
            delay: stagger(60, { start: 800 }),
          });
        }
      }

      // Update indicators
      indicators.forEach((indicator, index) => {
        if (indicator instanceof HTMLElement) {
          indicator.classList.toggle('active', index === currentSlide);
        }
      });

      // Update counter with animation
      if (currentSlideEl instanceof HTMLElement) {
        animate(currentSlideEl, {
          scale: [1, 1.3, 1],
          easing: 'easeOutElastic(1, .6)',
          duration: 500,
          complete: () => {
            currentSlideEl.textContent = String(currentSlide + 1);
          }
        });
      }
    }

    function nextSlide() {
      updateSlider(1);
    }

    function prevSlide() {
      updateSlider(-1);
    }

    function startAutoPlay() {
      autoPlayInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoPlay() {
      if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
      }
    }

    // Event listeners
    if (nextBtn instanceof HTMLElement) {
      nextBtn.addEventListener('click', () => {
        stopAutoPlay();
        nextSlide();
        startAutoPlay();
      });
    }

    if (prevBtn instanceof HTMLElement) {
      prevBtn.addEventListener('click', () => {
        stopAutoPlay();
        prevSlide();
        startAutoPlay();
      });
    }

    indicators.forEach((indicator, index) => {
      if (indicator instanceof HTMLElement) {
        indicator.addEventListener('click', () => {
          stopAutoPlay();
          const direction = index > currentSlide ? 1 : -1;
          currentSlide = index - direction;
          updateSlider(direction);
          startAutoPlay();
        });
      }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        stopAutoPlay();
        prevSlide();
        startAutoPlay();
      }
      if (e.key === 'ArrowRight') {
        stopAutoPlay();
        nextSlide();
        startAutoPlay();
      }
    });

    // Pause auto-play on hover
    if (track instanceof HTMLElement) {
      track.addEventListener('mouseenter', stopAutoPlay);
      track.addEventListener('mouseleave', startAutoPlay);
    }

    // Initial animation for showcase section
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animate('.showcase-header', {
            opacity: [0, 1],
            translateY: [-30, 0],
            easing: 'easeOutCubic',
            duration: 600,
          });

          // Animate first slide
          const firstSlide = slides[0];
          if (firstSlide instanceof HTMLElement) {
            animate(firstSlide, {
              opacity: [0, 1],
              scale: [0.9, 1],
              easing: 'easeOutCubic',
              duration: 800,
              delay: 300,
            });
          }

          animate('.slider-nav', {
            opacity: [0, 1],
            scale: [0, 1],
            easing: 'spring(1, 80, 10, 0)',
            duration: 600,
            delay: stagger(100, { start: 500 }),
          });

          startAutoPlay();
          obs.unobserve(entrepreneurShowcase);
        }
      });
    }, { threshold: 0.2 });

    observer.observe(entrepreneurShowcase);
  }

  // Accordion functionality
  const accordions = document.querySelectorAll('.scheme-accordion');
  accordions.forEach(accordion => {
    const trigger = accordion.querySelector('.accordion-trigger');
    if (trigger instanceof HTMLElement) {
      trigger.addEventListener('click', () => {
        const isExpanded = accordion.classList.contains('expanded');

        // Close all other accordions
        accordions.forEach(other => {
          if (other !== accordion) {
            other.classList.remove('expanded');
          }
        });

        // Toggle current accordion
        accordion.classList.toggle('expanded');

        if (!isExpanded) {
          const content = accordion.querySelector('.accordion-content');
          const pills = accordion.querySelectorAll('.feature-pill');

          if (pills.length > 0) {
            const pillsArray = Array.from(pills).filter(el => el instanceof HTMLElement);
            animate(pillsArray, {
              opacity: [0, 1],
              translateY: [10, 0],
              easing: 'easeOutCubic',
              duration: 400,
              delay: stagger(60, { start: 200 }),
            });
          }
        }
      });
    }
  });

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