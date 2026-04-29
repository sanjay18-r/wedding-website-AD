/* ════════════════════════════════════════
   WEDDING COUNTDOWN
════════════════════════════════════════ */

const WEDDING_DATE = new Date('2026-05-29T06:00:00');

function updateCountdown() {
  const now  = new Date();
  const diff = WEDDING_DATE - now;

  if (diff <= 0) {
    document.getElementById('days')?.textContent    = '00';
    document.getElementById('hours')?.textContent   = '00';
    document.getElementById('minutes')?.textContent = '00';
    document.getElementById('seconds')?.textContent = '00';
    return;
  }

  const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  function pad(n) { return String(n).padStart(2, '0'); }
  function set(id, val) {
    const el = document.getElementById(id);
    if (!el) return;
    const prev = el.textContent;
    const next = pad(val);
    if (prev !== next) {
      el.textContent = next;
      el.classList.remove('flip');
      void el.offsetWidth; // reflow
      el.classList.add('flip');
      setTimeout(() => el.classList.remove('flip'), 300);
    }
  }

  set('days',    days);
  set('hours',   hours);
  set('minutes', minutes);
  set('seconds', seconds);
}

updateCountdown();
setInterval(updateCountdown, 1000);