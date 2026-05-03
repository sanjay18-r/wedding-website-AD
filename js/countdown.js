// ── PREMIUM WEDDING COUNTDOWN ──

// IST fixed time (no timezone bugs)
const WEDDING_DATE = new Date('2026-05-29T08:00:00+05:30');

function updateCountdown() {
  const now = new Date();
  const diff = WEDDING_DATE - now;

  const ids = ['days', 'hours', 'minutes', 'seconds'];

  if (diff <= 0) {
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = '00';
    });
    return;
  }

  const values = {
    days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };

  const pad = n => String(n).padStart(2, '0');

  Object.keys(values).forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;

    const newVal = pad(values[id]);

    // animate only if value changes
    if (el.textContent !== newVal) {
      el.classList.remove('flip');
      void el.offsetWidth; // trigger reflow
      el.textContent = newVal;
      el.classList.add('flip');

      setTimeout(() => el.classList.remove('flip'), 400);
    }
  });
}

// Start properly
document.addEventListener("DOMContentLoaded", () => {
  updateCountdown();
  setInterval(updateCountdown, 1000);
});