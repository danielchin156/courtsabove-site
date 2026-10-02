// Home page hero: soft incense smoke that follows the pointer.
const hero = document.querySelector('[data-smoke-hero]');
const layer = document.querySelector('[data-smoke]');
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (hero && layer && !reduce) {
  const MAX = 34;
  let last = 0, lx, ly, alt = false;
  const rnd = (a, b) => a + Math.random() * (b - a);
  hero.addEventListener('pointermove', (e) => {
    const now = performance.now();
    const r = hero.getBoundingClientRect();
    const x = e.clientX - r.left, y = e.clientY - r.top;
    const far = lx === undefined || Math.hypot(x - lx, y - ly) > 14;
    if (now - last < 45 || !far) return;
    last = now; lx = x; ly = y;
    const p = document.createElement('span');
    alt = !alt;
    p.className = 'puff pf' + (1 + Math.floor(Math.random() * 3)) + (alt ? ' ra' : ' rb');
    p.style.left = Math.round(x + rnd(-10, 10)) + 'px';
    p.style.top = Math.round(y + rnd(-6, 6)) + 'px';
    p.style.setProperty('--s', Math.round(rnd(110, 210)) + 'px');
    p.style.setProperty('--r', Math.round(rnd(-40, 40)) + 'deg');
    p.style.setProperty('--dx', Math.round(rnd(-50, 50)) + 'px');
    p.style.setProperty('--rise', Math.round(rnd(90, 170)) + 'px');
    p.addEventListener('animationend', () => p.remove());
    layer.appendChild(p);
    while (layer.childElementCount > MAX) layer.firstElementChild.remove();
  });
}
