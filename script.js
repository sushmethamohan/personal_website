// Run locally: python3 -m http.server 8000  →  open http://localhost:8000

marked.use({ gfm: true, breaks: true });

const ROUTES = {
  about:        'content/about.md',
  research:     'content/research.md',
  publications: 'content/publications.md',
  cv:           'content/cv.md',
  contact:      'content/contact.md',
};

function setActiveResearchNav() {
  document.querySelectorAll('.nav-link').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#research');
  });
}

function setActiveAboutNav() {
  document.querySelectorAll('.nav-link').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#about');
  });
}

async function loadResearchProject(slug) {
  setActiveResearchNav();
  const main = document.getElementById('main');
  try {
    const res = await fetch(`content/projects/${slug.toLowerCase()}.md`);
    if (!res.ok) throw new Error(res.statusText);
    const md = await res.text();
    main.innerHTML = `<div class="content-wrap page-top">
      <a class="blog-back" href="#research">← All research</a>
      ${marked.parse(md)}
    </div>`;
  } catch {
    main.innerHTML = `<div class="content-wrap page-top">
      <a class="blog-back" href="#research">← All research</a>
      <p style="color:var(--muted)">Project not found.</p>
    </div>`;
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.getElementById('navLinks').classList.remove('open');
}

async function loadAboutSubpage(slug) {
  setActiveAboutNav();
  const main = document.getElementById('main');
  try {
    const res = await fetch(`content/about/${slug.toLowerCase()}.md`);
    if (!res.ok) throw new Error(res.statusText);
    const md = await res.text();
    main.innerHTML = `<div class="content-wrap page-top">
      <a class="blog-back" href="#about">← About Me</a>
      ${marked.parse(md)}
    </div>`;
  } catch {
    main.innerHTML = `<div class="content-wrap page-top">
      <a class="blog-back" href="#about">← About Me</a>
      <p style="color:var(--muted)">Page not found.</p>
    </div>`;
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.getElementById('navLinks').classList.remove('open');
}

const HERO = `
<section class="hero">
  <div class="hero-photo">
    <img src="Sush-profile-pic.png" alt="Sushmetha A Mohan" />
  </div>
  <div class="hero-body">
    <h1 class="hero-name">Sushmetha A Mohan</h1>
    <p class="hero-role">Ph.D. &nbsp;·&nbsp; Neuroscientist &amp; Cancer Biologist</p>
    <p class="hero-loc">📍 Germany </p>
    <div class="hero-btns">
      <a href="mailto:sushmetha94@gmail.com"
         class="btn btn-outline">Email</a>
      <a href="https://linkedin.com/in/sushmetha-a-mohan"
         target="_blank" rel="noopener"
         class="btn btn-outline">LinkedIn</a>
      <a href="#cv" class="btn btn-filled">View CV</a>
    </div>
  </div>
</section>`;

async function loadPage(page) {
  if (!(page in ROUTES)) page = 'about';

  document.querySelectorAll('.nav-link').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + page);
  });

  const main = document.getElementById('main');

  try {
    const res = await fetch(ROUTES[page]);
    if (!res.ok) throw new Error(res.statusText);
    const md = await res.text();
    const html = marked.parse(md);

    main.innerHTML = (page === 'about')
      ? HERO + `<div class="content-wrap">${html}</div>`
      : `<div class="content-wrap page-top">${html}</div>`;

  } catch {
    main.innerHTML = `<div class="content-wrap page-top">
      <p style="color:var(--muted)">Content not yet available.</p>
    </div>`;
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.getElementById('navLinks').classList.remove('open');
}

function route() {
  const hash = (window.location.hash || '#about').replace('#', '');
  if (hash.startsWith('research/')) {
    loadResearchProject(hash.slice(9));
  } else if (hash.startsWith('about/')) {
    loadAboutSubpage(hash.slice(6));
  } else {
    loadPage(hash || 'about');
  }
}

document.getElementById('menuBtn').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});

window.addEventListener('hashchange', route);
document.addEventListener('DOMContentLoaded', route);