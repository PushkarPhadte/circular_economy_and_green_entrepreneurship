// light_box.js

document.addEventListener('DOMContentLoaded', function() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  galleryItems.forEach(item => {
    item.addEventListener('click', function() {
      const imageSrc = this.getAttribute('data-image');
      const caption = this.getAttribute('data-caption');
      openLightbox(imageSrc, caption);
    });
  });
});

function openLightbox(imageSrc, caption) {
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");
  const captionElement = document.getElementById("lightbox-caption");

  lightbox.style.display = "block";
  img.src = imageSrc;
  captionElement.textContent = caption;
  
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.style.display = "none";
  
  document.body.style.overflow = 'auto';
}

document.addEventListener('keydown', function (event) {
  if (event.key === "Escape") {
    closeLightbox();
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const lightboxImg = document.getElementById('lightbox-img');
  if (lightboxImg) {
    lightboxImg.addEventListener('click', function(event) {
      event.stopPropagation();
    });
  }
});
