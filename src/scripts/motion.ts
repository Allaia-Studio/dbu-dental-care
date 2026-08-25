import Lenis from 'lenis';

const prefersReduced = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Smooth scroll, but never for people who asked the OS not to animate. */
function initSmoothScroll() {
  if (prefersReduced()) return;

  const lenis = new Lenis({
    duration: 1.05,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  let frame = 0;
  const raf = (time: number) => {
    lenis.raf(time);
    frame = requestAnimationFrame(raf);
  };
  frame = requestAnimationFrame(raf);

  // In-page anchors need to go through Lenis or they fight each other.
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -96 });
    });
  });

  window.addEventListener('pagehide', () => cancelAnimationFrame(frame));
}

/** Fade-up on entry. Elements stay visible once revealed. */
function initReveal() {
  const items = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (!items.length) return;

  if (prefersReduced() || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-in'));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0.05 }
  );

  items.forEach((el) => io.observe(el));
}

/** Header goes solid once you leave the hero. */
function initHeader() {
  const header = document.querySelector<HTMLElement>('[data-header]');
  if (!header) return;

  const sync = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 24);
  };
  sync();
  window.addEventListener('scroll', sync, { passive: true });
}

/** Buttons lean very slightly toward the cursor. Pointer-fine only. */
function initMagnetic() {
  if (prefersReduced()) return;
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
    const strength = Number(el.dataset.magnetic) || 0.22;

    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) * strength;
      const y = (e.clientY - (r.top + r.height / 2)) * strength;
      el.style.transform = `translate(${x}px, ${y}px)`;
    });

    el.addEventListener('pointerleave', () => {
      el.style.transform = '';
    });
  });
}

export function initMotion() {
  initSmoothScroll();
  initReveal();
  initHeader();
  initMagnetic();
}
