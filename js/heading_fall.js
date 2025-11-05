document.addEventListener('DOMContentLoaded', function() {
  const heading = document.querySelector('.fall-heading');
  if (!heading) return;

  const text = heading.textContent;
  heading.innerHTML = "";

  [...text].forEach((char, i) => {
    const span = document.createElement('span');
    span.textContent = char === " " ? "\u00A0" : char;
    span.style.animationDelay = `${i * 0.06}s`;
    heading.appendChild(span);
  });
});
