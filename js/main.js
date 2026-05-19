/* ============================================================
   時蘊設計 — main.js
   讀取 content.js 的 CONTENT 物件，渲染所有動態區塊
   ============================================================ */

(function () {
  'use strict';

  /* ── Hero Carousel ── */
  (function initCarousel() {
    const carousel = document.querySelector('.hero-carousel');
    if (!carousel || !CONTENT.heroSlides) return;

    // Build slides from content.js
    CONTENT.heroSlides.forEach((src, i) => {
      const div = document.createElement('div');
      div.className = 'hero-slide' + (i === 0 ? ' active' : '');
      const img = document.createElement('img');
      img.src = src;
      img.alt = '時蘊設計作品';
      img.loading = i === 0 ? 'eager' : 'lazy';
      div.appendChild(img);
      carousel.appendChild(div);
    });

    const slides = carousel.querySelectorAll('.hero-slide');
    let current = 0;

    function startPan(img) {
      img.getAnimations().forEach(a => a.cancel());
      img.animate(
        [
          { transform: 'scale(1.10) translateX(-3%)' },
          { transform: 'scale(1.14) translateX(3%)' }
        ],
        { duration: 9000, easing: 'ease-in-out', fill: 'forwards' }
      );
    }

    function advance() {
      slides[current].classList.remove('active');
      current = (current + 1) % slides.length;
      const next = slides[current];
      startPan(next.querySelector('img'));
      next.classList.add('active');
    }

    startPan(slides[0].querySelector('img'));
    if (slides.length > 1) setInterval(advance, 6000);
  })();


  /* ── Projects ── */
  (function renderProjects() {
    const section = document.getElementById('projects');
    if (!section || !CONTENT.projects) return;

    const typeMap = { '住宅': 'Residence', '商辦公設': 'Commercial' };

    CONTENT.projects.forEach((p, i) => {
      const num = String(i + 1).padStart(2, '0');
      const titleHtml = p.title.replace(/\n/g, '<br>');
      const typeEn = typeMap[p.type] || p.type;

      const article = document.createElement('article');
      article.className = 'project';
      article.id = `project-${num}`;
      article.style.setProperty('--accent', p.accent);
      article.dataset.index = i;

      article.innerHTML = `
        <div class="project-image">
          <img src="${p.cover}" alt="${p.title.replace(/\n/g, ' ')}" loading="lazy" />
        </div>
        <div class="project-panel">
          <span class="project-num">${num}</span>
          <h2 class="project-title">${titleHtml}</h2>
          <p class="project-loc">${typeEn} · ${p.location}</p>
        </div>
      `;

      section.appendChild(article);
    });
  })();


  /* ── About ── */
  (function renderAbout() {
    const ph = document.getElementById('about-philosophy');
    const st = document.getElementById('about-story');
    if (!ph || !st) return;

    ph.innerHTML = CONTENT.philosophy.replace(/\n/g, '<br>');
    st.innerHTML = CONTENT.story.replace(/\n/g, '<br>');
  })();


  /* ── Contact ── */
  (function renderContact() {
    const d = CONTENT.designer;
    const c = CONTENT.contact;

    const setText = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.textContent = val;
    };

    setText('designer-role',    d.role);
    setText('designer-name-zh', d.name_zh);
    setText('designer-name-en', d.name_en);
    setText('contact-company',  c.company);

    const list = document.getElementById('contact-list');
    if (!list) return;

    const rows = [
      { key: '電話',  val: c.phone,   href: `tel:+886${c.phone.replace(/^0/, '').replace(/-/g, '')}` },
      { key: 'Email', val: c.email,   href: `mailto:${c.email}` },
      { key: '地址',  val: c.address, href: null },
    ];

    rows.forEach(({ key, val, href }) => {
      const row = document.createElement('div');
      row.className = 'contact-row';
      const valEl = href
        ? `<a href="${href}" class="contact-val">${val}</a>`
        : `<span class="contact-val">${val}</span>`;
      row.innerHTML = `<span class="contact-key">${key}</span>${valEl}`;
      list.appendChild(row);
    });

    const socialList = document.getElementById('contact-social');
    if (socialList && CONTENT.social) {
      const iconMap = {
        Facebook: '<span class="social-icon social-icon-facebook" aria-hidden="true">f</span>',
        Instagram: '<span class="social-icon social-icon-instagram" aria-hidden="true"><span></span></span>',
      };

      CONTENT.social.forEach(({ name, label, url }) => {
        const link = document.createElement('a');
        link.className = 'social-link' + (url ? '' : ' is-placeholder');
        link.href = url || '#';
        link.setAttribute('aria-label', name);
        if (url) link.target = '_blank';
        if (url) link.rel = 'noopener noreferrer';
        if (!url) link.setAttribute('aria-disabled', 'true');
        link.innerHTML = `${iconMap[name] || `<span class="social-mark">${label}</span>`}<span class="social-name">${name}</span>`;
        if (!url) link.addEventListener('click', e => e.preventDefault());
        socialList.appendChild(link);
      });
    }
  })();


  /* ── Active nav on scroll ── */
  (function initNav() {
    const navLinks = document.querySelectorAll('.nav-link');

    function setActive(id) {
      navLinks.forEach(link => {
        const target = link.getAttribute('href').replace('#', '');
        const isProjects = target === 'projects' && (id === 'projects' || id.startsWith('project-'));
        link.classList.toggle('active', isProjects || target === id);
      });
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
    }, { threshold: 0.3 });

    ['hero', 'projects', 'about', 'contact'].forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Also observe individual projects for nav highlight
    document.querySelectorAll('.project').forEach(el => observer.observe(el));

    navLinks.forEach(link => {
      link.addEventListener('click', e => {
        const id = link.getAttribute('href').replace('#', '');
        const el = document.getElementById(id);
        if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth' }); }
      });
    });
  })();


  /* ── Lightbox ── */
  (function initLightbox() {
    const typeMap = { '住宅': 'Residence', '商辦公設': 'Commercial' };

    const lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.setAttribute('role', 'dialog');
    lb.setAttribute('aria-modal', 'true');
    lb.innerHTML = `
      <div class="lightbox-photo-area">
        <button class="lightbox-nav lightbox-prev" aria-label="上一張">&#x2039;</button>
        <img class="lightbox-img" src="" alt="">
        <button class="lightbox-nav lightbox-next" aria-label="下一張">&#x203A;</button>
      </div>
      <div class="lightbox-info">
        <button class="lightbox-close" aria-label="關閉">CLOSE</button>
        <p class="lightbox-type-label"></p>
        <h2 class="lightbox-title"></h2>
        <div class="lightbox-attrs">
          <div class="lightbox-attr-row">
            <span class="lightbox-attr-key">Type</span>
            <span class="lightbox-attr-val" id="lb-type"></span>
          </div>
          <div class="lightbox-attr-row">
            <span class="lightbox-attr-key">Location</span>
            <span class="lightbox-attr-val" id="lb-location"></span>
          </div>
        </div>
        <div class="lightbox-footer">
          <p class="lightbox-desc"></p>
          <p class="lightbox-counter"></p>
        </div>
      </div>
    `;
    document.body.appendChild(lb);

    let photos = [];
    let current = 0;

    const imgEl      = lb.querySelector('.lightbox-img');
    const titleEl    = lb.querySelector('.lightbox-title');
    const typeLblEl  = lb.querySelector('.lightbox-type-label');
    const typeValEl  = lb.querySelector('#lb-type');
    const locValEl   = lb.querySelector('#lb-location');
    const descEl     = lb.querySelector('.lightbox-desc');
    const countEl    = lb.querySelector('.lightbox-counter');

    function render() {
      imgEl.classList.add('loading');
      const src = photos[current];
      const tmp = new Image();
      tmp.onload = () => { imgEl.src = src; imgEl.classList.remove('loading'); };
      tmp.src = src;
      countEl.textContent =
        String(current + 1).padStart(2, '0') + ' / ' +
        String(photos.length).padStart(2, '0');
    }

    function open(project, startIdx) {
      photos  = project.photos && project.photos.length ? project.photos : [project.cover];
      current = startIdx || 0;
      typeLblEl.textContent = typeMap[project.type] || project.type;
      titleEl.textContent   = project.title.replace(/\n/g, ' ');
      typeValEl.textContent = project.type;
      locValEl.textContent  = project.location;
      descEl.textContent    = project.description || '';
      render();
      lb.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function close() {
      lb.classList.remove('open');
      document.body.style.overflow = '';
    }

    function prev() { current = (current - 1 + photos.length) % photos.length; render(); }
    function next() { current = (current + 1) % photos.length; render(); }

    lb.querySelector('.lightbox-close').addEventListener('click', close);
    lb.querySelector('.lightbox-prev').addEventListener('click', e => { e.stopPropagation(); prev(); });
    lb.querySelector('.lightbox-next').addEventListener('click', e => { e.stopPropagation(); next(); });
    lb.querySelector('.lightbox-photo-area').addEventListener('click', e => {
      if (e.target === lb.querySelector('.lightbox-photo-area')) close();
    });

    document.addEventListener('keydown', e => {
      if (!lb.classList.contains('open')) return;
      if (e.key === 'Escape')     close();
      if (e.key === 'ArrowLeft')  prev();
      if (e.key === 'ArrowRight') next();
    });

    let touchX = 0;
    lb.addEventListener('touchstart', e => { touchX = e.changedTouches[0].clientX; }, { passive: true });
    lb.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - touchX;
      if (Math.abs(dx) > 48) dx < 0 ? next() : prev();
    }, { passive: true });

    document.addEventListener('click', e => {
      const article = e.target.closest('.project');
      if (article) {
        const idx = parseInt(article.dataset.index, 10);
        open(CONTENT.projects[idx], 0);
      }
    });
  })();

})();
