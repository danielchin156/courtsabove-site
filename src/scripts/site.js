// Shared behaviour for every page: header state, mobile menu, logo light.
const header = document.querySelector('[data-header]');
const menuBtn = document.querySelector('[data-menu-btn]');
const logo = document.querySelector('[data-logo]');

if (header) {
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

if (header && menuBtn) {
  menuBtn.addEventListener('click', () => {
    const open = !header.classList.contains('menu-open');
    header.classList.toggle('menu-open', open);
    document.getElementById('site-nav')?.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

if (logo) {
  let timer = 0;
  logo.addEventListener('pointerenter', (e) => {
    if (e.pointerType && e.pointerType !== 'mouse' && e.pointerType !== 'pen') return;
    if (logo.classList.contains('shine')) return;
    logo.classList.add('shine');
    clearTimeout(timer);
    timer = window.setTimeout(() => logo.classList.remove('shine'), 1700);
  });
}
