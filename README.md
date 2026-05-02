# 💍 Arun & Divya — Wedding Website

A **cinematic, multi-page wedding invitation website** built with pure HTML, CSS, and JavaScript.  
No frameworks. No dependencies. Just beautiful, handcrafted code.

---

## 📁 Folder Structure

```
wedding/
│
├── index.html                  ← Homepage (curtain reveal + hero + countdown)
│
├── pages/
│   ├── story.html              ← Our Love Story (timeline + stats + letters)
│   ├── gallery.html            ← Gallery (polaroids + hanging frames + reel)
│   ├── events.html             ← Wedding Events (detailed cards + venue map)
│   ├── invitation.html         ← Digital Invitation (envelope reveal + card)
│   └── wishes.html             ← Guestbook (wish form + wishes wall)
│
├── css/
│   ├── global.css              ← Design system, typography, navbar, hero, footer
│   ├── curtain.css             ← Velvet curtain reveal animation
│   ├── particles.css           ← Canvas particle layer styling
│   ├── story.css               ← Story page: timeline, stats, letters
│   ├── gallery.css             ← Gallery: polaroids, frames, reel
│   ├── events.css              ← Events: detailed cards, venue section
│   ├── invitation.css          ← Invitation: envelope, ornate card
│   └── wishes.css              ← Wishes: form, wall, hearts animation
│
├── js/
│   ├── particles.js            ← Rose petal + golden sparkle canvas animations
│   ├── curtain.js              ← Curtain open/close + stage transitions
│   ├── main.js                 ← Scroll reveals, navbar, page transitions, cursor
│   └── countdown.js            ← Wedding day countdown timer
│
├── images/
│   └── placeholders/           ← Replace with real couple photos!
│       ├── couple1.jpg         (teaser section)
│       ├── story1-5.jpg        (timeline photos)
│       ├── p1-p6.jpg           (polaroid wall)
│       ├── f1-f4.jpg           (hanging frames)
│       ├── r1-r6.jpg           (memory reel)
│       ├── ev1-ev4.jpg         (event cards)
│       └── g1-g5.jpg           (gallery strip on homepage)
│
└── README.md
```

---

## ✨ Features by Page

### 🏠 Homepage (`index.html`)
- **Theatrical curtain reveal** — velvet rose curtains with gold trim swing open on click
- **Rose petal + sparkle canvas** — ambient particle animation throughout
- **Animated hero** — dark romantic background with staggered text reveals
- **Live countdown timer** — counts down to the exact wedding moment
- **Events preview** — 3 cards with featured wedding card
- **Gallery strip** — expandable on hover
- **Smooth page transitions** — fade between all pages

### 📖 Story Page (`pages/story.html`)
- **Animated stats** — numbers count up when scrolled into view
- **Alternating timeline** — 5 chapters with polaroid-style photos, quotes, and gold dots
- **Love letters** — dark elegant section with couple's words to each other

### 🖼️ Gallery Page (`pages/gallery.html`)
- **Polaroid wall** — 6 cards with tape, random rotations, hover to zoom & straighten
- **Hanging frames** — 4 ornate gold SVG-bordered frames on a wire, gentle swing animation
- **Memory reel** — infinite auto-scrolling photo strip, pauses on hover

### 📅 Events Page (`pages/events.html`)
- **4 detailed event cards** — Mehendi, Haldi, Wedding, Reception
- **Featured card** — dark elegant treatment for the main ceremony
- **Venue section** — address, map placeholder, directions link

### 💌 Invitation Page (`pages/invitation.html`)
- **Envelope reveal** — click to flip open the envelope flap
- **Ornate digital card** — gold SVG border, blessing, family names, couple names, full details
- **Share button** — uses Web Share API (falls back to clipboard copy)
- **Print-ready** — clean print styles

### 🙏 Wishes Page (`pages/wishes.html`)
- **Wish form** — name, relationship, message (300 char limit), emoji sticker picker, RSVP
- **Wishes wall** — pre-filled sample wishes + new submitted wishes appear instantly
- **Heart burst animation** — floating hearts/flowers on successful submission
- **Success modal** — pop-up celebration on submit

---

## 🚀 How to Use

### 1. Add Your Photos
Replace placeholder images in `images/placeholders/` with real couple photos.

### 2. Customize Names & Dates
Update these in each HTML file:
- Couple names: **Arjun** → your groom's name, **Priya** → your bride's name
- Date: **14th February 2026** → your wedding date
- Venue: **The Grand Mahal, Chennai** → your venue
- Family names in `invitation.html`

### 3. Update Countdown Date
In `js/countdown.js`, change:
```js
const WEDDING_DATE = new Date('2026-02-14T10:00:00');
```

### 4. Deploy to GitHub Pages
```bash
git init
git add .
git commit -m "✨ Wedding website: Arjun & Priya"
git branch -M main
git remote add origin https://github.com/yourusername/wedding.git
git push -u origin main
```
Then enable **GitHub Pages** in Settings → Pages → Source: `main` branch.

Your website will be live at: `https://yourusername.github.io/wedding/`

---

## 🎨 Design Choices

| Element | Choice | Reason |
|---------|--------|--------|
| Display font | Cinzel Decorative | Regal, ceremonial feel |
| Script font | Dancing Script | Romantic, handwritten warmth |
| Body font | Cormorant Garamond | Elegant, editorial serif |
| UI font | Jost | Clean, modern contrast |
| Primary color | Rose `#c8657a` | Romantic warmth |
| Accent | Gold `#c9a84c` | Celebration & luxury |
| Background | Cream `#fdf6f0` | Soft, inviting |
| Dark | Charcoal `#2c1f24` | Rich contrast |

---

## 📱 Responsive
All pages fully responsive — mobile, tablet, desktop.

---

*Made with ♥ for the most beautiful day*
