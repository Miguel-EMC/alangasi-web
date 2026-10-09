'use strict';

const topics = {
  "vias": {
    "title": "Vías y conectividad",
    "category": "Infraestructura, movilidad y servicios básicos",
    "description": "Accesos seguros entre barrios, mejora de calles y caminos vecinales, movilidad y atención a la falta de agua en sectores vulnerables.",
    "objective": "Identificar las necesidades de vialidad y servicios básicos para coordinar intervenciones técnicamente priorizadas con las entidades competentes.",
    "actions": [
      "Elaborar un inventario de vías, caminos vecinales y zonas con dificultades de acceso o transporte.",
      "Gestionar ante el Municipio de Quito el bacheo, adoquinado y mantenimiento de vías secundarias y caminos vecinales.",
      "Impulsar señalización horizontal y vertical, reductores de velocidad y medidas de seguridad en zonas escolares.",
      "Coordinar mesas con operadoras para mejorar frecuencias y gestionar rutas de transporte que respondan al crecimiento poblacional.",
      "Promover alumbrado LED en calles, parques, paradas y accesos a los barrios.",
      "Fiscalizar el plan de mejoras de EPMAPS y gestionar abastecimiento emergente de agua y sistemas comunitarios de almacenamiento para sectores vulnerables."
    ],
    "milestones": [
      {
        "when": "Año 1",
        "text": "Diagnóstico vial y plan emergente de bacheo y mantenimiento preventivo; identificación de zonas sin cobertura de transporte."
      },
      {
        "when": "Año 4",
        "text": "Consolidación del circuito vial interno y optimización de rutas alimentadoras; auditoría vial final."
      }
    ],
    "method": "Gestión y fiscalización con EPMAPS, la Secretaría de Movilidad, el Municipio de Quito y operadores de transporte. Varias obras dependen de coordinación y presupuesto interinstitucional.",
    "source": "Plan de Trabajo Alangasí 2027–2031 · páginas 2, 4, 5 y 6 del PDF."
  },
  "educacion": {
    "title": "Educación y juventud",
    "category": "Formación, participación y oportunidades",
    "description": "Nivelación académica, preparación para el ingreso a la universidad, programas recreativos y espacios de liderazgo juvenil.",
    "objective": "Promover oportunidades de aprendizaje, desarrollo integral y participación activa de niñas, niños y jóvenes de Alangasí.",
    "actions": [
      "Gestionar talleres gratuitos de nivelación académica y preparación para el ingreso a la educación superior mediante convenios con universidades públicas.",
      "Crear la Brigada Juvenil de Alangasí para apoyar mingas, actividades comunitarias y proyectos de liderazgo.",
      "Impulsar programas culturales, deportivos y recreativos permanentes.",
      "Incorporar refuerzo escolar al centro parroquial de cuidados previsto en el plan.",
      "Desarrollar procesos de educación ambiental y sensibilización sobre reciclaje, cuidado del agua y quebradas.",
      "Gestionar alianzas con universidades para talleres de transferencia tecnológica y marketing digital."
    ],
    "milestones": [
      {
        "when": "Año 2",
        "text": "Se proyecta la apertura del primer Centro Parroquial de Cuidados, Salud Comunitaria y Refuerzo Escolar."
      },
      {
        "when": "Año 3",
        "text": "El cronograma prevé alianzas con universidades para talleres de transferencia tecnológica y marketing digital."
      }
    ],
    "method": "Convenios con universidades públicas, colaboración con instituciones educativas y participación de organizaciones comunitarias.",
    "source": "Plan de Trabajo Alangasí 2027–2031 · páginas 3, 5 y 6 del PDF."
  },
  "bienestar": {
    "title": "Bienestar social e inclusión",
    "category": "Salud, convivencia, espacios públicos y seguridad",
    "description": "Servicios comunitarios, salud preventiva, espacios seguros y accesibles y atención a grupos de cuidado prioritario.",
    "objective": "Fortalecer la infraestructura social y la atención comunitaria para promover inclusión, deporte, cultura y prevención de la violencia.",
    "actions": [
      "Gestionar brigadas médicas gratuitas y campañas de salud preventiva.",
      "Adecuar y mejorar casas barriales, centros comunales, parques y canchas de uso comunitario.",
      "Fortalecer programas para niñez, jóvenes, mujeres, personas mayores y personas con discapacidad.",
      "Promover actividades deportivas, culturales y recreativas permanentes.",
      "Desplegar brigadas comunitarias itinerantes de prevención de adicciones, salud mental y atención al adulto mayor.",
      "Gestionar iluminación estratégica y coordinar redes de alerta barrial y botones de pánico con la Policía Nacional.",
      "Organizar campañas de prevención de estafas, robos y violencia."
    ],
    "milestones": [
      {
        "when": "Año 2",
        "text": "Apertura prevista del primer Centro Parroquial de Cuidados, Salud Comunitaria y Refuerzo Escolar."
      },
      {
        "when": "Año 3",
        "text": "Intervención, iluminación técnica y equipamiento de ligas barriales y parques de la parroquia."
      }
    ],
    "method": "Uso y adecuación de infraestructura pública; articulación con servicios de salud, Policía Nacional, organizaciones barriales y autoridades competentes.",
    "source": "Plan de Trabajo Alangasí 2027–2031 · páginas 3, 4, 5 y 6 del PDF."
  },
  "entorno": {
    "title": "Un entorno más sostenible",
    "category": "Biodiversidad, agua y gestión de residuos",
    "description": "Recuperación de quebradas, reforestación con especies nativas y participación ciudadana en limpieza y manejo de residuos.",
    "objective": "Proteger fuentes hídricas y espacios ecológicos, recuperar zonas deterioradas y promover hábitos comunitarios de cuidado ambiental.",
    "actions": [
      "Desarrollar programas permanentes de reforestación con especies nativas.",
      "Recuperar y proteger quebradas, microcuencas y espacios ecológicos de la parroquia.",
      "Organizar jornadas de limpieza y mingas ambientales.",
      "Impulsar campañas de reciclaje, separación de residuos y educación ambiental.",
      "Gestionar proyectos de conservación de fuentes de agua y reducción de contaminación.",
      "Promover composteras comunitarias con capacitación en economía circular y reciclaje en la fuente."
    ],
    "milestones": [
      {
        "when": "Año 1",
        "text": "Intervención, delimitación comunitaria y restauración del primer tramo crítico de microcuencas o quebradas."
      },
      {
        "when": "Año 2",
        "text": "Meta del plan: que una quinta parte de los comercios y viviendas separe activamente residuos orgánicos."
      },
      {
        "when": "Año 3",
        "text": "Proyectos de reforestación y diseño de rutas para turismo rural ecológico autosostenible."
      }
    ],
    "method": "Mingas y participación de barrios, instituciones educativas y actores ambientales para conservación y gestión técnica.",
    "source": "Plan de Trabajo Alangasí 2027–2031 · páginas 2, 3, 5 y 6 del PDF."
  },
  "economia": {
    "title": "Economía, emprendimiento y turismo",
    "category": "Fomento productivo y comercial",
    "description": "Capacitación, ferias de emprendimiento, promoción turística y articulación para apoyar a los productores de Alangasí.",
    "objective": "Fortalecer agricultura, artesanía, comercio, servicios y turismo mediante acompañamiento técnico y vínculos institucionales.",
    "actions": [
      "Gestionar capacitación, asistencia técnica y educación financiera para emprendimientos locales.",
      "Promover ferias y espacios permanentes de comercialización de productos locales.",
      "Impulsar el turismo comunitario, religioso, gastronómico y cultural de la parroquia.",
      "Promover rutas que integren el patrimonio, las tradiciones y los atractivos naturales de Alangasí.",
      "Gestionar alianzas públicas, privadas y académicas para agricultores, artesanos, comerciantes y emprendedores.",
      "Vincular a microproductores con redes de innovación productiva y formación en marketing digital.",
      "Implementar una plataforma digital parroquial para promover e intercambiar productos locales."
    ],
    "milestones": [
      {
        "when": "Año 3",
        "text": "Meta del plan: vincular a 50 microproductores, artesanos y agricultores a redes de innovación productiva."
      },
      {
        "when": "Año 4",
        "text": "Implementar y estabilizar la plataforma digital comercial; evaluar el cumplimiento del plan plurianual."
      }
    ],
    "method": "Alianzas con instituciones públicas, privadas y académicas, capacitación continua y promoción productiva y turística comunitaria.",
    "source": "Plan de Trabajo Alangasí 2027–2031 · páginas 3, 4 y 6 del PDF."
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
const proposalActions = document.getElementById('modal-topic-actions');
const proposalTimeline = document.getElementById('modal-topic-timeline');

function renderPlanList(target, entries, timeline = false) {
  target.replaceChildren();
  entries.forEach((entry, index) => {
    const li = document.createElement('li');
    if (timeline) {
      const label = document.createElement('strong');
      label.textContent = entry.when;
      const description = document.createElement('p');
      description.textContent = entry.text;
      li.append(label, description);
    } else {
      const number = document.createElement('span');
      number.className = 'proposal-action-number';
      number.setAttribute('aria-hidden', 'true');
      number.textContent = String(index + 1).padStart(2, '0');
      const description = document.createElement('span');
      description.textContent = entry;
      li.append(number, description);
    }
    target.appendChild(li);
  });
}

document.querySelectorAll('[data-topic]').forEach(button => button.addEventListener('click', () => {
  const topic = topics[button.dataset.topic];
  if (!topic || !proposalDialog) return;
  document.getElementById('modal-topic-title').textContent = topic.title;
  document.getElementById('modal-topic-category').textContent = topic.category;
  document.getElementById('modal-topic-description').textContent = topic.description;
  document.getElementById('modal-topic-objective').textContent = topic.objective;
  document.getElementById('modal-topic-method').textContent = topic.method;
  document.getElementById('modal-topic-source').textContent = topic.source;
  renderPlanList(proposalActions, topic.actions);
  renderPlanList(proposalTimeline, topic.milestones, true);
  proposalDialog.scrollTop = 0;
  proposalDialog.showModal();
}));


/* Atractivos: fotos y detalles siempre se abren dentro de la web mediante <dialog>. */
const tourismPlaces = {
  "ilalo": {
    "name": "Mirador del Ilaló",
    "category": "Naturaleza",
    "description": "La Cruz del Mirador del Tingo es presentada por el GAD como un punto desde el que se contemplan el valle y varias montañas y volcanes del entorno de Quito.",
    "highlights": [
      "Panorámicas del Valle de Los Chillos",
      "La Cruz del Mirador",
      "Entorno natural del volcán Ilaló"
    ],
    "image": "assets/turismo-ilalo.webp"
  },
  "parque": {
    "name": "Parque Central de Alangasí",
    "category": "Cultura",
    "description": "El GAD señala que el parque fue declarado «Museo Iconográfico» en 2009. Sus esculturas de madera evocan personajes y costumbres como el Sacha Runa, el Diablo Huma y el Pingullero.",
    "highlights": [
      "Museo Iconográfico",
      "Esculturas y personajes tradicionales",
      "Identidad cultural parroquial"
    ],
    "image": "assets/turismo-parque.webp"
  },
  "tingo": {
    "name": "Aguas termales de El Tingo",
    "category": "Descanso",
    "description": "El GAD presenta al Balneario Municipal El Tingo como uno de los atractivos de la parroquia, con piscinas termales y un entorno vinculado a puestos de gastronomía tradicional.",
    "highlights": [
      "Piscinas termales",
      "Espacios de esparcimiento",
      "Comida típica en los alrededores"
    ],
    "image": "assets/turismo-tingo.webp"
  },
  "iglesia": {
    "name": "Iglesia Santo Tomás de Aquino",
    "category": "Patrimonio",
    "description": "La iglesia forma parte de los atractivos patrimoniales que difunde el GAD. Su ficha recupera la historia eclesiástica de la parroquia, establecida en 1832.",
    "highlights": [
      "Arquitectura religiosa",
      "Historia parroquial",
      "Patrimonio local"
    ],
    "image": "assets/turismo-iglesia.webp"
  },
  "centro": {
    "name": "Centro Cultural de Alangasí",
    "category": "Aprendizaje",
    "description": "El GAD describe este espacio como un infocentro orientado a la formación en computación e internet para personas de diferentes edades. La oferta vigente debe confirmarse con la institución.",
    "highlights": [
      "Formación digital según el GAD",
      "Espacio de acceso a conocimientos",
      "Aprendizaje para distintas edades"
    ],
    "image": "assets/turismo-centro.webp"
  },
  "schoenstatt": {
    "name": "Santuario Schoenstatt",
    "category": "Naturaleza y fe",
    "description": "Ubicado en un entorno elevado, el santuario aparece en la guía del GAD por sus miradores, áreas verdes, senderos cortos y una pequeña laguna.",
    "highlights": [
      "Espacios verdes y senderos",
      "Miradores naturales",
      "Paisaje y recogimiento"
    ],
    "image": "assets/turismo-schoenstatt.webp"
  }
};
const tourismDialog = document.getElementById('tourism-dialog');
const tourismImage = document.getElementById('tourism-dialog-image');
const tourismDialogTitle = document.getElementById('tourism-dialog-title');
const tourismDialogCategory = document.getElementById('tourism-dialog-category');
const tourismDialogDescription = document.getElementById('tourism-dialog-description');
const tourismDialogHighlights = document.getElementById('tourism-dialog-highlights');

document.querySelectorAll('[data-tourism-id]').forEach(button => button.addEventListener('click', () => {
  const place = tourismPlaces[button.dataset.tourismId];
  if (!place || !tourismDialog) return;
  tourismDialogTitle.textContent = place.name;
  tourismDialogCategory.textContent = place.category;
  tourismDialogDescription.textContent = place.description;
  tourismImage.src = place.image;
  tourismImage.alt = 'Fotografía de ' + place.name + ', facilitada por el GAD parroquial de Alangasí';
  tourismDialogHighlights.replaceChildren();
  place.highlights.forEach(highlight => {
    const li = document.createElement('li');
    li.textContent = highlight;
    tourismDialogHighlights.appendChild(li);
  });
  tourismDialog.scrollTop = 0;
  tourismDialog.showModal();
}));

document.querySelectorAll('[data-tourism-filter]').forEach(button => button.addEventListener('click', () => {
  const category = button.dataset.tourismFilter;
  document.querySelectorAll('[data-tourism-filter]').forEach(filter => {
    const active = filter === button;
    filter.classList.toggle('is-active', active);
    filter.setAttribute('aria-pressed', String(active));
  });
  document.querySelectorAll('.tourism-card').forEach(card => {
    card.hidden = category !== 'todos' && card.dataset.tourismCategory !== category;
  });
}));



/* Diálogo de mapa de barrios sin abrir pestañas externas. */
const neighborhoodDialog = document.getElementById('neighborhood-map-dialog');
const neighborhoodZoom = document.getElementById('neighborhood-zoom');
const neighborhoodScroll = document.getElementById('neighborhood-modal-scroll');
document.querySelectorAll('[data-open-neighborhood-map]').forEach(button => button.addEventListener('click', () => {
  if (!neighborhoodDialog) return;
  neighborhoodScroll?.classList.remove('is-zoomed');
  if (neighborhoodZoom) {
    neighborhoodZoom.setAttribute('aria-pressed', 'false');
    neighborhoodZoom.innerHTML = 'Ampliar detalles <svg><use href="#i-camera"/></svg>';
  }
  neighborhoodDialog.showModal();
}));
neighborhoodZoom?.addEventListener('click', () => {
  if (!neighborhoodScroll) return;
  const zoomed = neighborhoodScroll.classList.toggle('is-zoomed');
  neighborhoodZoom.setAttribute('aria-pressed', String(zoomed));
  neighborhoodZoom.innerHTML = zoomed
    ? 'Volver al tamaño original <svg><use href="#i-camera"/></svg>'
    : 'Ampliar detalles <svg><use href="#i-camera"/></svg>';
});

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
const submitButton = form?.querySelector('button[type="submit"]');
const submitLabel = document.getElementById('suggestion-submit-label');
const setupNote = document.getElementById('suggestion-setup-note');
const keyInput = document.getElementById('web3forms-access-key');

function isWeb3FormsConfigured() {
  const value = keyInput?.value.trim() || '';
  return value.length >= 20 && value !== 'PENDIENTE_DE_ACCESS_KEY';
}

if (form && submitButton) {
  const configured = isWeb3FormsConfigured();
  submitButton.disabled = !configured;
  if (submitLabel) submitLabel.textContent = configured ? 'Enviar sugerencia' : 'Buzón en preparación';
  if (setupNote) {
    setupNote.textContent = configured
      ? 'Las sugerencias se envían mediante Web3Forms al buzón receptor. No solicitamos datos de identificación.'
      : 'Próximamente: estamos habilitando la recepción mediante Web3Forms.';
  }
}

if (form) form.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (!isWeb3FormsConfigured() || !submitButton) {
    statusElement.textContent = 'El buzón todavía no está habilitado. Inténtalo más adelante.';
    return;
  }
  if (!form.reportValidity()) return;
  submitButton.disabled = true;
  if (submitLabel) submitLabel.textContent = 'Enviando sugerencia…';
  statusElement.textContent = 'Enviando tu sugerencia…';
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    });
    const data = await response.json();
    if (!response.ok || data.success !== true) throw new Error('Solicitud rechazada');
    form.reset();
    statusElement.textContent = '¡Gracias! Tu sugerencia fue enviada correctamente.';
  } catch (_) {
    statusElement.textContent = 'No se pudo enviar la sugerencia. Revisa tu conexión e inténtalo más tarde.';
  } finally {
    submitButton.disabled = !isWeb3FormsConfigured();
    if (submitLabel) submitLabel.textContent = 'Enviar sugerencia';
  }
});

const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());