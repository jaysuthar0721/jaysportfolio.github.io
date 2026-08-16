/* ============================================================
   ANIMATIONS - Jay Suthar Portfolio
   Progressive enhancement. Site works without JS; this layer
   adds the entrance animations, scroll reveals, and nav behavior.
   Respects prefers-reduced-motion (including runtime changes).
   ============================================================ */

(function () {
  'use strict';

  // ---------- REDUCED-MOTION (reactive) ----------
  const motionQuery = window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)')
    : null;
  let reducedMotion = motionQuery ? motionQuery.matches : false;

  if (motionQuery) {
    const handler = function (e) { reducedMotion = e.matches; };
    if (motionQuery.addEventListener) {
      motionQuery.addEventListener('change', handler);
    } else if (motionQuery.addListener) {
      // Safari < 14
      motionQuery.addListener(handler);
    }
  }

  // ---------- SAFE localStorage ----------
  // Wrapped because Safari private mode and some corporate policies throw.
  function safeSet(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* noop */ }
  }

  // ---------- HERO ENTRANCE ----------
  // Waits for fonts before revealing so words don't reflow mid-animation.
  function animateHero() {
    const hero = document.querySelector('[data-hero]');
    if (!hero) return;

    if (reducedMotion) {
      hero.classList.add('revealed');
      return;
    }

    const reveal = function () { hero.classList.add('revealed'); };

    if (document.fonts && document.fonts.ready) {
      // Race font-loading against a hard timeout so the reveal never stalls.
      let done = false;
      const fire = function () {
        if (done) return;
        done = true;
        requestAnimationFrame(reveal);
      };
      document.fonts.ready.then(fire);
      setTimeout(fire, 800);
    } else {
      requestAnimationFrame(function () {
        setTimeout(reveal, 60);
      });
    }
  }

  // ---------- SCROLL REVEALS ----------
  // Any element with [data-reveal] fades and blurs in when it enters view.
  function initScrollReveals() {
    const targets = document.querySelectorAll('[data-reveal]');
    if (!targets.length) return;

    if (reducedMotion || !('IntersectionObserver' in window)) {
      targets.forEach(function (el) { el.classList.add('revealed'); });
      return;
    }

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -60px 0px'
    });

    targets.forEach(function (el) { observer.observe(el); });
  }

  // ---------- NAV SCROLL BEHAVIOR ----------
  // Adds .scrolled once the user is past a small threshold. Guards against
  // redundant class toggles by tracking previous state.
  function initNavScroll() {
    const nav = document.querySelector('.nav');
    if (!nav) return;

    let ticking = false;
    let currentlyScrolled = false;

    function update() {
      const shouldBeScrolled = window.scrollY > 24;
      if (shouldBeScrolled !== currentlyScrolled) {
        nav.classList.toggle('scrolled', shouldBeScrolled);
        currentlyScrolled = shouldBeScrolled;
      }
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });

    update();
  }

  // ---------- THEME TOGGLE ----------
  function initThemeToggle() {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;

    btn.addEventListener('click', function () {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';

      // Trigger a brief transition class so background/color animate smoothly.
      document.documentElement.classList.add('theme-transitioning');
      document.documentElement.setAttribute('data-theme', next);
      safeSet('theme', next);

      setTimeout(function () {
        document.documentElement.classList.remove('theme-transitioning');
      }, 400);
    });
  }

  // ---------- SCROLL PROGRESS (projects page) ----------
  // Writes a --progress custom property; CSS transforms use it via var().
  // Keeps the inline style attribute clean (one custom property, not a
  // matrix transform string rewritten every frame).
  function initScrollProgress() {
    const bar = document.querySelector('[data-scroll-progress]');
    if (!bar) return;

    let ticking = false;
    function update() {
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      const pct = total > 0 ? (window.scrollY / total) : 0;
      bar.style.setProperty('--progress', pct.toFixed(4));
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });

    update();
  }

  // ---------- INIT ----------
  function init() {
    animateHero();
    initScrollReveals();
    initNavScroll();
    initThemeToggle();
    initScrollProgress();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
