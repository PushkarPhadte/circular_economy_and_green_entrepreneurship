document.addEventListener('DOMContentLoaded', () => {
  const leaves = document.querySelectorAll('.leaf');
  leaves.forEach((leaf, i) => {
    const delay = i * 2 + Math.random();
    const dur = 12 + Math.random() * 4;
    const swayDur = 2.8 + Math.random() * 1.5;

    leaf.style.setProperty('--flight-delay', `${delay}s`);
    leaf.style.setProperty('--flight-dur', `${dur}s`);
    leaf.querySelector('.sway').style.animationDuration = `${swayDur}s`;

    const colorVar = i % 3 === 0 ? '--leaf1' : i % 3 === 1 ? '--leaf2' : '--leaf3';
    leaf.querySelector('.blade').style.fill = getComputedStyle(document.documentElement)
      .getPropertyValue(colorVar);
  });
});