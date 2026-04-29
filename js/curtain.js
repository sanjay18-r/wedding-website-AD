/* ════════════════════════════════════════
   CURTAIN CONTROLLER
════════════════════════════════════════ */

const stage       = document.getElementById('stage');
const curtainL    = document.getElementById('curtainLeft');
const curtainR    = document.getElementById('curtainRight');
const mainSite    = document.getElementById('mainSite');
const openBtn     = document.getElementById('openBtn');

function openCurtains() {
  // Disable button
  openBtn.disabled = true;
  openBtn.style.opacity = '0.5';
  openBtn.style.cursor = 'default';

  // Try to play background music (user gesture required by browsers)
  const music = document.getElementById('bgMusic');
  if (music) {
    music.volume = 0.35;
    music.play().catch(() => {
      // Auto-play blocked — music toggle button will still work
    });
  }

  // Fade stage text
  stage.classList.add('opening');

  // Small delay then swing curtains open
  setTimeout(() => {
    curtainL.classList.remove('sway');
    curtainR.classList.remove('sway');
    curtainL.classList.add('open');
    curtainR.classList.add('open');
    stage.classList.add('flash');
  }, 300);

  // Show main site, hide stage
  setTimeout(() => {
    mainSite.style.display = 'block';
    mainSite.style.opacity = '0';
    setTimeout(() => {
      mainSite.style.transition = 'opacity 0.8s ease';
      mainSite.style.opacity = '1';
    }, 50);
  }, 1800);

  setTimeout(() => {
    stage.classList.add('closed');
    setTimeout(() => stage.remove(), 600);
  }, 2200);
}

// Add sway animation on load
window.addEventListener('load', () => {
  setTimeout(() => {
    if (curtainL) curtainL.classList.add('sway');
    if (curtainR) curtainR.classList.add('sway');
  }, 2000);
});