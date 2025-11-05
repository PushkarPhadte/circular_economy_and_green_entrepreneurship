document.addEventListener('DOMContentLoaded', function(){
    const sections = document.querySelectorAll('main section');
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view'); obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    sections.forEach(s => { s.classList.add('reveal-fade'); observer.observe(s); });
});