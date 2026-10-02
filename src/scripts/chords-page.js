// Chords page: key picker, Nashville numbers toggle and guitar shapes.
import { ORIGINAL_KEY, stateFor } from '../lib/chords.js';

let key = ORIGINAL_KEY;
let numbers = false;
let lyricsOnly = false;
const sheet = document.querySelector('[data-sheet]');
const numBtn = document.querySelector('[data-numbers]');
const lyrBtn = document.querySelector('[data-lyrics]');

function render() {
  const st = stateFor(key, numbers);
  document.querySelectorAll('[data-key]').forEach((b) => {
    const on = b.dataset.key === key;
    b.classList.toggle('on', on);
    b.setAttribute('aria-pressed', on ? 'true' : 'false');
  });
  if (numBtn) {
    numBtn.classList.toggle('on', numbers);
    numBtn.setAttribute('aria-pressed', numbers ? 'true' : 'false');
  }
  const h = document.querySelector('[data-guitar-heading]');
  if (h) h.textContent = st.guitarHeading;
  const sl = document.querySelector('[data-shape-label]');
  if (sl) sl.textContent = st.shapeLabel;
  document.querySelectorAll('[data-fam]').forEach((el) => { el.hidden = el.dataset.fam !== st.fam; });
  document.querySelectorAll('[data-snd]').forEach((el) => { el.textContent = st.snd[el.dataset.snd]; });
  document.querySelectorAll('[data-sndx]').forEach((el) => { el.textContent = st.sndx[el.dataset.sndx]; });
  if (lyrBtn) {
    lyrBtn.classList.toggle('on', lyricsOnly);
    lyrBtn.setAttribute('aria-pressed', lyricsOnly ? 'true' : 'false');
  }
  if (sheet) {
    sheet.innerHTML = st.sheetHtml;
    sheet.classList.toggle('lyrics-only', lyricsOnly);
  }
}

document.querySelectorAll('[data-key]').forEach((b) => {
  b.addEventListener('click', () => { key = b.dataset.key; render(); });
});
if (numBtn) numBtn.addEventListener('click', () => { numbers = !numbers; lyricsOnly = false; render(); });
if (lyrBtn) lyrBtn.addEventListener('click', () => { lyricsOnly = !lyricsOnly; numbers = false; render(); });
