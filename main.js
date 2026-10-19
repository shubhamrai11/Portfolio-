/* =====================================================================
   WEB 2626 — motion engine
   GSAP 3.13 (Draggable, Inertia, EasePack) · Lenis 1.1 · raw WebGL fluid
   Edit CONFIG to change the brand, copy and projects.
   ===================================================================== */
(() => {
  'use strict';

  /* -------------------------------------------------------------------
     CONFIG — replace with your own content
     ------------------------------------------------------------------- */
  /* Project images: local file first, then the live site, then a placeholder.
     Run download-images.ps1 once to save local copies into assets/projects/. */
  const IMAGE_SOURCES = {
    'assets/projects/chao-cover.jpg': 'https://cdn.shopify.com/s/files/1/0732/9559/3691/files/Japandi_Ease_CA4A3768.jpg?v=1751279590&width=1600',
    'assets/projects/chao-detail.jpg': 'https://cdn.shopify.com/s/files/1/0732/9559/3691/files/Crafted_To_Endure_CA4A0303.jpg?v=1751279589&width=1400',
    'assets/projects/chao-oversized.jpg': 'https://cdn.shopify.com/s/files/1/0732/9559/3691/files/Tailored_Oversizing_CA4A3826.jpg?v=1751279589&width=1400',
    'assets/projects/pin-cover.jpg': 'https://cdn.shopify.com/s/files/1/0022/5106/3361/files/mobile_Banner-05.png?v=1739866217',
    'assets/projects/pin-banner.jpg': 'https://cdn.shopify.com/s/files/1/0022/5106/3361/files/Website_Banner_2-04.png?v=1739862932',
    'assets/projects/pin-creative-crew.jpg': 'https://sayitwithapin.com/cdn/shop/collections/Personalities_07__1.png?v=1725959425&width=1200',
    'assets/projects/pin-chill-pills.jpg': 'https://sayitwithapin.com/cdn/shop/files/Chill-pills.jpg?v=1697804494&width=1200',
    'assets/projects/firstjob-banner.jpg': 'https://first-job-portal.vercel.app/banner.jpeg',
    'assets/projects/firstjob-logo.png': 'https://first-job-portal.vercel.app/logo.png',
    'assets/projects/eureka-post.jpg': 'https://scontent.fdel3-2.fna.fbcdn.net/v/t39.30808-6/853566748_1760816789385141_5256525402237453021_n.jpg?stp=dst-jpg_tt6&cstp=mx1440x1799&ctp=s640x640&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Vz7DoEe9b8MQ7kNvwEiXa4R&_nc_oc=AdrA5N3Cme7TzskSubLp_A6Yq1skMNs4tV2_9NWCsgxOz-haXk-WcWen_UszVmIbXTc&_nc_zt=23&_nc_ht=scontent.fdel3-2.fna&_nc_gid=7MZlwU8IKj5ZTX81OG2_Hg&_nc_ss=7b289&oh=00_AQPzWg5IEXZZ-8aSrbk5mbxpXJkvLqAvpZFaHizJZpCt9Q&oe=6ADC387A',
    'assets/projects/eureka-cover.jpg': 'https://scontent.fdel3-3.fna.fbcdn.net/v/t39.30808-6/584648527_1439220444878112_5988865093693331262_n.jpg?stp=dst-jpg_tt6&cstp=mx820x360&ctp=s820x360&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=m79pqxovjUsQ7kNvwGtisl0&_nc_oc=AdrR3qdTDHNVcjzqZSogjKMBcPSn5_xqiWN8N6LMBV-QbEIf6Y4tHT7f0wSsPbHEGvs&_nc_zt=23&_nc_ht=scontent.fdel3-3.fna&_nc_gid=pgpNL4szUY657ODHoxriuA&_nc_ss=79289&oh=00_AQPxugS4gJ_jbNA5BkASAVMLgzpW_xyAKVSm0qG4kqP_zw&oe=6ADC272C',
    'assets/projects/eureka-logo.png': 'https://scontent.fdel3-4.fna.fbcdn.net/v/t39.30808-1/301692128_485551173578382_4086972373332454851_n.png?stp=dst-png&cstp=mx1796x1172&ctp=s960x960&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=3ab345&_nc_ohc=Ib7xSVLbXqEQ7kNvwEL2uxA&_nc_oc=AdrUNxetXPCGKFjILxi_FvHJVOmDgTCTgnCk4Tb6H-hczhZDPTkgMqnLC4d9dm8Osiw&_nc_zt=24&_nc_ht=scontent.fdel3-4.fna&_nc_gid=8fcVr2n64Jch5NS8NrvXQw&_nc_ss=79289&oh=00_AQPVOzv_YP5p63wW5O2qUgSu829Sf8U0YqL-V664VBExuw&oe=6ADC494F'
  };

  const CONFIG = {
    name: 'Shubham Rai',
    first: 'SHUBHAM',
    last: 'RAI',
    logo: 'SHUBHAM RAI',
    role: 'Full Stack Developer',
    experience: '2+ years',
    photo: 'assets/shubham.jpg',
    based: 'Azamgarh, Uttar Pradesh',
    working: 'Delhi, India',
    timeZone: 'Asia/Kolkata',
    year: '2026',
    email: 'rai638683@gmail.com',
    phone: '+91 89204 98200',
    github: 'https://github.com/shubhamrai11',
    linkedin: 'https://www.linkedin.com/in/shubham-rai11/',
    resume: 'assets/Shubham-Rai-Resume.pdf',
    availability: 'Open to collaboration',
    preloaderWords: [
      { text: 'BUILDING' }, { text: 'SMART' }, { text: 'DIGITAL' }, { text: 'EXPERIENCES', accent: true }
    ],
    summary: [
      'Full stack developer with 2+ years crafting fast, scalable web apps across the MERN stack and modern low-code platforms.',
      'I turn ideas into polished, user-focused products, from custom e-commerce stores to AI-powered automation.'
    ],
    services: [
      ['Web apps', 'MERN applications with REST APIs, secure authentication and back ends tuned for speed.'],
      ['E-commerce', 'Custom Shopify storefronts in Liquid, with features that move orders, not just pixels.'],
      ['Low-code builds', 'Production sites in Webflow, Wix Studio, WordPress and Framer, designed in Figma.'],
      ['AI automation', 'Chatbots and automation tools that answer customers and take repetitive work off the team.']
    ],
    experienceList: [
      { company: '2626 Creative Studio', role: 'Full Stack Developer', place: 'Sultanpur, Delhi', dates: 'Jun 2025 – Present',
        points: [
          'Built and delivered 10+ client websites with the MERN stack and low-code tools (Shopify, Webflow, Wix Studio, WordPress, Framer, Figma), cutting turnaround time by 15%.',
          'Delivered Chao, a luxury e-commerce platform, and engineered AI automation and chatbot tools for Say it with a Pin, lifting conversion by 10% and cutting manual effort by 15%.'
        ] },
      { company: 'Eureka Geeks Tech Pvt Ltd', role: 'Full Stack Developer', place: 'Noida, India', dates: 'Aug 2023 – Sep 2024',
        points: [
          'Developed and deployed a dynamic MERN web application that raised user engagement by 13% in its first three months.',
          'Built RESTful APIs that cut data retrieval time by 40%, and Passport.js + JWT authentication that reduced unauthorized access attempts by 20%.',
          'Led optimisation of 8+ back-end systems, including database queries and storage, to improve responsiveness.'
        ] }
    ],
    skills: [
      ['Programming', 'Java, JavaScript, SQL, HTML, CSS, MongoDB'],
      ['Frameworks & libraries', 'React.js, Node.js, Express.js, Tailwind CSS, Bootstrap'],
      ['Tools & platforms', 'Git / GitHub, AWS, Docker, Kubernetes, Jenkins, Postman, VS Code'],
      ['Low-code', 'Shopify, Webflow, Wix Studio, WordPress, Framer, Figma'],
      ['Soft skills', 'Leadership, communication, teamwork, problem-solving, adaptability']
    ],
    education: [
      { title: 'B.Tech in Computer Science', org: 'Mangalmay Institute of Engineering and Technology', meta: 'Greater Noida · 2019 – 2023' },
      { title: 'Full Stack Web Development', org: 'Coding Ninjas', meta: 'Jan – Sep 2023 · React, Node.js, Java (Generative AI), OOP' }
    ],
    tools: ['MongoDB', 'Express', 'React', 'Node.js', 'Shopify', 'Webflow', 'WordPress', 'Framer', 'Figma', 'AWS', 'Docker', 'AI automation'],
    // Add real screenshots by setting image (cover) and gallery (two images) paths, e.g. 'assets/chao-cover.jpg'
    projects: [
      { slug: 'chao', title: 'Chao', type: 'Luxury e-commerce', year: '2025', at: '2626 Creative Studio',
        role: 'Shopify developer', stack: 'Shopify · Liquid · HTML · CSS · JS', inks: ['red', 'yell'],
        image: 'assets/projects/chao-cover.jpg', wide: 'assets/projects/chao-cover.jpg', gallery: ['assets/projects/chao-detail.jpg', 'assets/projects/chao-oversized.jpg'], link: 'https://www.shopchao.in/',
        brief: 'A luxury clothing brand for a 35+ audience needed a Shopify store that felt premium and made putting an outfit together easy.',
        built: 'A custom, responsive Liquid storefront with a co-ord builder that pairs a top and bottom into a set and discounts the pair automatically, plus quick-add on every product card.',
        stats: [['+5%', 'orders after quick-add'], ['2-piece', 'co-ord builder with auto discount']] },
      { slug: 'say-it-with-a-pin', title: 'Say it with a Pin', type: 'AI automation & chatbot', year: '2025', at: '2626 Creative Studio',
        role: 'Full stack developer', stack: 'AI chatbot · Automation · Web', inks: ['blue', 'yell'],
        image: 'assets/projects/pin-cover.jpg', wide: 'assets/projects/pin-banner.jpg', gallery: ['assets/projects/pin-creative-crew.jpg', 'assets/projects/pin-chill-pills.jpg'], link: 'https://sayitwithapin.com/',
        brief: 'Say it with a Pin, a shop for handcrafted pins and magnets that ships globally, needed to handle customer conversations and repetitive operations without adding more manual work.',
        built: 'AI-powered automation and chatbot tools wired into the site, answering customers and taking routine tasks off the team.',
        stats: [['+10%', 'conversion'], ['−15%', 'manual effort']] },
      { slug: 'firstjob', title: 'FirstJob', type: 'Job portal', year: '2024', at: 'Personal project',
        role: 'Full stack developer', stack: 'React · Node.js · Express · MongoDB', inks: ['grn', 'blue'],
        image: 'assets/projects/firstjob-banner.jpg', wide: 'assets/projects/firstjob-banner.jpg', gallery: ['assets/projects/firstjob-logo.png', 'assets/projects/firstjob-banner.jpg'], link: 'https://first-job-portal.vercel.app/',
        brief: 'A job portal where candidates register, browse listings and apply, with employers managing roles in the same place.',
        built: 'A responsive React front end, REST APIs in Express and Node.js, MongoDB for users, listings and applications, and JWT + OAuth sign-in.',
        stats: [['JWT + OAuth', 'secure login and registration'], ['REST', 'Express and Node.js APIs']] },
      { slug: 'eureka-geeks', title: 'Eureka Geeks', type: 'MERN web application', year: '2023–24', at: 'Eureka Geeks Tech',
        role: 'Full stack developer', stack: 'MERN · Passport.js · JWT · REST', inks: ['blue', 'red'],
        image: 'assets/projects/eureka-post.jpg', wide: 'assets/projects/eureka-cover.jpg', gallery: ['assets/projects/eureka-logo.png', 'assets/projects/eureka-cover.jpg'], link: 'https://www.facebook.com/eurekageeks/',
        brief: 'A dynamic web application that needed faster data, safer sign-in and back-end systems that could keep up with growth.',
        built: 'REST APIs that cut data retrieval time by 40%, Passport.js and JWT authentication, and optimisation of 8+ back-end systems.',
        stats: [['+13%', 'engagement in 3 months'], ['−40%', 'data retrieval time'], ['−20%', 'unauthorized access attempts'], ['8+', 'back-end systems optimised']] }
    ]
  };

  /* -------------------------------------------------------------------
     Utilities & environment
     ------------------------------------------------------------------- */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const lerp = (a, b, t) => a + (b - a) * t;
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));
  const html = (str) => { const t = document.createElement('template'); t.innerHTML = str.trim(); return t.content.firstElementChild; };

  const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const FINE = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const HAS_GSAP = typeof window.gsap !== 'undefined';
  const ANIM = HAS_GSAP && !REDUCED;
  const isHorizontal = () => !REDUCED && innerWidth >= 900 && innerHeight >= 520;

  if (HAS_GSAP) {
    if (window.Draggable) gsap.registerPlugin(Draggable);
    if (window.InertiaPlugin) gsap.registerPlugin(InertiaPlugin);
    gsap.ticker.lagSmoothing(0);
  }
  const ROUGH = (window.RoughEase || (HAS_GSAP && gsap.parseEase('rough')))
    ? 'rough({ strength: 2, points: 120, randomize: true, clamp: true })' : 'power2.out';

  document.documentElement.classList.add(ANIM ? 'anim' : 'no-anim');

  const ALPHA = 'abcdefghijklmnopqrstuvwxyz';
  const INKS = { red: 'var(--riso-red)', blue: 'var(--riso-blue)', yell: 'var(--riso-yell)', grn: 'var(--riso-grn)' };

  /* Split text into masked characters. Returns the inner char spans. */
  function splitChars(el, masked = true) {
    const text = el.textContent;
    el.setAttribute('aria-label', text);
    el.textContent = '';
    const chars = [];
    const words = text.split(' ');
    words.forEach((word, wi) => {
      const wordEl = document.createElement('span');
      wordEl.className = 'c-word';
      wordEl.setAttribute('aria-hidden', 'true');
      for (const ch of word) {
        const c = document.createElement('span');
        c.className = 'c';
        c.textContent = ch;
        if (masked) {
          const m = document.createElement('span');
          m.className = 'c-mask';
          m.appendChild(c);
          wordEl.appendChild(m);
        } else wordEl.appendChild(c);
        chars.push(c);
      }
      el.appendChild(wordEl);
      if (wi < words.length - 1) el.appendChild(document.createTextNode(' '));
    });
    return chars;
  }

  /* Split a block into masked words, keeping inline elements (em, [data-rotate]) whole. */
  function splitWords(el) {
    let i = 0;
    const wrap = (node) => {
      const m = document.createElement('span'); m.className = 'w-mask';
      const w = document.createElement('span'); w.className = 'w'; w.style.setProperty('--i', i++);
      m.appendChild(w);
      if (typeof node === 'string') w.textContent = node; else { node.replaceWith(m); w.appendChild(node); }
      return m;
    };
    const walk = (parent) => {
      [...parent.childNodes].forEach((n) => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach((part) => {
            if (!part) return;
            if (/^\s+$/.test(part)) frag.appendChild(document.createTextNode(' '));
            else frag.appendChild(wrap(part));
          });
          n.replaceWith(frag);
        } else if (n.nodeType === 1) {
          if (n.matches('em, [data-rotate], .keep')) wrap(n); else walk(n);
        }
      });
    };
    walk(el);
  }

  /* Seeded RNG for the generated risograph artwork */
  function rng(seed) {
    let a = (seed * 2654435761) >>> 0;
    return () => {
      a = (a + 0x6D2B79F5) >>> 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function renderArt(el, seed, inks, num) {
    const r = rng(seed + 7);
    const a = INKS[inks[0]] || INKS.red;
    const b = INKS[inks[1]] || INKS.blue;
    const p = (v) => v.toFixed(1) + '%';
    const shapes = [
      `<i class="sh disc" style="left:${p(10 + r() * 30)};top:${p(8 + r() * 22)};width:${p(52 + r() * 26)};background:${a}"></i>`,
      `<i class="sh bar" style="left:${p(r() * 24)};top:${p(52 + r() * 24)};width:${p(62 + r() * 34)};height:${p(9 + r() * 12)};background:${b}"></i>`,
      `<i class="sh half" style="left:${p(52 + r() * 26)};top:${p(6 + r() * 18)};width:${p(26 + r() * 16)};background:${b}"></i>`,
      `<i class="sh dots" style="left:${p(4 + r() * 18)};top:${p(4 + r() * 12)};width:${p(28 + r() * 18)};height:${p(20 + r() * 16)};color:${a}"></i>`,
      `<i class="sh ring" style="left:${p(r() * 46)};top:${p(58 + r() * 22)};width:${p(16 + r() * 12)};border-color:${a}"></i>`
    ];
    el.insertAdjacentHTML('beforeend', `<div class="art-layer">${shapes.join('')}</div>${num ? `<span class="art-num">${num}</span>` : ''}`);
  }

  /* Letter scramble used on nav hover */
  function scramble(el) {
    if (el._scrambling || REDUCED) return;
    const final = el.dataset.text || el.textContent;
    el.dataset.text = final;
    el._scrambling = true;
    let f = 0;
    const total = final.length * 2 + 6;
    const step = () => {
      let out = '';
      for (let i = 0; i < final.length; i++) {
        const ch = final[i];
        if (ch === ' ' || f >= i * 2 + 6) { out += ch; continue; }
        const rnd = /\d/.test(ch) ? String(Math.random() * 10 | 0) : ALPHA[Math.random() * 26 | 0];
        out += ch === ch.toUpperCase() ? rnd.toUpperCase() : rnd;
      }
      el.textContent = out;
      if (++f <= total) setTimeout(step, 26); else { el.textContent = final; el._scrambling = false; }
    };
    step();
  }

  /* -------------------------------------------------------------------
     Glitch hover: SVG displacement driven by a rough ease
     ------------------------------------------------------------------- */
  const glitchFilter = $('#glitch-filter');
  const feDisp = glitchFilter && glitchFilter.querySelector('feDisplacementMap');
  const feTurb = glitchFilter && glitchFilter.querySelector('feTurbulence');
  let glitchTween = null; let glitchEl = null;
  function glitch(el) {
    if (!ANIM || !feDisp) return;
    if (glitchTween) { glitchTween.kill(); if (glitchEl) glitchEl.style.filter = ''; }
    const state = { s: 40 };
    glitchEl = el;
    feTurb.setAttribute('seed', String(1 + (Math.random() * 90 | 0)));
    el.style.filter = 'url(#glitch-filter)';
    glitchTween = gsap.to(state, {
      s: 0, duration: .7, ease: ROUGH,
      onUpdate: () => feDisp.setAttribute('scale', state.s.toFixed(2)),
      onComplete: () => { el.style.filter = ''; glitchTween = null; }
    });
    const line = el.querySelector('.u-line');
    if (line) gsap.fromTo(line, { y: -5 }, { y: 0, duration: .7, ease: 'expo.out' });
  }

  /* -------------------------------------------------------------------
     WebGL fluid (stable fluids) — ink trail multiplied onto the page
     ------------------------------------------------------------------- */
  function createFluid(canvas) {
    const opts = { alpha: false, depth: false, stencil: false, antialias: false, preserveDrawingBuffer: false };
    let gl = canvas.getContext('webgl2', opts);
    const isGL2 = !!gl;
    if (!gl) gl = canvas.getContext('webgl', opts);
    if (!gl) return null;

    let halfFloat, internal;
    if (isGL2) {
      if (!gl.getExtension('EXT_color_buffer_float') && !gl.getExtension('EXT_color_buffer_half_float')) return null;
      halfFloat = gl.HALF_FLOAT; internal = gl.RGBA16F;
    } else {
      const ext = gl.getExtension('OES_texture_half_float');
      if (!ext || !gl.getExtension('OES_texture_half_float_linear')) return null;
      halfFloat = ext.HALF_FLOAT_OES; internal = gl.RGBA;
    }

    const P = { SIM: 128, DYE: 512, ITER: 4, DENSITY: .975, VELOCITY: .98, PRESSURE: .8, CURL: 14, RADIUS: .0024, FORCE: 6 };

    const VERT = `precision highp float;
      attribute vec2 aPosition; uniform vec2 texelSize;
      varying vec2 vUv, vL, vR, vT, vB;
      void main(){ vUv = aPosition * .5 + .5;
        vL = vUv - vec2(texelSize.x, 0.); vR = vUv + vec2(texelSize.x, 0.);
        vT = vUv + vec2(0., texelSize.y); vB = vUv - vec2(0., texelSize.y);
        gl_Position = vec4(aPosition, 0., 1.); }`;
    const HEAD = 'precision highp float;\nprecision highp sampler2D;\nvarying vec2 vUv, vL, vR, vT, vB;\n';
    const FS = {
      clear: `uniform sampler2D uTexture; uniform float value;
        void main(){ gl_FragColor = value * texture2D(uTexture, vUv); }`,
      splat: `uniform sampler2D uTarget; uniform float aspectRatio; uniform vec3 color; uniform vec2 point; uniform float radius;
        void main(){ vec2 p = vUv - point; p.x *= aspectRatio;
          vec3 s = exp(-dot(p, p) / radius) * color; vec3 base = texture2D(uTarget, vUv).xyz;
          gl_FragColor = vec4(base + s, 1.); }`,
      advection: `uniform sampler2D uVelocity; uniform sampler2D uSource; uniform vec2 texelSize; uniform float dt; uniform float dissipation;
        void main(){ vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
          gl_FragColor = dissipation * texture2D(uSource, coord); gl_FragColor.a = 1.; }`,
      divergence: `uniform sampler2D uVelocity;
        void main(){ float L = texture2D(uVelocity, vL).x; float R = texture2D(uVelocity, vR).x;
          float T = texture2D(uVelocity, vT).y; float B = texture2D(uVelocity, vB).y;
          vec2 C = texture2D(uVelocity, vUv).xy;
          if (vL.x < 0.) L = -C.x; if (vR.x > 1.) R = -C.x; if (vT.y > 1.) T = -C.y; if (vB.y < 0.) B = -C.y;
          gl_FragColor = vec4(.5 * (R - L + T - B), 0., 0., 1.); }`,
      curl: `uniform sampler2D uVelocity;
        void main(){ float L = texture2D(uVelocity, vL).y; float R = texture2D(uVelocity, vR).y;
          float T = texture2D(uVelocity, vT).x; float B = texture2D(uVelocity, vB).x;
          gl_FragColor = vec4(.5 * (R - L - T + B), 0., 0., 1.); }`,
      vorticity: `uniform sampler2D uVelocity; uniform sampler2D uCurl; uniform float curl; uniform float dt;
        void main(){ float L = texture2D(uCurl, vL).x; float R = texture2D(uCurl, vR).x;
          float T = texture2D(uCurl, vT).x; float B = texture2D(uCurl, vB).x; float C = texture2D(uCurl, vUv).x;
          vec2 force = .5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
          force /= length(force) + .0001; force *= curl * C; force.y *= -1.;
          vec2 vel = texture2D(uVelocity, vUv).xy;
          gl_FragColor = vec4(vel + force * dt, 0., 1.); }`,
      pressure: `uniform sampler2D uPressure; uniform sampler2D uDivergence;
        void main(){ float L = texture2D(uPressure, vL).x; float R = texture2D(uPressure, vR).x;
          float T = texture2D(uPressure, vT).x; float B = texture2D(uPressure, vB).x;
          float d = texture2D(uDivergence, vUv).x;
          gl_FragColor = vec4((L + R + B + T - d) * .25, 0., 0., 1.); }`,
      gradient: `uniform sampler2D uPressure; uniform sampler2D uVelocity;
        void main(){ float L = texture2D(uPressure, vL).x; float R = texture2D(uPressure, vR).x;
          float T = texture2D(uPressure, vT).x; float B = texture2D(uPressure, vB).x;
          vec2 v = texture2D(uVelocity, vUv).xy; v -= vec2(R - L, T - B);
          gl_FragColor = vec4(v, 0., 1.); }`,
      display: `uniform sampler2D uTexture;
        void main(){ vec3 ink = clamp(texture2D(uTexture, vUv).rgb, 0., 1.);
          gl_FragColor = vec4(vec3(1.) - ink, 1.); }`
    };

    const compile = (type, src) => {
      const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s));
      return s;
    };
    const vs = compile(gl.VERTEX_SHADER, VERT);
    const program = (fs) => {
      const p = gl.createProgram();
      gl.attachShader(p, vs); gl.attachShader(p, compile(gl.FRAGMENT_SHADER, HEAD + fs));
      gl.bindAttribLocation(p, 0, 'aPosition'); gl.linkProgram(p);
      if (!gl.getProgramParameter(p, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(p));
      const u = {};
      const n = gl.getProgramParameter(p, gl.ACTIVE_UNIFORMS);
      for (let i = 0; i < n; i++) { const name = gl.getActiveUniform(p, i).name; u[name] = gl.getUniformLocation(p, name); }
      return { p, u };
    };
    const prog = {};
    for (const k in FS) prog[k] = program(FS[k]);

    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), gl.STATIC_DRAW);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(0);

    const blit = (target) => {
      if (target) { gl.viewport(0, 0, target.w, target.h); gl.bindFramebuffer(gl.FRAMEBUFFER, target.fbo); }
      else { gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight); gl.bindFramebuffer(gl.FRAMEBUFFER, null); }
      gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
    };
    const fbo = (w, h) => {
      gl.activeTexture(gl.TEXTURE0);
      const tex = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texImage2D(gl.TEXTURE_2D, 0, internal, w, h, 0, gl.RGBA, halfFloat, null);
      const fb = gl.createFramebuffer();
      gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
      if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE) throw new Error('Fluid framebuffer unsupported');
      gl.viewport(0, 0, w, h); gl.clearColor(0, 0, 0, 1); gl.clear(gl.COLOR_BUFFER_BIT);
      return { tex, fbo: fb, w, h, attach(id) { gl.activeTexture(gl.TEXTURE0 + id); gl.bindTexture(gl.TEXTURE_2D, tex); return id; } };
    };
    const dbl = (w, h) => {
      let a = fbo(w, h), b = fbo(w, h);
      return { w, h, get read() { return a; }, get write() { return b; }, swap() { const t = a; a = b; b = t; } };
    };
    const res = (base) => {
      let aspect = gl.drawingBufferWidth / gl.drawingBufferHeight;
      if (aspect < 1) aspect = 1 / aspect;
      const max = Math.round(base * aspect), min = Math.round(base);
      return gl.drawingBufferWidth > gl.drawingBufferHeight ? { w: max, h: min } : { w: min, h: max };
    };

    let vel, dye, pressure, divergence, curl, simTexel;
    const allocate = () => {
      const s = res(P.SIM), d = res(P.DYE);
      vel = dbl(s.w, s.h); dye = dbl(d.w, d.h); pressure = dbl(s.w, s.h);
      divergence = fbo(s.w, s.h); curl = fbo(s.w, s.h);
      simTexel = [1 / s.w, 1 / s.h];
    };
    const size = () => {
      const dpr = Math.min(devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(innerWidth * dpr);
      canvas.height = Math.round(innerHeight * dpr);
    };
    size(); allocate();

    const queue = [];
    let last = null; let lastMove = 0; let running = true; let raf = 0;
    const absorb = (hex) => { const n = parseInt(hex.slice(1), 16); return [1 - ((n >> 16) & 255) / 255, 1 - ((n >> 8) & 255) / 255, 1 - (n & 255) / 255]; };
    const INK_A = absorb('#2448e6'); const INK_B = absorb('#e8412a');

    function splat(x, y, dx, dy, color) {
      const s = prog.splat; gl.useProgram(s.p);
      gl.uniform2f(s.u.texelSize, simTexel[0], simTexel[1]);
      gl.uniform1i(s.u.uTarget, vel.read.attach(0));
      gl.uniform1f(s.u.aspectRatio, canvas.width / canvas.height);
      gl.uniform2f(s.u.point, x, y);
      gl.uniform3f(s.u.color, dx, dy, 0);
      gl.uniform1f(s.u.radius, P.RADIUS);
      blit(vel.write); vel.swap();
      gl.uniform1i(s.u.uTarget, dye.read.attach(0));
      gl.uniform3f(s.u.color, color[0], color[1], color[2]);
      blit(dye.write); dye.swap();
    }

    function step() {
      const dt = 0.016;
      gl.disable(gl.BLEND);
      let p;
      p = prog.curl; gl.useProgram(p.p); gl.uniform2f(p.u.texelSize, ...simTexel);
      gl.uniform1i(p.u.uVelocity, vel.read.attach(0)); blit(curl);

      p = prog.vorticity; gl.useProgram(p.p); gl.uniform2f(p.u.texelSize, ...simTexel);
      gl.uniform1i(p.u.uVelocity, vel.read.attach(0)); gl.uniform1i(p.u.uCurl, curl.attach(1));
      gl.uniform1f(p.u.curl, P.CURL); gl.uniform1f(p.u.dt, dt); blit(vel.write); vel.swap();

      p = prog.divergence; gl.useProgram(p.p); gl.uniform2f(p.u.texelSize, ...simTexel);
      gl.uniform1i(p.u.uVelocity, vel.read.attach(0)); blit(divergence);

      p = prog.clear; gl.useProgram(p.p); gl.uniform2f(p.u.texelSize, ...simTexel);
      gl.uniform1i(p.u.uTexture, pressure.read.attach(0)); gl.uniform1f(p.u.value, P.PRESSURE);
      blit(pressure.write); pressure.swap();

      p = prog.pressure; gl.useProgram(p.p); gl.uniform2f(p.u.texelSize, ...simTexel);
      gl.uniform1i(p.u.uDivergence, divergence.attach(0));
      for (let i = 0; i < P.ITER; i++) { gl.uniform1i(p.u.uPressure, pressure.read.attach(1)); blit(pressure.write); pressure.swap(); }

      p = prog.gradient; gl.useProgram(p.p); gl.uniform2f(p.u.texelSize, ...simTexel);
      gl.uniform1i(p.u.uPressure, pressure.read.attach(0)); gl.uniform1i(p.u.uVelocity, vel.read.attach(1));
      blit(vel.write); vel.swap();

      p = prog.advection; gl.useProgram(p.p); gl.uniform2f(p.u.texelSize, ...simTexel); gl.uniform1f(p.u.dt, dt);
      gl.uniform1i(p.u.uVelocity, vel.read.attach(0)); gl.uniform1i(p.u.uSource, vel.read.attach(0));
      gl.uniform1f(p.u.dissipation, P.VELOCITY); blit(vel.write); vel.swap();

      gl.uniform1i(p.u.uVelocity, vel.read.attach(0)); gl.uniform1i(p.u.uSource, dye.read.attach(1));
      gl.uniform1f(p.u.dissipation, P.DENSITY); blit(dye.write); dye.swap();

      p = prog.display; gl.useProgram(p.p); gl.uniform2f(p.u.texelSize, ...simTexel);
      gl.uniform1i(p.u.uTexture, dye.read.attach(0)); blit(null);
    }

    function frame(t) {
      raf = requestAnimationFrame(frame);
      if (!running) return;
      if (queue.length === 0 && t - lastMove > 5000) return; // idle: ink has faded, save the GPU
      const mix = (Math.sin(t * 0.00035) + 1) / 2;
      while (queue.length) {
        const s = queue.shift();
        const k = clamp(s.speed / 40, 0, 1) * 0.26;
        splat(s.x, s.y, s.dx, s.dy, [lerp(INK_A[0], INK_B[0], mix) * k, lerp(INK_A[1], INK_B[1], mix) * k, lerp(INK_A[2], INK_B[2], mix) * k]);
      }
      step();
    }
    raf = requestAnimationFrame(frame);

    let rt;
    const onResize = () => { clearTimeout(rt); rt = setTimeout(() => { size(); allocate(); }, 200); };
    addEventListener('resize', onResize);
    document.addEventListener('visibilitychange', () => { running = !document.hidden; });

    return {
      move(x, y) {
        if (last) {
          const dx = x - last.x, dy = y - last.y;
          const speed = Math.hypot(dx, dy);
          if (speed > 0.5) queue.push({ x: x / innerWidth, y: 1 - y / innerHeight, dx: dx * P.FORCE, dy: -dy * P.FORCE, speed });
          if (queue.length > 12) queue.shift();
        }
        last = { x, y }; lastMove = performance.now();
      },
      reset() { last = null; }
    };
  }

  /* -------------------------------------------------------------------
     Custom cursor: lerped dot + circle, contextual scale and label
     ------------------------------------------------------------------- */
  const CURSOR_SCALE = { default: 1, nav: 1.78, link: 1.71, img: 0, title: 0, active: .78 };
  const cursor = { x: -100, y: -100, dx: -100, dy: -100, cx: -100, cy: -100, s: 1, ts: 1, state: 'default' };
  function setupCursor(fluid) {
    document.documentElement.classList.add('has-cursor');
    const dot = $('.cursor-dot'), circle = $('.cursor-circle');
    const label = $('.cursor-label'), labelText = $('.cursor-label span');
    let lx = -100, ly = -100; let pressed = false;

    addEventListener('pointermove', (e) => {
      if (e.pointerType !== 'mouse') return;
      cursor.x = e.clientX; cursor.y = e.clientY;
      if (fluid) fluid.move(e.clientX, e.clientY);
    }, { passive: true });
    document.addEventListener('mouseleave', () => { cursor.x = cursor.y = -100; if (fluid) fluid.reset(); });
    addEventListener('pointerdown', () => { pressed = true; cursor.ts = cursor.state === 'default' ? CURSOR_SCALE.active : cursor.ts * .85; });
    addEventListener('pointerup', () => { pressed = false; setState(cursor.state, labelText.textContent); });

    function setState(state, text) {
      cursor.state = state;
      cursor.ts = CURSOR_SCALE[state] ?? 1;
      const showLabel = (state === 'img' || state === 'title') && text;
      labelText.textContent = text || '';
      label.classList.toggle('is-on', !!showLabel);
      circle.style.opacity = showLabel ? '0' : '1';
      circle.classList.toggle('is-fill', state === 'nav');
    }
    cursor.setState = setState;

    document.addEventListener('mouseover', (e) => {
      const t = e.target.closest('[data-cursor]');
      if (pressed) return;
      if (t) setState(t.dataset.cursor, t.dataset.cursorText || ''); else if (cursor.state !== 'default') setState('default', '');
    });

    const tick = () => {
      cursor.dx = lerp(cursor.dx, cursor.x, .45); cursor.dy = lerp(cursor.dy, cursor.y, .45);
      cursor.cx = lerp(cursor.cx, cursor.x, .18); cursor.cy = lerp(cursor.cy, cursor.y, .18);
      cursor.s = lerp(cursor.s, cursor.ts, .16);
      dot.style.transform = `translate3d(${cursor.dx}px, ${cursor.dy}px, 0)`;
      circle.style.transform = `translate3d(${cursor.cx}px, ${cursor.cy}px, 0) scale(${cursor.s.toFixed(3)})`;
      lx = lerp(lx, cursor.x, .22); ly = lerp(ly, cursor.y, .22);
      label.style.transform = `translate3d(${lx}px, ${ly}px, 0)`;
    };
    if (HAS_GSAP) gsap.ticker.add(tick); else (function loop() { tick(); requestAnimationFrame(loop); })();
  }

  /* -------------------------------------------------------------------
     Scroller: Lenis per view, horizontal on desktop with a "brake"
     ------------------------------------------------------------------- */
  const progressBar = $('#progressBar');
  function createScroller(viewEl, horizontal) {
    const wrapper = $('.wrapper', viewEl);
    const track = $('.track', viewEl);
    viewEl.classList.add(horizontal ? 'mode-h' : 'mode-v');
    const subs = []; const off = [];
    const listen = (t, ev, fn, o) => { t.addEventListener(ev, fn, o); off.push(() => t.removeEventListener(ev, fn, o)); };

    let lenis = null;
    if (window.Lenis && ANIM) {
      lenis = new Lenis({
        wrapper, content: track, eventsTarget: wrapper,
        orientation: horizontal ? 'horizontal' : 'vertical',
        gestureOrientation: horizontal ? 'both' : 'vertical',
        lerp: horizontal ? .1 : .075, smoothWheel: true,
        wheelMultiplier: horizontal ? .65 : .6, touchMultiplier: 1.2
      });
      if (horizontal) {
        // Heavy while the wheel is moving, then a quick brake when it stops.
        let t1, t2;
        listen(wrapper, 'wheel', () => {
          lenis.options.lerp = .08;
          clearTimeout(t1); clearTimeout(t2);
          t1 = setTimeout(() => { lenis.options.lerp = .28; t2 = setTimeout(() => { lenis.options.lerp = .1; }, 150); }, 120);
        }, { passive: true });
      }
    } else if (horizontal) {
      listen(wrapper, 'wheel', (e) => {
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) { wrapper.scrollLeft += e.deltaY; e.preventDefault(); }
      }, { passive: false });
    }

    const pos = () => (horizontal ? wrapper.scrollLeft : wrapper.scrollTop);
    const max = () => (horizontal ? wrapper.scrollWidth - wrapper.clientWidth : wrapper.scrollHeight - wrapper.clientHeight);
    const to = (v) => {
      v = clamp(v, 0, max());
      if (lenis) lenis.scrollTo(v, { lerp: .1 });
      else wrapper.scrollTo({ [horizontal ? 'left' : 'top']: v, behavior: REDUCED ? 'auto' : 'smooth' });
    };

    let last = pos(); let vel = 0;
    const tick = (time) => {
      if (lenis) lenis.raf(time * 1000);
      const p = pos();
      vel = lerp(vel, p - last, .25); last = p;
      const m = max();
      progressBar.style.transform = `scaleY(${m > 0 ? clamp(p / m, 0, 1).toFixed(4) : 0})`;
      for (const f of subs) f({ pos: p, velocity: vel });
    };
    if (HAS_GSAP) gsap.ticker.add(tick);
    else { const loop = (t) => { tick(t / 1000); raf = requestAnimationFrame(loop); }; var raf = requestAnimationFrame(loop); }

    listen(window, 'keydown', (e) => {
      if (!horizontal || e.target.closest('input, textarea, select')) return;
      const stepPx = innerWidth * .8;
      const k = e.key;
      if (k === ' ' && e.target.closest('a, button')) return;
      let d = null;
      if (k === 'ArrowRight' || k === 'ArrowDown' || k === 'PageDown') d = stepPx;
      else if (k === 'ArrowLeft' || k === 'ArrowUp' || k === 'PageUp') d = -stepPx;
      else if (k === ' ') d = e.shiftKey ? -stepPx : stepPx;
      else if (k === 'Home') { e.preventDefault(); return to(0); }
      else if (k === 'End') { e.preventDefault(); return to(max()); }
      if (d === null) return;
      e.preventDefault();
      to(pos() + d);
    });
    $$('[data-scroll-top]', viewEl).forEach((b) => listen(b, 'click', () => to(0)));

    return {
      wrapper, horizontal,
      onTick: (fn) => subs.push(fn),
      destroy() {
        if (HAS_GSAP) gsap.ticker.remove(tick); else cancelAnimationFrame(raf);
        if (lenis) lenis.destroy();
        off.forEach((f) => f());
        progressBar.style.transform = 'scaleY(0)';
      }
    };
  }

  /* -------------------------------------------------------------------
     View features
     ------------------------------------------------------------------- */
  function setupRotate(root) {
    if (!ANIM) return () => {};
    const kills = [];
    $$('[data-rotate]', root).forEach((w) => {
      const chars = splitChars(w, false);
      gsap.set(chars, { display: 'inline-block', transformPerspective: 180, transformStyle: 'preserve-3d' });
      const base = getComputedStyle(w).color;
      const accent = getComputedStyle(document.documentElement).getPropertyValue('--riso-red').trim() || '#e8412a';
      let idle;
      const schedule = () => { clearTimeout(idle); idle = setTimeout(() => tl.restart(), 5000); };
      const tl = gsap.timeline({ paused: true, defaults: { ease: 'power1' }, onComplete: schedule });
      tl.to(chars, { rotationX: -360, z: 80, color: accent, duration: .55, stagger: .05 })
        .to(chars, { z: 0, color: base, duration: .3, stagger: .05 }, '-=.3');
      const onEnter = () => { if (!tl.isActive()) tl.restart(); };
      w.addEventListener('mouseenter', onEnter);
      setTimeout(() => tl.restart(), 2200);
      kills.push(() => { clearTimeout(idle); tl.kill(); w.removeEventListener('mouseenter', onEnter); });
    });
    return () => kills.forEach((k) => k());
  }

  function setupDrag(root) {
    const prints = $$('.print', root);
    if (!prints.length) return () => {};
    const area = prints[0].parentElement;
    if (HAS_GSAP) prints.forEach((p, i) => gsap.set(p, { rotation: (i % 2 ? 1 : -1) * (2 + ((i * 3.7) % 7)) }));
    if (!HAS_GSAP || !window.Draggable || !FINE) return () => {};
    let z = 10;
    const lastGhost = new WeakMap();
    const ghost = (p) => {
      if (REDUCED) return;
      const now = performance.now();
      if (now - (lastGhost.get(p) || 0) < 70) return;
      lastGhost.set(p, now);
      const g = p.cloneNode(true);
      g.classList.add('ghost');
      g.style.zIndex = String(Number(p.style.zIndex || 1) - 1);
      area.insertBefore(g, p);
      gsap.fromTo(g, { opacity: .35 }, { opacity: 0, duration: .6, ease: 'power1.out', onComplete: () => g.remove() });
    };
    const ds = prints.map((p) => Draggable.create(p, {
      type: 'x,y', bounds: area, inertia: !!window.InertiaPlugin, edgeResistance: .8, zIndexBoost: false,
      onPress() { p.style.zIndex = String(++z); gsap.to(p, { scale: 1.06, rotation: 0, duration: .35, ease: 'power3.out' }); },
      onRelease() { gsap.to(p, { scale: 1, duration: .5, ease: 'power3.out' }); },
      onDrag() { ghost(p); },
      onThrowUpdate() { ghost(p); }
    })[0]);
    return () => ds.forEach((d) => d && d.kill());
  }

  function initView(view, horizontal) {
    const el = view.el;
    const cleanups = [];

    $$('[data-art]:not(.has-img)', el).forEach((n) => renderArt(n, Number(n.dataset.art) || 0, (n.dataset.inks || 'red,blue').split(','), n.dataset.num));
    const splits = $$('[data-split]', el).map((n) => splitChars(n));
    if (ANIM) splits.forEach((chars) => gsap.set(chars, { yPercent: 110 }));
    $$('[data-reveal]', el).forEach((n) => { if (n.dataset.reveal !== 'fade') splitWords(n); });

    const sc = createScroller(el, horizontal);
    cleanups.push(sc.destroy);

    // reveal on enter (root = the scrolling wrapper, works for both axes)
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add('is-in');
          setTimeout(() => e.target.classList.add('is-done'), 1600);
          io.unobserve(e.target);
        });
      }, { root: sc.wrapper, threshold: .12 });
      $$('[data-reveal]', el).forEach((n) => io.observe(n));
      cleanups.push(() => io.disconnect());
    } else $$('[data-reveal]', el).forEach((n) => n.classList.add('is-in'));

    // parallax inside frames + skew on velocity
    const frames = $$('[data-parallax]', el).map((inner) => ({ inner, frame: inner.parentElement }));
    const cards = horizontal ? $$('.card', el) : [];
    if (ANIM) {
      sc.onTick(({ velocity }) => {
        const vw = innerWidth, vh = innerHeight;
        for (const f of frames) {
          const r = f.frame.getBoundingClientRect();
          if (horizontal) {
            if (r.right < -50 || r.left > vw + 50) continue;
            const o = (r.left + r.width / 2 - vw / 2) / vw;
            f.inner.style.transform = `translate3d(${(o * -9).toFixed(2)}%, 0, 0)`;
          } else {
            if (r.bottom < -50 || r.top > vh + 50) continue;
            const o = (r.top + r.height / 2 - vh / 2) / vh;
            f.inner.style.transform = `translate3d(0, ${(o * -9).toFixed(2)}%, 0)`;
          }
        }
        if (cards.length) {
          const sk = clamp(-velocity * .06, -4, 4);
          const val = Math.abs(sk) < .02 ? '' : `skewX(${sk.toFixed(2)}deg)`;
          for (const c of cards) c.style.transform = val;
        }
      });
    }

    cleanups.push(setupRotate(el));
    cleanups.push(setupDrag(el));
    if (view.init) { const c = view.init(el); if (c) cleanups.push(c); }

    return {
      enter(delay = 0) {
        if (!ANIM) return;
        splits.forEach((chars, i) => gsap.to(chars, { yPercent: 0, duration: 1, ease: 'power3.out', stagger: .045, delay: delay + i * .12 }));
      },
      destroy() { cleanups.forEach((f) => f && f()); }
    };
  }

  /* -------------------------------------------------------------------
     Markup
     ------------------------------------------------------------------- */
  const C = CONFIG;
  const pad2 = (n) => String(n).padStart(2, '0');

  /* Image slot: local file → live-site copy → labelled risograph placeholder */
  const media = ({ src = '', alt = '', seed = 1, inks = ['red', 'blue'], label = 'Image placeholder', num = '', parallax = true, fit = 'cover' }) => {
    const ph = `data-art="${seed}" data-inks="${inks.join(',')}"${num ? ` data-num="${num}"` : ''} data-label="${label}"`;
    if (!src) return `<div class="art is-ph"${parallax ? ' data-parallax' : ''} ${ph}><span class="ph-label mono">${label}</span></div>`;
    const remote = IMAGE_SOURCES[src] || '';
    return `<div class="art has-img${fit === 'contain' ? ' is-contain' : ''}"${parallax ? ' data-parallax' : ''} ${ph}><img src="${src}"${remote ? ` data-remote="${remote}"` : ''} alt="${alt}" loading="lazy" decoding="async" draggable="false" onerror="window.__imgFallback && window.__imgFallback(this)"></div>`;
  };
  window.__imgFallback = (img) => {
    const remote = img.dataset.remote;
    if (remote && img.src !== remote) { img.src = remote; return; }
    const box = img.closest('.art');
    if (!box) return;
    img.remove();
    box.classList.remove('has-img', 'is-contain');
    box.classList.add('is-ph');
    if (!box.querySelector('.art-layer')) renderArt(box, Number(box.dataset.art) || 1, (box.dataset.inks || 'red,blue').split(','), box.dataset.num);
    box.insertAdjacentHTML('beforeend', `<span class="ph-label mono">${box.dataset.label || 'Image placeholder'}</span>`);
  };

  const photo = (cls = '') => `
    <figure class="portrait ${cls}">
      <img src="${C.photo}" alt="Portrait of ${C.name}" decoding="async">
    </figure>`;

  const footer = () => `
    <footer class="site-footer">
      <div class="foot-big" aria-hidden="true">${C.first}</div>
      <div class="foot-cols">
        <p class="mono">© ${C.year} ${C.name}</p>
        <p class="mono">${C.working}</p>
        <p class="mono" data-clock></p>
        <button class="mono to-top" data-scroll-top data-cursor="link" data-glitch>Back to top<span class="u-line"></span></button>
      </div>
    </footer>`;

  const card = (p, i, lg) => `
    <article class="panel p-card${lg ? ' lg' : ''}">
      <a class="card" href="#p-${p.slug}" data-link data-cursor="img" data-cursor-text="View">
        <div class="card-media">${media({ src: p.image, alt: `${p.title} cover`, seed: i + 1, inks: p.inks, label: `${p.title} · cover 1600×2000`, num: pad2(i + 1) })}</div>
        <div class="card-meta">
          <span class="mono">${pad2(i + 1)}</span>
          <h3 class="card-title">${p.title}</h3>
          <span class="mono type">${p.type} · ${p.year}</span>
        </div>
      </a>
    </article>`;

  function HomeView() {
    const prints = [
      { cap: 'Me, 2026', photo: true },
      { cap: 'Eureka Geeks', src: 'assets/projects/eureka-post.jpg' }, { cap: 'Chao', src: 'assets/projects/chao-detail.jpg' }, { cap: 'Say it with a Pin', src: 'assets/projects/pin-creative-crew.jpg' }, { cap: 'Chill Pills', src: 'assets/projects/pin-chill-pills.jpg' }, { cap: 'FirstJob', src: 'assets/projects/firstjob-banner.jpg' }
    ].map((pr, i) => {
      const pos = [[5, 10], [22, 44], [41, 8], [57, 42], [72, 12], [85, 46]][i];
      const inks = [['red', 'yell'], ['blue', 'grn'], ['yell', 'red'], ['grn', 'blue'], ['red', 'blue'], ['blue', 'yell']][i];
      const inner = pr.photo
        ? `<div class="art has-img"><img src="${C.photo}" alt="${C.name}" draggable="false"></div>`
        : media({ src: pr.src || '', alt: pr.cap, seed: 20 + i, inks, label: 'Add photo', parallax: false });
      return `<figure class="print" style="left:${pos[0]}%;top:${pos[1]}%">${inner}<figcaption class="mono">${pr.cap}</figcaption></figure>`;
    }).join('');
    return {
      horizontal: true,
      el: html(`
      <div class="view view-home"><div class="wrapper"><div class="track">
        <section class="panel p-hero">
          <div class="hero-top">
            <p class="mono eyebrow">(Portfolio — ${C.year})</p>
            <p class="mono hero-avail"><span class="dot"></span>${C.availability}</p>
          </div>
          <div class="hero-main">
            <h1 class="hero-name" aria-label="${C.name}">
              <span class="hn-line" data-split>${C.first}</span>
              <span class="hn-line hn-accent" data-split>${C.last}</span>
            </h1>
            ${photo('hero-photo')}
          </div>
          <div class="hero-bottom">
            <p class="hero-role">${C.role}, ${C.experience}. Building <span class="serif">smart</span> digital experiences.</p>
            <p class="mono scroll-hint">${C.working} · Scroll <span class="arrow">→</span></p>
          </div>
        </section>

        <section class="panel p-intro">
          <p class="mono eyebrow">About me</p>
          <h2 class="statement" data-reveal>I turn ideas into fast, polished products people can <span data-rotate>feel</span>.</h2>
          <div class="intro-cols">
            ${C.summary.map((s) => `<p data-reveal="fade">${s}</p>`).join('')}
          </div>
          <a class="pill intro-cta" href="#about" data-link data-cursor="link" data-glitch>Experience & skills<span class="u-line"></span></a>
          <div class="intro-art">${media({ src: 'assets/projects/chao-oversized.jpg', alt: 'Chao, a luxury e-commerce store built by Shubham', seed: 3, inks: ['blue', 'yell'], label: 'Image placeholder · 1200×1500', parallax: false })}</div>
        </section>

        <section class="panel p-works-head">
          <p class="mono eyebrow">Selected work (${pad2(C.projects.length)})</p>
          <h2 class="works-title">Selected <span class="serif">work</span></h2>
          <p class="works-note">E-commerce, AI automation and MERN apps from 2626 Creative Studio, Eureka Geeks and my own builds. Scroll, drag or use the arrow keys.</p>
        </section>

        ${C.projects.map((p, i) => card(p, i)).join('')}

        <section class="panel p-play">
          <div class="play-head">
            <p class="mono eyebrow">Playground</p>
            <p class="mono eyebrow">${FINE ? 'Drag and throw the prints' : 'Photos from the desk'}</p>
          </div>
          <div class="play-area">${prints}</div>
        </section>

        <section class="panel p-outro on-dark">
          <p class="mono eyebrow">Let’s build together</p>
          <h2 class="outro-title">Let’s <span class="serif">talk</span></h2>
          <div class="outro-row">
            <a class="outro-mail" href="#contact" data-link data-cursor="link" data-glitch>${C.email}<span class="u-line"></span></a>
            <div class="outro-foot">
              <p class="mono">© ${C.year} ${C.name}</p>
              <a class="mono" href="${C.github}" target="_blank" rel="noopener" data-cursor="link" data-glitch>GitHub<span class="u-line"></span></a>
              <a class="mono" href="${C.linkedin}" target="_blank" rel="noopener" data-cursor="link" data-glitch>LinkedIn<span class="u-line"></span></a>
              <p class="mono" data-clock></p>
            </div>
          </div>
        </section>
      </div></div></div>`)
    };
  }

  function WorkView() {
    return {
      horizontal: true,
      el: html(`
      <div class="view view-work"><div class="wrapper"><div class="track">
        <section class="panel p-works-head">
          <p class="mono eyebrow">Index (${pad2(C.projects.length)})</p>
          <h1 class="works-title" data-split>Work</h1>
          <p class="works-note">Stores, automation and web apps, 2023 to today.</p>
        </section>
        ${C.projects.map((p, i) => card(p, i, true)).join('')}
        <section class="panel p-index">
          <p class="mono eyebrow">All projects</p>
          <div class="table-scroll">
            <table class="index-table">
              <thead><tr><th class="mono">Project</th><th class="mono">Type</th><th class="mono">For</th><th class="mono">Year</th></tr></thead>
              <tbody>${C.projects.map((p) => `<tr><td><a href="#p-${p.slug}" data-link data-cursor="link">${p.title}</a></td><td class="mono">${p.type}</td><td class="mono">${p.at}</td><td class="mono">${p.year}</td></tr>`).join('')}</tbody>
            </table>
          </div>
          <a class="pill" href="#contact" data-link data-cursor="link" data-glitch>Start a project<span class="u-line"></span></a>
        </section>
      </div></div></div>`)
    };
  }

  function ProjectView(p) {
    const i = C.projects.indexOf(p);
    const next = C.projects[(i + 1) % C.projects.length];
    const g = p.gallery || ['', ''];
    return {
      horizontal: false,
      el: html(`
      <div class="view view-project"><div class="wrapper"><div class="track">
        <section class="panel proj-hero">
          <p class="mono"><a href="#work" data-link data-cursor="link" data-glitch>← All work<span class="u-line"></span></a></p>
          <h1 class="proj-title" data-split>${p.title}</h1>
          <dl class="proj-meta">
            <div><dt class="mono">Type</dt><dd>${p.type}</dd></div>
            <div><dt class="mono">Year</dt><dd>${p.year}</dd></div>
            <div><dt class="mono">For</dt><dd>${p.at}</dd></div>
            <div><dt class="mono">Stack</dt><dd>${p.stack}</dd></div>
          </dl>
          ${p.link ? `<a class="pill" href="${p.link}" target="_blank" rel="noopener" data-cursor="link" data-glitch>Visit live site ↗<span class="u-line"></span></a>` : ''}
        </section>
        <section class="panel"><div class="frame wide">${media({ src: p.wide || p.image, alt: `${p.title}`, seed: i + 1, inks: p.inks, label: `${p.title} · hero screenshot 1920×960` })}</div></section>
        <section class="panel proj-stats">
          ${p.stats.map(([n, l]) => `<div class="stat"><span class="stat-n">${n}</span><span class="mono">${l}</span></div>`).join('')}
        </section>
        <section class="panel proj-text">
          <div><h2 class="mono">The brief</h2><p data-reveal="fade">${p.brief}</p></div>
          <div><h2 class="mono">What I built</h2><p data-reveal="fade">${p.built}</p></div>
        </section>
        <section class="panel proj-pair">
          <div class="frame tall">${media({ src: g[0], alt: `${p.title} detail`, seed: i + 11, inks: [...p.inks].reverse(), label: 'Screenshot · desktop 1200×1500', fit: /logo/.test(g[0]) ? 'contain' : 'cover' })}</div>
          <div class="frame tall">${media({ src: g[1], alt: `${p.title} mobile`, seed: i + 31, inks: p.inks, label: 'Screenshot · mobile 1200×1500' })}</div>
        </section>
        <section class="panel">
          <a class="next-proj" href="#p-${next.slug}" data-link data-cursor="title" data-cursor-text="Next">
            <span class="mono eyebrow">Next project</span>
            <span class="next-title">${next.title}</span>
          </a>
        </section>
        ${footer()}
      </div></div></div>`)
    };
  }

  function AboutView() {
    const tickerRow = C.tools.map((t) => `<span>${t}</span>`).join('');
    return {
      horizontal: false,
      el: html(`
      <div class="view view-about"><div class="wrapper"><div class="track">
        <section class="panel about-hero">
          <p class="mono eyebrow">About — ${C.name}</p>
          <div class="about-head">
            <h1 class="about-title" data-reveal>I’m Shubham, a full stack developer who builds <em class="serif">smart</em> digital experiences.</h1>
            ${photo('about-photo')}
          </div>
          <div class="about-lede">
            ${C.summary.map((s) => `<p data-reveal="fade">${s}</p>`).join('')}
          </div>
        </section>

        <section class="panel about-services">
          <h2 class="mono eyebrow">What I do</h2>
          <ul class="services">${C.services.map(([n, d]) => `<li><span class="svc-name">${n}</span><span class="svc-desc">${d}</span></li>`).join('')}</ul>
        </section>

        <section class="panel about-exp">
          <h2 class="mono eyebrow">Experience</h2>
          <ol class="exp-list">${C.experienceList.map((x) => `
            <li class="exp">
              <p class="mono exp-dates">${x.dates}</p>
              <div>
                <h3 class="exp-co">${x.company}</h3>
                <p class="mono exp-role">${x.role} · ${x.place}</p>
              </div>
              <ul class="exp-points">${x.points.map((pt) => `<li>${pt}</li>`).join('')}</ul>
            </li>`).join('')}
          </ol>
        </section>

        <section class="panel about-skills">
          <h2 class="mono eyebrow">Skills</h2>
          <dl class="skills">${C.skills.map(([k, v]) => `<div class="skill"><dt class="mono">${k}</dt><dd>${v}</dd></div>`).join('')}</dl>
        </section>

        <section class="panel about-edu">
          <h2 class="mono eyebrow">Education & training</h2>
          <div class="edu-grid">${C.education.map((e) => `<div class="edu"><h3>${e.title}</h3><p>${e.org}</p><p class="mono">${e.meta}</p></div>`).join('')}</div>
        </section>

        <section class="panel about-toolkit on-dark">
          <p class="mono eyebrow">Toolkit</p>
          <h2 class="toolkit-title">Built with</h2>
          <div class="ticker" aria-label="${C.tools.join(', ')}"><div class="ticker-track" aria-hidden="true">${tickerRow}${tickerRow}</div></div>
        </section>
        ${footer()}
      </div></div></div>`)
    };
  }

  function ContactView() {
    return {
      horizontal: false,
      el: html(`
      <div class="view view-contact"><div class="wrapper"><div class="track">
        <section class="panel contact-hero">
          <p class="mono eyebrow">Contact</p>
          <h1 class="contact-title" data-split>Say hello</h1>
          <div>
            <p class="mono eyebrow">Projects, roles and collaborations</p>
            <div class="mail-row">
              <span class="mail" id="mailText">${C.email}</span>
              <button class="pill pill-sm" id="copyMail" type="button" data-cursor="link">Copy email</button>
            </div>
            <p class="mono copy-status" id="copyStatus" aria-live="polite"></p>
          </div>
          <dl class="contact-details">
            <div><dt class="mono">Phone</dt><dd>${C.phone}</dd></div>
            <div><dt class="mono">Based in</dt><dd>${C.based}</dd></div>
            <div><dt class="mono">GitHub</dt><dd><a href="${C.github}" target="_blank" rel="noopener" data-cursor="link" data-glitch>${C.github.replace('https://', '')}<span class="u-line"></span></a></dd></div>
            <div><dt class="mono">Resume</dt><dd><a href="${C.resume}" download="Shubham-Rai-Resume.pdf" target="_blank" rel="noopener" data-cursor="link" data-glitch>Download PDF ↓<span class="u-line"></span></a></dd></div>
            <div><dt class="mono">LinkedIn</dt><dd><a href="${C.linkedin}" target="_blank" rel="noopener" data-cursor="link" data-glitch>${C.linkedin.replace(/^https:\/\/(www\.)?/, '').replace(/\/$/, '')}<span class="u-line"></span></a></dd></div>
          </dl>
        </section>
        ${footer()}
      </div></div></div>`),
      init(el) {
        const btn = $('#copyMail', el), status = $('#copyStatus', el), text = $('#mailText', el);
        const onClick = async () => {
          try { await navigator.clipboard.writeText(C.email); status.textContent = 'Email copied'; }
          catch (e) {
            const r = document.createRange(); r.selectNodeContents(text);
            const s = getSelection(); s.removeAllRanges(); s.addRange(r);
            status.textContent = 'Selected — press Ctrl or Cmd + C to copy';
          }
        };
        btn.addEventListener('click', onClick);
        return () => btn.removeEventListener('click', onClick);
      }
    };
  }

  function NotFoundView() {
    const row = '<span>Page not found</span><span>Error 404</span><span>Off the press</span>';
    return {
      horizontal: false,
      el: html(`
      <div class="view view-404"><div class="wrapper"><div class="track">
        <section class="panel p-404">
          <div class="riso" role="img" aria-label="404"><span class="r-y">404</span><span class="r-r" aria-hidden="true">404</span><span class="r-b" aria-hidden="true">404</span></div>
          <p class="nf-text">This page went off the press.</p>
          <a class="pill" href="#home" data-link data-cursor="link" data-glitch>Back to home<span class="u-line"></span></a>
          <div class="ticker" aria-hidden="true"><div class="ticker-track">${row}${row}${row}${row}</div></div>
        </section>
      </div></div></div>`)
    };
  }

  /* -------------------------------------------------------------------
     Router (hash) + SVG path transition
     ------------------------------------------------------------------- */
  const ROUTES = {
    home: { name: 'Home', title: `${C.name} — ${C.role}`, view: HomeView },
    work: { name: 'Work', title: `Work — ${C.name}`, view: WorkView },
    about: { name: 'About', title: `About — ${C.name}`, view: AboutView },
    contact: { name: 'Contact', title: `Contact — ${C.name}`, view: ContactView }
  };
  function resolve(hash) {
    const key = (hash || '').replace(/^#/, '') || 'home';
    if (ROUTES[key]) return { key, ...ROUTES[key] };
    if (key.startsWith('p-')) {
      const p = C.projects.find((x) => x.slug === key.slice(2));
      if (p) return { key, name: p.title, title: `${p.title} — ${C.name}`, view: () => ProjectView(p) };
    }
    return { key: '404', name: 'Lost', title: `Not found — ${C.name}`, view: NotFoundView };
  }

  const PATHS = {
    L: { start: 'M 0 100 V 100 Q 50 100 100 100 V 100 z', curve: 'M 0 100 V 50 Q 50 0 100 50 V 100 z', end: 'M 0 100 V 0 Q 50 0 100 0 V 100 z', hold: 'M 0 100 V 0 Q 50 3 100 0 V 100 z' },
    P: { start: 'M 0 0 V 100 Q 50 100 100 100 V 0 z', curve: 'M 0 0 V 50 Q 50 100 100 50 V 0 z', end: 'M 0 0 V 0 Q 50 0 100 0 V 0 z' }
  };
  const Transition = {
    el: $('#transition'), path: $('#tPath'), label: $('#tLabel'), rule: $('#tRule'), chars: [],
    cover(name) {
      this.el.classList.add('is-active');
      this.label.textContent = name;
      if (!ANIM) { this.path.setAttribute('d', PATHS.L.end); return Promise.resolve(); }
      this.chars = splitChars(this.label);
      gsap.set(this.chars, { yPercent: 110 });
      gsap.set(this.rule, { scaleX: 0, transformOrigin: 'left' });
      return new Promise((res) => {
        const tl = gsap.timeline({ onComplete: res });
        tl.set(this.path, { attr: { d: PATHS.L.start } })
          .to(this.path, { duration: .7, ease: 'power4.in', attr: { d: PATHS.L.curve } })
          .to(this.path, { duration: .3, ease: 'power2.out', attr: { d: PATHS.L.end } })
          .to(this.chars, { yPercent: 0, duration: .6, ease: 'power3.out', stagger: .03 }, .8)
          .to(this.rule, { scaleX: 1, duration: .5, ease: 'power2.inOut' }, .9)
          .to(this.path, { duration: .5, ease: 'sine.inOut', attr: { d: PATHS.L.hold } }, 1.0);
      });
    },
    reveal() {
      if (!ANIM) { this.el.classList.remove('is-active'); this.path.setAttribute('d', PATHS.L.start); return Promise.resolve(); }
      return new Promise((res) => {
        const tl = gsap.timeline({ onComplete: () => { this.el.classList.remove('is-active'); res(); } });
        tl.to(this.chars, { yPercent: -110, duration: .4, ease: 'power3.in', stagger: .02 }, 0)
          .to(this.rule, { scaleX: 0, transformOrigin: 'right', duration: .35, ease: 'power2.in' }, 0)
          .set(this.path, { attr: { d: PATHS.P.start } }, .3)
          .to(this.path, { duration: .25, ease: 'sine.in', attr: { d: PATHS.P.curve } }, .3)
          .to(this.path, { duration: .8, ease: 'power4.out', attr: { d: PATHS.P.end } }, .55);
      });
    }
  };

  const app = $('#app');
  let current = null;
  let busy = false;
  let skipHash = null;

  function mount(route) {
    if (current) current.destroy();
    app.innerHTML = '';
    const view = route.view();
    app.appendChild(view.el);
    const horizontal = view.horizontal && isHorizontal();
    const ctl = initView(view, horizontal);
    current = { key: route.key, horizontal: view.horizontal, ...ctl };
    document.title = route.title;
    $$('.nav-links a').forEach((a) => {
      const active = route.key === a.dataset.route || (route.key.startsWith('p-') && a.dataset.route === 'work');
      if (active) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
    updateClocks();
    if (cursor.setState) cursor.setState('default', '');
  }

  async function navigate(hash, push = true) {
    const route = resolve(hash);
    if (busy || (current && route.key === current.key)) return;
    busy = true;
    await Transition.cover(route.name);
    if (push) { skipHash = route.key; location.hash = route.key; }
    mount(route);
    await wait(60);
    current.enter(.35);
    await Transition.reveal();
    busy = false;
  }

  addEventListener('hashchange', () => {
    const key = location.hash.slice(1) || 'home';
    if (key === skipHash) { skipHash = null; return; }
    navigate(location.hash, false);
  });

  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[data-link]');
    if (!a || e.metaKey || e.ctrlKey || e.shiftKey) return;
    e.preventDefault();
    closeMenu();
    navigate(a.getAttribute('href'));
  });

  /* -------------------------------------------------------------------
     Global hovers, menu, clock, resize
     ------------------------------------------------------------------- */
  document.addEventListener('mouseover', (e) => {
    const host = e.target.closest('a, button');
    if (!host || host.contains(e.relatedTarget)) return;
    $$('[data-scramble]', host).forEach(scramble);
    if (host.matches('[data-glitch]')) glitch(host);
  });

  const menu = $('#menu'), toggle = $('#menuToggle');
  function openMenu() {
    menu.hidden = false; toggle.setAttribute('aria-expanded', 'true'); toggle.textContent = 'Close';
    if (ANIM) gsap.fromTo($$('.menu-list a', menu), { yPercent: 110 }, { yPercent: 0, duration: .8, ease: 'power3.out', stagger: .06 });
  }
  function closeMenu() {
    if (menu.hidden) return;
    menu.hidden = true; toggle.setAttribute('aria-expanded', 'false'); toggle.textContent = 'Menu';
  }
  toggle.addEventListener('click', () => (menu.hidden ? openMenu() : closeMenu()));
  addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });

  let timeFmt;
  try { timeFmt = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: C.timeZone }); }
  catch (e) { timeFmt = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit' }); }
  function updateClocks() {
    const t = `Delhi ${timeFmt.format(new Date())} IST`;
    $$('[data-clock]').forEach((n) => { n.textContent = t; });
  }
  setInterval(updateClocks, 20000);

  let lastMode = isHorizontal();
  let rz;
  addEventListener('resize', () => {
    clearTimeout(rz);
    rz = setTimeout(() => {
      const mode = isHorizontal();
      if (mode !== lastMode && current && current.horizontal && !busy) {
        lastMode = mode;
        mount(resolve('#' + current.key));
        current.enter(0);
      }
      lastMode = mode;
    }, 250);
  });

  /* -------------------------------------------------------------------
     Preloader: word sequence → identity lockup → curtain up
     ------------------------------------------------------------------- */
  async function runPreloader(onReveal) {
    const pl = $('#preloader');
    let seen = false;
    try { seen = sessionStorage.getItem('w2626-seen') === '1'; sessionStorage.setItem('w2626-seen', '1'); } catch (e) { /* storage blocked */ }
    if (!ANIM || seen) { pl.remove(); onReveal(0); return; }

    const stage = $('#pl-word-stage', pl), word = $('.pl-word', pl), identity = $('#pl-identity', pl);
    const nameEl = $('[data-pl-name]', pl), rule = $('.pl-id-rule', pl), sub = $('[data-pl-sub]', pl);
    nameEl.textContent = C.name;
    sub.textContent = `${C.role} · ${C.experience} · ${C.year}`;
    const chars = splitChars(nameEl);
    gsap.set(chars, { yPercent: 110, opacity: 0 });
    gsap.set(rule, { scaleX: 0, opacity: 0 });
    gsap.set(sub, { yPercent: 110, opacity: 0 });

    if (document.fonts && document.fonts.ready) { try { await document.fonts.ready; } catch (e) { /* ignore */ } }
    await wait(180);

    const WORDS = C.preloaderWords;
    for (let i = 0; i < WORDS.length; i++) {
      const w = WORDS[i]; const isLast = i === WORDS.length - 1;
      word.textContent = w.text;
      word.classList.toggle('pl-word--accent', !!w.accent);
      if (isLast) {
        gsap.set(word, { yPercent: 105, scale: .88 });
        await gsap.to(word, { yPercent: 0, scale: 1, duration: .52, ease: 'power4.out' });
        await wait(340);
      } else {
        gsap.set(word, { yPercent: 105, scale: 1 });
        await gsap.to(word, { yPercent: 0, duration: .42, ease: 'power3.out' });
        await wait(260);
        await gsap.to(word, { yPercent: -105, duration: .28, ease: 'power3.in' });
        await wait(60);
      }
    }

    const h = gsap.timeline();
    h.to(stage, { opacity: 0, duration: .45, ease: 'power2.in' }, 0)
      .set(identity, { opacity: 1 }, 0)
      .to(chars, { yPercent: 0, opacity: 1, duration: .65, stagger: .055, ease: 'power3.out' }, .1)
      .to(rule, { scaleX: 1, opacity: 1, duration: .55, ease: 'power2.inOut' }, .55)
      .to(sub, { yPercent: 0, opacity: 1, duration: .45, ease: 'power2.out' }, .75);
    await h;
    await wait(650);

    const exit = gsap.timeline({ onComplete: () => pl.remove() });
    exit.to(identity, { yPercent: -40, opacity: 0, duration: .9, ease: 'power3.in' }, 0)
      .to(pl, { yPercent: -100, duration: 1.05, ease: 'power4.inOut' }, .15)
      .call(() => onReveal(0), null, .55);
  }

  /* -------------------------------------------------------------------
     Boot
     ------------------------------------------------------------------- */
  function boot() {
    $$('[data-logo]').forEach((n) => { n.textContent = C.logo; });
    $$('[data-resume]').forEach((a) => { a.href = C.resume; });
    let fluid = null;
    if (FINE && !REDUCED) {
      const canvas = $('#fluid');
      try { fluid = createFluid(canvas); if (fluid) canvas.classList.add('is-on'); } catch (e) { fluid = null; }
    }
    if (FINE) setupCursor(fluid);
    updateClocks();
    mount(resolve(location.hash));
    runPreloader((delay) => current.enter(delay));
  }

  boot();
})();
