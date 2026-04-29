/* ════════════════════════════════════════
   PARTICLE SYSTEMS
   - Rose petals (canvas: #petals)
   - Golden sparkles (canvas: #sparkles)
════════════════════════════════════════ */

// ── PETAL SYSTEM ──────────────────────────
(function() {
  const canvas = document.getElementById('petals');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, petals = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const COLORS = [
    'rgba(240,184,196,',
    'rgba(220,150,170,',
    'rgba(255,210,220,',
    'rgba(200,130,150,',
    'rgba(255,230,235,',
    'rgba(180,100,120,',
  ];

  class Petal {
    constructor() { this.reset(true); }
    reset(initial = false) {
      this.x     = Math.random() * W;
      this.y     = initial ? Math.random() * H * -1 : -40;
      this.size  = 5 + Math.random() * 10;
      this.speedY = 0.6 + Math.random() * 1.4;
      this.speedX = (Math.random() - 0.5) * 1.2;
      this.rot   = Math.random() * Math.PI * 2;
      this.rotSpeed = (Math.random() - 0.5) * 0.03;
      this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
      this.opacity = 0.4 + Math.random() * 0.5;
      this.wobble = Math.random() * Math.PI * 2;
      this.wobbleSpeed = 0.02 + Math.random() * 0.02;
    }
    update() {
      this.wobble += this.wobbleSpeed;
      this.x += this.speedX + Math.sin(this.wobble) * 0.5;
      this.y += this.speedY;
      this.rot += this.rotSpeed;
      if (this.y > H + 50) this.reset();
    }
    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rot);
      ctx.globalAlpha = this.opacity;
      // Draw petal shape
      ctx.beginPath();
      ctx.ellipse(0, 0, this.size * 0.6, this.size, 0, 0, Math.PI * 2);
      const grad = ctx.createRadialGradient(0, -this.size * 0.3, 0, 0, 0, this.size);
      grad.addColorStop(0, this.color + '0.9)');
      grad.addColorStop(1, this.color + '0.2)');
      ctx.fillStyle = grad;
      ctx.fill();
      ctx.restore();
    }
  }

  // Create petals
  for (let i = 0; i < 40; i++) petals.push(new Petal());

  function loop() {
    ctx.clearRect(0, 0, W, H);
    petals.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(loop);
  }
  loop();
})();

// ── SPARKLE SYSTEM ────────────────────────
(function() {
  const canvas = document.getElementById('sparkles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, sparkles = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  class Sparkle {
    constructor() { this.reset(true); }
    reset(initial = false) {
      this.x       = Math.random() * W;
      this.y       = initial ? Math.random() * H : Math.random() * H;
      this.size    = 1 + Math.random() * 3;
      this.alpha   = 0;
      this.maxAlpha = 0.3 + Math.random() * 0.5;
      this.fadeIn  = true;
      this.speed   = 0.008 + Math.random() * 0.015;
      this.twinkle = Math.random() * Math.PI * 2;
      this.color   = Math.random() > 0.5
        ? 'rgba(240,216,154,' : 'rgba(255,200,210,';
    }
    update() {
      this.twinkle += this.speed;
      this.alpha = this.maxAlpha * (0.5 + 0.5 * Math.sin(this.twinkle));
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      // 4-point star
      ctx.translate(this.x, this.y);
      ctx.fillStyle = this.color + '1)';
      for (let i = 0; i < 4; i++) {
        ctx.save();
        ctx.rotate((i * Math.PI) / 2);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(this.size * 0.3, this.size * 2.5);
        ctx.lineTo(0, this.size * 5);
        ctx.lineTo(-this.size * 0.3, this.size * 2.5);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
      ctx.restore();
    }
  }

  for (let i = 0; i < 60; i++) sparkles.push(new Sparkle());

  function loop() {
    ctx.clearRect(0, 0, W, H);
    sparkles.forEach(s => { s.update(); s.draw(); });
    requestAnimationFrame(loop);
  }
  loop();
})();