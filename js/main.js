/* ════════════════════════════════════════
   MAIN SITE INTERACTIONS
════════════════════════════════════════ */

// ── NAVBAR SCROLL ────────────────────────
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  });
}

// ── NAV TOGGLE (mobile) ──────────────────
const navLinks = document.querySelector('.nav-links');
function toggleNav() {
  if (!navLinks) return;
  navLinks.classList.toggle('open');
  const toggle = document.querySelector('.nav-toggle');
  if (toggle) toggle.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
}

// Close nav on link click
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    if (navLinks) navLinks.classList.remove('open');
    const toggle = document.querySelector('.nav-toggle');
    if (toggle) toggle.textContent = '☰';
  });
});

// ── SCROLL REVEAL ────────────────────────
const revealEls = document.querySelectorAll(
  '.reveal-up, .reveal-left, .reveal-right, .reveal-fade, .reveal-scale'
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

// ── PAGE TRANSITIONS ─────────────────────
function navigateTo(url) {
  const overlay = document.createElement('div');
  overlay.className = 'page-transition';
  document.body.appendChild(overlay);
  requestAnimationFrame(() => {
    overlay.classList.add('in');
    setTimeout(() => window.location.href = url, 400);
  });
}

// Intercept all internal links for smooth page transition
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (href && !href.startsWith('#') && !href.startsWith('http') && !href.startsWith('mailto')) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        navigateTo(href);
      });
    }
  });

  // Fade in on arrival
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.body.style.opacity = '1';
    });
  });
});

// ── CURSOR SPARKLE ───────────────────────
document.addEventListener('mousemove', (e) => {
  if (Math.random() > 0.85) {
    const dot = document.createElement('div');
    dot.style.cssText = `
      position:fixed;
      left:${e.clientX}px;
      top:${e.clientY}px;
      width:4px;height:4px;
      background:rgba(201,168,76,0.8);
      border-radius:50%;
      pointer-events:none;
      z-index:9999;
      transform:translate(-50%,-50%);
      animation:sparkDie 0.6s ease forwards;
    `;
    document.body.appendChild(dot);
    setTimeout(() => dot.remove(), 600);
  }
});

// Inject sparkDie keyframe
const styleEl = document.createElement('style');
styleEl.textContent = `
@keyframes sparkDie {
  0%   { opacity:1; transform:translate(-50%,-50%) scale(1); }
  100% { opacity:0; transform:translate(-50%,-50%) scale(0) translateY(-20px); }
}`;
document.head.appendChild(styleEl);

// ── IMG PLACEHOLDER FALLBACK ─────────────
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('error', function() {
    const wrap = this.closest('.strip-photo, .teaser-img-frame, .frame-img-wrap');
    if (wrap) wrap.classList.add('img-placeholder');
    this.style.display = 'none';
  });
});

// ── MUSIC TOGGLE ─────────────────────────
// ── GLOBAL MUSIC CONTROL (ALL PAGES) ─────────────────
const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');

let isPlaying = localStorage.getItem("musicPlaying") === "true";

// Restore state on load
if (music && musicBtn) {
  music.volume = 0.35;

  if (isPlaying) {
    // Browser autoplay workaround
    document.addEventListener("click", () => {
      music.play().catch(() => {});
    }, { once: true });

    musicBtn.textContent = "🎶";
    musicBtn.classList.add("playing");
  }
}

// Toggle music
musicBtn?.addEventListener("click", () => {
  if (!music) return;

  if (isPlaying) {
    music.pause();
    musicBtn.textContent = "🎵";
    musicBtn.classList.remove("playing");
    localStorage.setItem("musicPlaying", "false");
  } else {
    music.play().then(() => {
      musicBtn.textContent = "🎶";
      musicBtn.classList.add("playing");
      localStorage.setItem("musicPlaying", "true");
    }).catch(() => {
      musicBtn.textContent = "🔇";
    });
  }

  isPlaying = !isPlaying;
});