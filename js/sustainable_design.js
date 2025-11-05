// @ts-check
import { animate, stagger, splitText } from '../animejs/dist/modules/index.js';

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

    // Animate all major sections
    const sections = document.querySelectorAll(
        '.intro-section, .principles-section, .comparison-section, .materials-section, .examples-section, .entrepreneur-section, .takeaways-section'
    );

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

    // Crafting process animation
    const craftingSection = document.querySelector('.crafting-process-section');
    if (craftingSection instanceof HTMLElement) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animate(craftingSection, {
                        opacity: [0, 1],
                        translateY: [30, 0],
                        easing: 'easeOutCubic',
                        duration: 700,
                    });

                    // Animate process steps
                    const processSteps = document.querySelectorAll('.process-step');
                    animate(processSteps, {
                        opacity: [0, 1],
                        scale: [0.9, 1],
                        easing: 'easeOutBack',
                        duration: 600,
                        delay: stagger(150),
                    });

                    obs.unobserve(craftingSection);
                }
            });
        }, { threshold: 0.15 });
        observer.observe(craftingSection);
    }

    // Principle cards stagger animation
    const principleCards = document.querySelectorAll('.principle-card');
    if (principleCards.length > 0) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animate(principleCards, {
                        opacity: [0, 1],
                        scale: [0.95, 1],
                        easing: 'easeOutBack',
                        duration: 600,
                        delay: stagger(120),
                    });
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        if (principleCards[0]) observer.observe(principleCards[0]);
    }

    // Material cards animation
    const materialCards = document.querySelectorAll('.material-card');
    if (materialCards.length > 0) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animate(materialCards, {
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
        if (materialCards[0]) observer.observe(materialCards[0]);
    }

    // Example cards animation
    const exampleCards = document.querySelectorAll('.example-card');
    if (exampleCards.length > 0) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animate(exampleCards, {
                        opacity: [0, 1],
                        scale: [0.95, 1],
                        easing: 'easeOutBack',
                        duration: 600,
                        delay: stagger(100),
                    });
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        if (exampleCards[0]) observer.observe(exampleCards[0]);
    }

    // Step items animation
    const stepItems = document.querySelectorAll('.step-item');
    if (stepItems.length > 0) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animate(stepItems, {
                        opacity: [0, 1],
                        translateX: [-30, 0],
                        easing: 'easeOutCubic',
                        duration: 600,
                        delay: stagger(120),
                    });
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        if (stepItems[0]) observer.observe(stepItems[0]);
    }

    // Takeaway cards animation
    const takeawayCards = document.querySelectorAll('.takeaway-card');
    if (takeawayCards.length > 0) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animate(takeawayCards, {
                        opacity: [0, 1],
                        scale: [0.9, 1],
                        easing: 'easeOutBack',
                        duration: 600,
                        delay: stagger(100),
                    });
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        if (takeawayCards[0]) observer.observe(takeawayCards[0]);
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
                        duration: 700,
                    });

                    // Animate cards
                    const relatedCards = document.querySelectorAll('.related-card');
                    animate(relatedCards, {
                        opacity: [0, 1],
                        scale: [0.95, 1],
                        easing: 'easeOutBack',
                        duration: 600,
                        delay: stagger(120),
                    });

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