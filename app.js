'use strict';

const topics = {
  vias: {
    title: 'Vías y conectividad',
    description: 'Este eje aborda los temas de movilidad, conectividad y accesibilidad en la parroquia. Las medidas concretas, su viabilidad y sus responsables deberán detallarse en el plan de trabajo oficial.'
  },
  educacion: {
    title: 'Educación y juventud',
    description: 'Este eje plantea conversar sobre las oportunidades educativas, culturales y de participación que interesan a la niñez y juventud de Alangasí, dentro del ámbito de competencias de la Junta Parroquial.'
  },
  bienestar: {
    title: 'Bienestar social e inclusión',
    description: 'Este eje reúne inquietudes relacionadas con el tejido comunitario, la inclusión, los espacios de encuentro y la atención a las distintas necesidades de la parroquia.'
  },
  entorno: {
    title: 'Un entorno más sostenible',
    description: 'Este eje se orienta al cuidado de espacios públicos, al respeto por el entorno natural y al fortalecimiento de hábitos comunitarios responsables.'
  }
};

const menuButton = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');
function closeMenu() {
  if (!menuButton || !mainNav) return;
  mainNav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Abrir menú');
  menuButton.innerHTML = '<svg><use href="#i-menu"/></svg>';
}
if (menuButton) {
  menuButton.addEventListener('click', () => {
    const opening = !mainNav.classList.contains('open');
    mainNav.classList.toggle('open', opening);
    menuButton.setAttribute('aria-expanded', String(opening));
    menuButton.setAttribute('aria-label', opening ? 'Cerrar menú' : 'Abrir menú');
    menuButton.innerHTML = opening ? '<svg><use href="#i-close"/></svg>' : '<svg><use href="#i-menu"/></svg>';
  });
  mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  document.addEventListener('click', event => {
    if (!mainNav.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
  });
}

const sectionLinks = document.querySelectorAll('.main-nav .nav-link');
const linkedSections = [...sectionLinks].map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
if ('IntersectionObserver' in window && linkedSections.length) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      sectionLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
    });
  }, { rootMargin: '-24% 0px -65% 0px' });
  linkedSections.forEach(section => observer.observe(section));
}

const proposalDialog = document.getElementById('proposal-dialog');
document.querySelectorAll('[data-topic]').forEach(button => button.addEventListener('click', () => {
  const topic = topics[button.dataset.topic];
  if (!topic || !proposalDialog) return;
  document.getElementById('modal-topic-title').textContent = topic.title;
  document.getElementById('modal-topic-description').textContent = topic.description;
  proposalDialog.showModal();
}));

const galleryDialog = document.getElementById('gallery-dialog');
document.querySelectorAll('.gallery-item').forEach(button => button.addEventListener('click', () => {
  const full = document.getElementById('gallery-full');
  full.src = button.dataset.full;
  full.alt = button.querySelector('img').alt;
  document.getElementById('gallery-caption').textContent = button.dataset.caption;
  document.getElementById('gallery-credit').textContent = button.dataset.credit;
  galleryDialog.showModal();
}));

document.querySelectorAll('[data-close-dialog]').forEach(button => button.addEventListener('click', () => {
  const dialog = button.closest('dialog');
  if (dialog) dialog.close();
}));
document.querySelectorAll('dialog').forEach(dialog => dialog.addEventListener('click', e => {
  if (e.target === dialog) dialog.close();
}));

const form = document.getElementById('contact-form');
const statusElement = document.getElementById('form-status');
const isNetlify = /(^|\.)netlify\.app$/.test(location.hostname) || window.ENABLE_NETLIFY_FORMS === true;
if (form) form.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  if (!isNetlify) {
    statusElement.textContent = 'El formulario está listo visualmente, pero aún no está conectado a un servicio de recepción. Publícalo en Netlify y habilita las notificaciones del formulario.';
    return;
  }
  const btn = form.querySelector('button[type=submit]');
  btn.disabled = true;
  statusElement.textContent = 'Enviando...';
  try {
    const formData = new FormData(form);
    const response = await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams(formData).toString() });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    form.reset();
    statusElement.textContent = 'Tu mensaje fue enviado correctamente. Gracias por escribirnos.';
  } catch (_) {
    statusElement.textContent = 'No se pudo enviar el mensaje. Inténtalo más tarde.';
  } finally {
    btn.disabled = false;
  }
});

const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());