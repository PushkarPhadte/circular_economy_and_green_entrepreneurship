const images = [
  {src: '../assets/images/chitra_museum_entrance.avif', caption: "Chitra Museum Entrance"},
  {src: '../assets/images/chitra_museum.avif', caption: "Inside Chitra Museum"},
  {src: '../assets/images/waste_collection_panjim.avif', caption: "Efficient waste collection in Panjim"},
];
let current = 0;

const img = document.getElementById("gallery-image");
const cap = document.getElementById("gallery-caption");
const prev = document.getElementById("gallery-prev");
const next = document.getElementById("gallery-next");

function updateGallery(idx) {
  img.src = images[idx].src;
  cap.textContent = images[idx].caption;
}
prev.addEventListener('click', () => {
  current = (current - 1 + images.length) % images.length;
  updateGallery(current);
});
next.addEventListener('click', () => {
  current = (current + 1) % images.length;
  updateGallery(current);
});

// Initialize on page load
updateGallery(current);