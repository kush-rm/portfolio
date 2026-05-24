/* ====================================================
   KUSH MEHTA — PREMIUM PORTFOLIO
   Interactions: Typing · Tilt · Reveal · Navbar
   ==================================================== */

'use strict';

const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

/* =====================
   NAVBAR
   ===================== */
const navbar   = $('#navbar');
const hamburger = $('#hamburger');
const navMenu  = $('#nav-menu');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const y = window.pageYOffset;
    if (navbar) {
        navbar.classList.toggle('scrolled', y > 60);
    }
    lastScroll = y;
    updateActiveLink();
});

// Mobile menu toggle
if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        const open = navMenu.classList.toggle('active');
        hamburger.classList.toggle('active', open);
        document.body.style.overflow = open ? 'hidden' : '';
    });

    $$('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close on backdrop click
    document.addEventListener('click', (e) => {
        if (
            navMenu.classList.contains('active') &&
            !navMenu.contains(e.target) &&
            !hamburger.contains(e.target)
        ) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Active nav link on scroll
const pageSections = $$('section[id]');
function updateActiveLink() {
    let current = '';
    pageSections.forEach(sec => {
        if (window.pageYOffset >= sec.offsetTop - 160) {
            current = sec.id;
        }
    });
    $$('.nav-link').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
}

/* =====================
   SMOOTH SCROLL
   ===================== */
$$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') return;
        const target = $(href);
        if (!target) return;
        e.preventDefault();
        const offset = navbar ? navbar.offsetHeight + 16 : 80;
        window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
    });
});

/* =====================
   TYPING ANIMATION
   ===================== */
const typedEl = $('.typed-text');
if (typedEl) {
    const phrases = [
        'Data Engineer',
        'AI / ML Engineer',
        'Data Scientist',
        'Cloud Data Architect',
        'LLM & RAG Builder'
    ];
    let pi = 0, ci = 0, deleting = false;

    function type() {
        const phrase = phrases[pi];
        typedEl.textContent = deleting
            ? phrase.substring(0, ci - 1)
            : phrase.substring(0, ci + 1);
        deleting ? ci-- : ci++;

        let delay = deleting ? 55 : 95;
        if (!deleting && ci === phrase.length)  { delay = 2200; deleting = true; }
        if (deleting  && ci === 0)              { deleting = false; pi = (pi + 1) % phrases.length; delay = 350; }

        setTimeout(type, delay);
    }
    setTimeout(type, 900);
}

/* =====================
   SCROLL REVEAL
   ===================== */
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.08, rootMargin: '0px 0px -48px 0px' });

// Stagger siblings inside a grid/list
function staggerObserve(containerSel, childSel) {
    $$(containerSel).forEach(container => {
        $$(childSel, container).forEach((child, i) => {
            child.style.transitionDelay = `${i * 0.1}s`;
            revealObserver.observe(child);
        });
    });
}

$$('.reveal').forEach(el => revealObserver.observe(el));

staggerObserve('.skills-container',    '.skill-group');
staggerObserve('.projects-grid',       '.project-card');
staggerObserve('.certifications-grid', '.cert-card');
staggerObserve('.contact-grid',        '.contact-card');
staggerObserve('.about-cards',         '.about-specialty-card');
staggerObserve('.timeline',            '.timeline-item');

/* =====================
   3D CARD TILT
   ===================== */
function initTilt(el) {
    const MAX = 8;
    const PERSP = 1000;

    el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        const rx = -((e.clientY - r.top  - r.height / 2) / (r.height / 2)) * MAX;
        const ry =  ((e.clientX - r.left - r.width  / 2) / (r.width  / 2)) * MAX;
        el.style.transform    = `perspective(${PERSP}px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(12px)`;
        el.style.transition   = 'transform 0.08s ease';
    });

    el.addEventListener('mouseleave', () => {
        el.style.transform  = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        el.style.transition = 'transform 0.5s cubic-bezier(0.4,0,0.2,1)';
    });
}
$$('[data-tilt]').forEach(initTilt);

/* =====================
   RIPPLE EFFECT
   ===================== */
const rippleCSS = document.createElement('style');
rippleCSS.textContent = `@keyframes ripple-effect { to { transform: scale(4); opacity: 0; } }`;
document.head.appendChild(rippleCSS);

$$('.btn, .btn-cta-glow').forEach(btn => {
    btn.addEventListener('click', function (e) {
        const r    = this.getBoundingClientRect();
        const size = Math.max(r.width, r.height);
        const span = document.createElement('span');
        span.style.cssText = `
            position:absolute; pointer-events:none;
            width:${size}px; height:${size}px; border-radius:50%;
            left:${e.clientX - r.left - size / 2}px;
            top:${e.clientY  - r.top  - size / 2}px;
            background:rgba(255,255,255,0.35);
            transform:scale(0);
            animation:ripple-effect 0.6s ease-out forwards;
        `;
        if (getComputedStyle(this).position === 'static') this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(span);
        setTimeout(() => span.remove(), 650);
    });
});

/* =====================
   HERO PARALLAX
   ===================== */
const heroContent = $('.hero-content');
window.addEventListener('scroll', () => {
    if (!heroContent) return;
    const y = window.pageYOffset;
    if (y < window.innerHeight) {
        heroContent.style.transform = `translateY(${y * 0.28}px)`;
        heroContent.style.opacity   = `${1 - (y / window.innerHeight) * 1.15}`;
    }
});

/* =====================
   FLOATING CARDS MOUSE PARALLAX
   ===================== */
const floatingCards = $$('.floating-card');
document.addEventListener('mousemove', (e) => {
    const mx = (e.clientX - window.innerWidth  / 2) / window.innerWidth;
    const my = (e.clientY - window.innerHeight / 2) / window.innerHeight;
    floatingCards.forEach((card, i) => {
        const depth = (i + 1) * 10;
        card.style.transform = `translateY(${my * depth}px) translateX(${mx * depth}px)`;
    });
});

/* =====================
   CONSOLE BRAND
   ===================== */
console.log(
    '%c🚀 Kush Mehta | Data Engineer & AI/ML Engineer',
    'font-size:15px;font-weight:bold;background:linear-gradient(135deg,#4f46e5,#7c3aed);color:white;padding:8px 16px;border-radius:8px;'
);
console.log(
    '%c📫 kushmehta9702@gmail.com  ·  🔗 linkedin.com/in/kush-mehta09/',
    'font-size:11px;color:#64748b;'
);
