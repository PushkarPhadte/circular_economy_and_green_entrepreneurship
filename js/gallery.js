// @ts-check
(function (window, document) {
  let slides, btnCloseArray;

  /**
   * @param {Event} e
   */
  function onClick(e) {
    const target = /** @type {HTMLElement} */ (e.target);
    if (!target.classList.contains('slide')) return;

    if (!target.classList.contains('active') &&
      target.parentElement &&
      !Array.from(target.parentElement.children).some(el => el.classList.contains('active'))) {
      target.classList.remove('anim-in', 'last-viewed');
      target.classList.add('active');

      document.body.classList.add('viewing-slide');

      if (target.parentElement) {
        Array.from(target.parentElement.children).forEach(sibling => {
          if (sibling !== target) {
            sibling.classList.remove('anim-in', 'last-viewed');
            sibling.classList.add('anim-out');
          }
        });
      }
    }
  }

  /**
   * @param {Event} e
   */
  function closeSlide(e) {
    e.stopPropagation();
    const slide = /** @type {HTMLElement} */ (e.target).parentElement;
    if (!slide) return;

    slide.classList.remove('active', 'anim-in');
    slide.classList.add('last-viewed');

    document.body.classList.remove('viewing-slide');

    if (slide.parentElement) {
      Array.from(slide.parentElement.children).forEach(sibling => {
        if (sibling !== slide) {
          sibling.classList.remove('anim-out');
          sibling.classList.add('anim-in');
        }
      });
    }
  }

  function loadImages() {
    const imageContainers = document.querySelectorAll('.slide .image');

    imageContainers.forEach(container => {
      const htmlContainer = /** @type {HTMLElement} */ (container);
      const backgroundImageStyle = htmlContainer.style.backgroundImage;
      
      if (!backgroundImageStyle) return;
      
      const fullImageUrl = backgroundImageStyle.slice(5, -2);
      const img = new Image();

      img.onload = function () {
        htmlContainer.classList.add('loaded');
        htmlContainer.style.backgroundImage = `url('${fullImageUrl}')`;
      };

      img.src = fullImageUrl;
    });
  }

  function init() {
    slides = document.querySelectorAll('.slide');
    btnCloseArray = document.querySelectorAll('.btn-close');

    slides.forEach(slide => {
      slide.addEventListener('click', onClick);
    });

    btnCloseArray.forEach(btn => {
      btn.addEventListener('click', closeSlide);
    });

    loadImages();
  }

  document.addEventListener('DOMContentLoaded', init);

})(window, document);
