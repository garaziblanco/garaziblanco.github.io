/* ==========================================================================
   0. SISTEMA DE TRADUCCIÓN (i18n)
   ========================================================================== */
const diccionario = {
  es: {
    "nav-inicio": "Inicio",
    "nav-portfolio": "Portfolio",
    "nav-cv": "Currículum",
    "nav-contacto": "Contacto",
    "btn-idioma": "EN",
    "btn-abrir-libro": "Abrir Art Book interactivo",
    
    // Index
    "hero-rol": "Concept Artist & Illustrator",
    "sobre-mi-titulo": "SOBRE MÍ",
    "sobre-mi-p1": "Graduada en Diseño y Desarrollo de Videojuegos con enfoque en Concept Art e Ilustración. Combino habilidades artísticas con conocimientos de 3D y programación, lo que me permite crear assets estéticos, optimizados y listos para implementar en el motor.",
    "sobre-mi-p2": "Actualmente curso un Máster en Concept Art en U-tad y colaboro como concept artist e ilustradora en Estudio Duende, participando en el desarrollo visual de diversos proyectos.",
    
    // Curriculum
    "cv-rol": "Concept Artist & Ilustradora",
    "cv-intro": "Graduada en Diseño y Desarrollo de Videojuegos con enfoque en Concept Art e Ilustración. Combino habilidades artísticas con conocimientos de 3D y programación, lo que me permite crear assets estéticos, optimizados y listos para implementar en el motor.",
    "cv-descargar": "Descargar CV en PDF",
    "cv-hab-titulo": "Habilidades",
    "cv-hab-2d": "2D / Ilustración",
    "cv-hab-3d": "3D / Modelado",
    "cv-hab-tech": "Motores y Tech",
    "cv-idiomas-titulo": "Idiomas",
    "cv-id-es": "Español:",
    "cv-id-eu": "Euskera:",
    "cv-id-en": "Inglés:",
    "cv-id-nativo": "Nativo",
    "cv-exp-titulo": "Experiencia y Formación",
    "cv-fecha-presente": "2026 - Presente",
    "cv-duende-rol": "Concept Artist & Ilustradora",
    "cv-duende-desc": "Participación en el desarrollo visual de diversos proyectos del estudio, creación de concept art e ilustraciones.",
    "cv-utad-rol": "Máster en Concept Art",
    "cv-utad-lugar": "Centro Digital U-tad, Madrid",
    "cv-fecha-dragon": "Feb 2026 - Jun 2026",
    "cv-dragon-rol": "Concept Artist & Illustrator (Prácticas)",
    "cv-dragon-desc": "Ilustración de personajes con función promocional. Diseño y creación de cápsulas y banners para la plataforma de venta Steam.",
    "cv-urjc-rol": "Grado en Diseño y Desarrollo de Videojuegos",
    "cv-urjc-lugar": "Universidad Rey Juan Carlos, Madrid",
    "cv-cat-lugar": "Proyecto Indie: Catpuccino (Mango Studio) ↗",
    "cv-cat-desc": "Diseño y creación del personaje principal y props bajo limitaciones técnicas estrictas. Implementación de sprites en Unity y colaboración técnica para asegurar la correcta integración.",

    // Contacto
    "contacto-p1": "Si tienes alguna idea que te gustaría comentar conmigo, puedes escribirme a",
    "contacto-p2": "¡También puedes echarle un vistazo a mis redes sociales!"
  },
  en: {
    "nav-inicio": "Home",
    "nav-portfolio": "Portfolio",
    "nav-cv": "Resume",
    "nav-contacto": "Contact",
    "btn-idioma": "ES",
    "btn-abrir-libro": "Open interactive Art Book",
    
    // Index
    "hero-rol": "Concept Artist & Illustrator",
    "sobre-mi-titulo": "ABOUT ME",
    "sobre-mi-p1": "Graduated in Video Game Design and Development with a focus on Concept Art and Illustration. I combine artistic skills with 3D and programming knowledge, allowing me to create aesthetic, optimized assets ready for engine implementation.",
    "sobre-mi-p2": "I am currently pursuing a Master's degree in Concept Art at U-tad and collaborating as a concept artist and illustrator at Estudio Duende, participating in the visual development of various projects.",
    
    // Curriculum
    "cv-rol": "Concept Artist & Illustrator",
    "cv-intro": "Graduated in Video Game Design and Development with a focus on Concept Art and Illustration. I combine artistic skills with 3D and programming knowledge, allowing me to create aesthetic, optimized assets ready for engine implementation.",
    "cv-descargar": "Download Resume PDF",
    "cv-hab-titulo": "Skills",
    "cv-hab-2d": "2D / Illustration",
    "cv-hab-3d": "3D / Modeling",
    "cv-hab-tech": "Engines & Tech",
    "cv-idiomas-titulo": "Languages",
    "cv-id-es": "Spanish:",
    "cv-id-eu": "Basque:",
    "cv-id-en": "English:",
    "cv-id-nativo": "Native",
    "cv-exp-titulo": "Experience & Education",
    "cv-fecha-presente": "2026 - Present",
    "cv-duende-rol": "Concept Artist & Illustrator",
    "cv-duende-desc": "Participation in the visual development of various studio projects, creating concept art and illustrations.",
    "cv-utad-rol": "Master's in Concept Art",
    "cv-utad-lugar": "Centro Digital U-tad, Madrid",
    "cv-fecha-dragon": "Feb 2026 - Jun 2026",
    "cv-dragon-rol": "Concept Artist & Illustrator (Internship)",
    "cv-dragon-desc": "Character illustration for promotional purposes. Design and creation of capsules and banners for the Steam storefront.",
    "cv-urjc-rol": "Bachelor's in Video Game Design and Development",
    "cv-urjc-lugar": "Universidad Rey Juan Carlos, Madrid",
    "cv-cat-lugar": "Indie Project: Catpuccino (Mango Studio) ↗",
    "cv-cat-desc": "Design and creation of the main character and props under strict technical limitations. Implementation of sprites in Unity and technical collaboration to ensure proper integration.",

    // Contacto
    "contacto-p1": "If you have any ideas you'd like to discuss with me, you can write to",
    "contacto-p2": "You can also check out my social media!"
  }
};

let idiomaActual = localStorage.getItem('idioma') || 'es';

function aplicarIdioma(lang) {
  idiomaActual = lang;
  localStorage.setItem('idioma', lang);

  const btnIdioma = document.getElementById("btn-idioma");
  if (btnIdioma) btnIdioma.textContent = diccionario[lang]["btn-idioma"];

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const clave = el.getAttribute("data-i18n");
    if (diccionario[lang][clave]) el.innerHTML = diccionario[lang][clave];
  });

  // --- NUEVO: Cambiar la ruta del PDF según el idioma ---
  const enlaceDescargaCV = document.getElementById("enlace-descarga-cv");
  if (enlaceDescargaCV) {
    enlaceDescargaCV.href = lang === 'es' ? 'docs/CV-GaraziBlanco-ES.pdf' : 'docs/CV-GaraziBlanco-EN.pdf';
  }

  if (typeof renderizarPortfolio === "function" && document.getElementById("grid-portfolio")) {
    renderizarPortfolio();
    
    // Si el modal está abierto, actualizar sus textos al instante
    if (DOM && DOM.modal && DOM.modal.classList.contains("activo")) {
      abrirModalProyecto(indiceProyectoActual);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  aplicarIdioma(idiomaActual);
  const btnIdioma = document.getElementById("btn-idioma");
  if (btnIdioma) {
    btnIdioma.addEventListener("click", () => aplicarIdioma(idiomaActual === 'es' ? 'en' : 'es'));
  }
});


/* ==========================================================================
   1. SISTEMA DE AVATAR INTERACTIVO (8 Capas)
   ========================================================================== */
// Archivos independientes para Accesorios y Ropa
const recursosAvatar = {
  accesorio: ["", "img/avatarBIEN/8_Accesorios/Accesorio1.png", "img/avatarBIEN/8_Accesorios/Accesorio2.png"],
  ropa: ["img/avatarBIEN/3_Ropa/outfit1.png", "img/avatarBIEN/3_Ropa/outfit2.png"]
};

// Archivos vinculados para la Expresión (Color y Línea cambian a la vez)
const recursosExpresion = {
  color: ["img/avatarBIEN/5_CaraColor/Cara1Color.png", "img/avatarBIEN/5_CaraColor/Cara2Color.png"],
  linea: ["img/avatarBIEN/7_LineaCara/Cara1Linea.png", "img/avatarBIEN/7_LineaCara/Cara2Linea.png"]
};

let indicesAvatar = { accesorio: 1, expresion: 0, ropa: 0 };

function aplicarCapa(idElemento, ruta) {
  const capa = document.getElementById(idElemento);
  if (!capa) return;
  capa.style.display = ruta ? "block" : "none";
  if (ruta) capa.src = ruta;
}

function cambiarItem(categoria, direccion) {
  if (categoria === 'expresion') {
    // La expresión mueve dos capas simultáneamente
    const total = recursosExpresion.color.length;
    indicesAvatar.expresion = (indicesAvatar.expresion + direccion + total) % total;
    
    aplicarCapa("capa-cara-color", recursosExpresion.color[indicesAvatar.expresion]);
    aplicarCapa("capa-linea-cara", recursosExpresion.linea[indicesAvatar.expresion]);
  } else {
    // La ropa y los accesorios se mueven de forma normal
    const lista = recursosAvatar[categoria];
    indicesAvatar[categoria] = (indicesAvatar[categoria] + direccion + lista.length) % lista.length;
    
    aplicarCapa(`capa-${categoria}`, lista[indicesAvatar[categoria]]);
  }
}

/* ==========================================================================
   2. MENÚ LATERAL (Hamburguesa)
   ========================================================================== */
const btnAbrirMenu = document.getElementById("btn-abrir-menu");
const btnCerrarMenu = document.getElementById("btn-cerrar-menu");
const menuLateral = document.getElementById("menu-lateral");
const overlayMenu = document.getElementById("overlay-menu");

function toggleMenu(estado) {
  if (!menuLateral || !overlayMenu) return;
  menuLateral.classList.toggle("activo", estado);
  overlayMenu.classList.toggle("activo", estado);
}

if (btnAbrirMenu) btnAbrirMenu.addEventListener("click", () => toggleMenu(true));
if (btnCerrarMenu) btnCerrarMenu.addEventListener("click", () => toggleMenu(false));
if (overlayMenu) overlayMenu.addEventListener("click", () => toggleMenu(false));

/* ==========================================================================
   3. BASE DE DATOS DE PROYECTOS (PORTFOLIO TRADUCIDO)
   ========================================================================== */
const proyectos = [
  {
    id: "proyecto-1",
    titulo: { es: "Folclore Vasco: Concept de Personajes y Criaturas", en: "Basque Folklore: Character & Creature Concept" },
    categoria: { es: "Concept Art / Ilustración", en: "Concept Art / Illustration" },
    miniatura: "img/proyectos/PersonajesTFG/PersonajesTFG (2).png",
    descripcion: { 
      es: "Proyecto de diseño de personajes y criaturas centrado en reinterpretar la mitología tradicional del País Vasco para videojuegos.<br><br>Este proyecto formó parte del desarrollo del Trabajo de Fin de Grado.",
      en: "Character and creature design project focused on reinterpreting traditional Basque mythology for video games.<br><br>This project was part of the Bachelor's Degree Final Project."
    },
    enlaces: [{ texto: { es: "Consultar TFG en URJC ↗", en: "View Thesis at URJC ↗" }, url: "https://hdl.handle.net/10115/474037" }],
    imagenes: Array.from({ length: 14 }, (_, i) => ({ url: `img/proyectos/PersonajesTFG/PersonajesTFG (${i === 13 ? 1 : i + 2}).png` }))
  },
  {
    id: "proyecto-2",
    titulo: { es: "Folclore Vasco: Concept de Entornos y Props", en: "Basque Folklore: Environment & Prop Concept" },
    categoria: { es: "Concept Art / Ilustración", en: "Concept Art / Illustration" },
    miniatura: "img/proyectos/EntornosTFG/EntornosTFG (3).png",
    descripcion: { 
      es: "Proyecto de diseño de escenarios y props enfocado en adaptar los entornos naturales, la geografía y la cultura material vasca para una propuesta de videojuego de fantasía oscura.<br><br>Se incluye un mapa del universo del videojuego, thumbnails de paisajes, estudios de iluminación subterránea y props culturales.<br><br>Este proyecto formó parte del desarrollo del Trabajo de Fin de Grado.",
      en: "Environment and prop design project focused on adapting natural landscapes, geography, and Basque material culture for a dark fantasy video game proposal.<br><br>Includes a map of the game universe, landscape thumbnails, subterranean lighting studies, and cultural props.<br><br>This project was part of the Bachelor's Degree Final Project."
    },
    enlaces: [{ texto: { es: "Consultar TFG en URJC ↗", en: "View Thesis at URJC ↗" }, url: "https://hdl.handle.net/10115/474037" }],
    imagenes: Array.from({ length: 6 }, (_, i) => ({ url: `img/proyectos/EntornosTFG/EntornosTFG (${i + 1}).png` }))
  },
  {
    id: "proyecto-7",
    titulo: { es: "Itzalen Kondairak: Biblia de Arte y Guía de Estilo", en: "Itzalen Kondairak: Art Bible and Style Guide" },
    categoria: { es: "Worldbuilding y Dirección de Arte", en: "Worldbuilding and Art Direction" },
    miniatura: "img/proyectos/BibliaArteTFG/BibliaDeArte_GBJ_page-0001.jpg",
    descripcion: { 
      es: "Biblia de arte y guía de estilo técnica desarrollada para el universo de fantasía oscura de Itzalen Kondairak.<br><br>Documenta directrices de renderizado 2D/3D, paletas HSV, canon anatómico, diseño de personajes y bestiario, arquitectura y UI.<br><br>Este proyecto formó parte del desarrollo del Trabajo de Fin de Grado.",
      en: "Technical art bible and style guide developed for the dark fantasy universe of Itzalen Kondairak.<br><br>Documents 2D/3D rendering guidelines, HSV palettes, anatomical canon, character and bestiary design, architecture, and UI.<br><br>This project was part of the Bachelor's Degree Final Project."
    },
    enlaces: [
      { texto: { es: "Descargar PDF completo", en: "Download Full PDF" }, url: "docs/BibliaDeArte_GBJ.pdf" },
      { texto: { es: "Consultar TFG en URJC ↗", en: "View Thesis at URJC ↗" }, url: "https://hdl.handle.net/10115/474037" }
    ],
    teaserLibro: {
      textoExplicativo: { es: "A partir del trabajo de investigación y desarrollo visual se diseñó y maquetó un Teaser Art Book.", en: "Based on the research and visual development work, a Teaser Art Book was designed and laid out." },
      totalPaginas: 32,
      carpeta: "img/proyectos/LibroArteTFG/",
      prefijo: "LibroDeArte_paraImprimir_Completo-"
    },
    imagenes: Array.from({ length: 66 }, (_, i) => ({ url: `img/proyectos/BibliaArteTFG/BibliaDeArte_GBJ_page-${String(i + 1).padStart(4, '0')}.jpg` }))
  },
  {
    id: "proyecto-3",
    titulo: { es: "Sol: Diseño de Personaje", en: "Sol: Character Design" },
    categoria: { es: "Concept Art", en: "Concept Art" },
    miniatura: "img/proyectos/Sol/Sol (2).jpg",
    descripcion: { es: "Concept de personaje basado en el universo de Valorant.", en: "Character concept based on the Valorant universe." },
    imagenes: [
      { url: "img/proyectos/Sol/Sol (2).png", pie: { es: "Exploración inicial de siluetas.", en: "Initial silhouette exploration." } },
      { url: "img/proyectos/Sol/Sol (1).png", pie: { es: "Desarrollo de vestuario, paletas de color alternativas y concept del estado potenciado.", en: "Wardrobe development, alternative color palettes, and empowered state concept." } },
      { url: "img/proyectos/Sol/Sol (2).jpg", pie: { es: "Diseño final de personaje: beauty y hoja de expresiones faciales.", en: "Final character design: beauty shot and facial expression sheet." } },
      { url: "img/proyectos/Sol/Sol (1).jpg", pie: { es: "Kit de habilidades para gameplay: poses clave e interacción con efectos visuales.", en: "Gameplay ability kit: key poses and visual effects interaction." } }
    ]
  },
  {
    id: "proyecto-4",
    titulo: { es: "Catpuccino: Diseño de Assets 2D para Unity", en: "Catpuccino: 2D Asset Design for Unity" },
    categoria: { es: "Diseño de Props", en: "Prop Design" },
    miniatura: "img/proyectos/CatpuccionoProps/catpuccinoProps (3).png",
    descripcion: { 
      es: "Props diseñados para el videojuego indie Catpuccino, un simulador cozy de gestión de cafetería.<br><br>El pack completo de assets está publicado y disponible para su uso en la Unity Asset Store.", 
      en: "Props designed for the indie video game Catpuccino, a cozy coffee shop management simulator.<br><br>The complete asset pack is published and available for use on the Unity Asset Store." 
    },
    enlaces: [
      { 
        texto: { es: "Jugar en itch.io ↗", en: "Play on itch.io ↗" }, 
        url: "https://mangostudiourjc.itch.io/catpuccino" 
      },
      { 
        texto: { es: "Ver en Unity Asset Store ↗", en: "View on Unity Asset Store ↗" }, 
        url: "https://assetstore.unity.com/packages/slug/349428" 
      }
    ],
    imagenes: [
      { url: "img/proyectos/CatpuccionoProps/catpuccinoProps (3).png" },
      { url: "img/proyectos/CatpuccionoProps/catpuccinoProps (1).png" },
      { url: "img/proyectos/CatpuccionoProps/catpuccinoProps (2).png" },
      { url: "img/proyectos/CatpuccionoProps/catpuccinoProps (4).png" },
      { url: "img/proyectos/CatpuccionoProps/catpuccinoProps (5).png" }
    ]
  },
  {
    id: "proyecto-5",
    titulo: { es: "Catpuccino: Diseño de Personaje Principal", en: "Catpuccino: Main Character Design" },
    categoria: { es: "Concept Art / Ilustración", en: "Concept Art / Illustration" },
    miniatura: "img/proyectos/CatpuccinoPersonaje/catPersonaje (1).png",
    descripcion: { 
      es: "Diseño e ilustraciones del personaje principal jugable para el videojuego indie Catpuccino.", 
      en: "Design and illustrations of the main playable character for the indie video game Catpuccino." 
    },
    enlaces: [{ texto: { es: "Jugar en itch.io ↗", en: "Play on itch.io ↗" }, url: "https://mangostudiourjc.itch.io/catpuccino" }],
    imagenes: Array.from({ length: 4 }, (_, i) => ({ url: `img/proyectos/CatpuccinoPersonaje/catPersonaje (${i + 1}).png` }))
  },
  {
    id: "proyecto-6",
    titulo: { es: "Diseño de Mapa para Shooter", en: "Shooter Map Design" },
    categoria: { es: "Concept Art", en: "Concept Art" },
    miniatura: "img/proyectos/MapaVal/MapaVal (2).jpg",
    descripcion: { es: "Concept de escenario basado en el universo de Valorant.", en: "Environment concept based on the Valorant universe." },
    imagenes: [
      { url: "img/proyectos/MapaVal/mapaVal (2).jpg", pie: { es: "Planteamiento visual del mapa.", en: "Visual layout of the map." } },
      { url: "img/proyectos/MapaVal/mapaVal (1).jpg", pie: { es: "Callout sheet de arquitectura y props de entorno.", en: "Architecture and environment prop callout sheet." } },
      { url: "img/proyectos/MapaVal/mapaVal (3).jpg", pie: { es: "Foliage sheet y ambientación natural.", en: "Foliage sheet and natural ambiance." } }
    ]
  }
];

/* ==========================================================================
   4. CONTROL DEL MODAL DE PROYECTOS
   ========================================================================== */
let indiceProyectoActual = 0;
let DOM = {};

document.addEventListener("DOMContentLoaded", () => {
  DOM = {
    grid: document.getElementById("grid-portfolio"),
    modal: document.getElementById("modal-proyecto"),
    overlay: document.getElementById("modal-overlay"),
    btnCerrar: document.getElementById("btn-cerrar-modal"),
    btnAnt: document.getElementById("btn-modal-anterior"),
    btnSig: document.getElementById("btn-modal-siguiente"),
    galeria: document.getElementById("modal-galeria"),
    titulo: document.getElementById("modal-titulo"),
    categoria: document.getElementById("modal-categoria"),
    descripcion: document.getElementById("modal-descripcion"),
    enlaces: document.getElementById("modal-enlaces")
  };
  
  if (DOM.btnCerrar) DOM.btnCerrar.onclick = cerrarModalProyecto;
  if (DOM.overlay) DOM.overlay.onclick = cerrarModalProyecto;
  if (DOM.btnAnt) DOM.btnAnt.onclick = () => indiceProyectoActual > 0 && abrirModalProyecto(indiceProyectoActual - 1);
  if (DOM.btnSig) DOM.btnSig.onclick = () => indiceProyectoActual < proyectos.length - 1 && abrirModalProyecto(indiceProyectoActual + 1);
  
  renderizarPortfolio();
});

function renderizarPortfolio() {
  if (!DOM.grid) return;
  DOM.grid.innerHTML = "";
  proyectos.forEach((p, i) => {
    const article = document.createElement("article");
    article.className = "tarjeta-proyecto";
    article.innerHTML = `
      <div class="miniatura-wrapper"><img src="${p.miniatura}" alt="${p.titulo[idiomaActual]}"></div>
      <div class="tarjeta-info"><h3>${p.titulo[idiomaActual]}</h3><p>${p.categoria[idiomaActual]}</p></div>
    `;
    article.onclick = () => abrirModalProyecto(i);
    DOM.grid.appendChild(article);
  });
}

function abrirModalProyecto(i) {
  const p = proyectos[i];
  if (!p || !DOM.modal) return;
  
  indiceProyectoActual = i;
  DOM.titulo.textContent = p.titulo[idiomaActual];
  DOM.categoria.textContent = p.categoria[idiomaActual];
  DOM.descripcion.innerHTML = `<p>${p.descripcion[idiomaActual]}</p>`;
  
  if (DOM.enlaces) {
    DOM.enlaces.innerHTML = "";
    DOM.enlaces.style.display = p.enlaces || p.teaserLibro ? "flex" : "none";
    
    if (p.enlaces) {
      p.enlaces.forEach(link => {
        DOM.enlaces.innerHTML += `<a href="${link.url}" target="_blank" rel="noopener noreferrer" class="btn-proyecto-enlace">${link.texto[idiomaActual]}</a>`;
      });
    }
    
    if (p.teaserLibro) {
      const btnLibro = document.createElement("div");
      btnLibro.className = "bloque-teaser-libro";
      btnLibro.innerHTML = `
        <p class="texto-teaser-libro">${p.teaserLibro.textoExplicativo[idiomaActual]}</p>
        <button class="btn-abrir-libro" type="button">${diccionario[idiomaActual]["btn-abrir-libro"]}</button>
      `;
      btnLibro.querySelector("button").onclick = () => abrirVisorLibro(p.teaserLibro);
      DOM.enlaces.appendChild(btnLibro);
    }
  }

  DOM.galeria.innerHTML = p.imagenes.map(img => `
    <figure class="modal-figura">
      <img src="${img.url}" alt="${p.titulo[idiomaActual]}">
      ${img.pie ? `<figcaption class="modal-pie">${img.pie[idiomaActual]}</figcaption>` : ''}
    </figure>
  `).join('');

  DOM.galeria.scrollTop = 0;
  DOM.modal.scrollTop = 0;
  
  if (DOM.btnAnt) DOM.btnAnt.classList.toggle("oculto", i <= 0);
  if (DOM.btnSig) DOM.btnSig.classList.toggle("oculto", i >= proyectos.length - 1);
  
  document.body.classList.add("modal-abierto");
  DOM.modal.classList.add("activo");
}

function cerrarModalProyecto() {
  if (!DOM.modal) return;
  document.body.classList.remove("modal-abierto");
  DOM.modal.classList.remove("activo");
}

/* ==========================================================================
   5. VISOR INTERACTIVO DE PÁGINAS DEL ART BOOK (3D FLIP)
   ========================================================================== */
const LibroDOM = {};
document.addEventListener("DOMContentLoaded", () => {
  Object.assign(LibroDOM, {
    modal: document.getElementById("modal-libro"),
    overlay: document.getElementById("modal-libro-overlay"),
    btnCerrar: document.getElementById("btn-cerrar-libro"),
    btnAnt: document.getElementById("btn-libro-anterior"),
    btnSig: document.getElementById("btn-libro-siguiente"),
    contenedor: document.getElementById("libro-contenedor"),
    hojaAnimada: document.getElementById("hoja-animada"),
    imgIzq: document.getElementById("img-izq"),
    imgDer: document.getElementById("img-der"),
    imgFrente: document.getElementById("img-frente"),
    imgDorso: document.getElementById("img-dorso")
  });

  if (LibroDOM.btnCerrar) LibroDOM.btnCerrar.onclick = cerrarVisorLibro;
  if (LibroDOM.overlay) LibroDOM.overlay.onclick = cerrarVisorLibro;
  if (LibroDOM.btnAnt) LibroDOM.btnAnt.onclick = () => animarVolteo(-1);
  if (LibroDOM.btnSig) LibroDOM.btnSig.onclick = () => animarVolteo(1);
  if (LibroDOM.imgIzq) LibroDOM.imgIzq.onclick = () => animarVolteo(-1);
  if (LibroDOM.imgDer) LibroDOM.imgDer.onclick = () => animarVolteo(1);
});

let paginasArtBook = [];
let spreadActual = 0; 
let animandoLibro = false;

function cargarImgLibro(elem, url) {
  if (!elem) return;
  if (!url) { elem.removeAttribute("src"); return; }
  elem.onerror = function() { if (this.src.endsWith('.jpg')) this.src = this.src.replace('.jpg', '.png'); };
  elem.src = url;
}

function obtenerPaginasSpread(s) {
  if (s === 0) return { izq: null, der: paginasArtBook[0] };
  if (s === 16) return { izq: paginasArtBook[31], der: null };
  return { izq: paginasArtBook[(s * 2) - 1] || null, der: paginasArtBook[s * 2] || null };
}

function actualizarFlechasLibro() {
  if (LibroDOM.btnAnt) LibroDOM.btnAnt.classList.toggle("oculto", spreadActual <= 0);
  if (LibroDOM.btnSig) LibroDOM.btnSig.classList.toggle("oculto", spreadActual >= 16);
}

function abrirVisorLibro(config) {
  if (!LibroDOM.modal || !config) return;
  paginasArtBook = Array.from({ length: config.totalPaginas }, (_, i) => `${config.carpeta}${config.prefijo}${String(i + 1).padStart(2, '0')}.jpg`);
  
  spreadActual = 0; animandoLibro = false;
  LibroDOM.contenedor.className = "libro-contenedor modo-portada";
  
  const pags = obtenerPaginasSpread(0);
  cargarImgLibro(LibroDOM.imgIzq, pags.izq);
  cargarImgLibro(LibroDOM.imgDer, pags.der);
  
  actualizarFlechasLibro();
  LibroDOM.modal.classList.add("activo");
}

function cerrarVisorLibro() {
  if (LibroDOM.modal) LibroDOM.modal.classList.remove("activo");
}

function animarVolteo(direccion) {
  if (animandoLibro || (direccion === 1 && spreadActual >= 16) || (direccion === -1 && spreadActual <= 0)) return;
  animandoLibro = true;

  const actual = obtenerPaginasSpread(spreadActual);
  const sig = obtenerPaginasSpread(spreadActual + direccion);

  cargarImgLibro(direccion === 1 ? LibroDOM.imgDer : LibroDOM.imgIzq, direccion === 1 ? sig.der : sig.izq);
  
  LibroDOM.hojaAnimada.style.transition = "none";
  LibroDOM.hojaAnimada.style.left = direccion === 1 ? "50%" : "0";
  LibroDOM.hojaAnimada.style.transformOrigin = direccion === 1 ? "left center" : "right center";
  LibroDOM.hojaAnimada.style.transform = "rotateY(0deg)";
  
  cargarImgLibro(LibroDOM.imgFrente, direccion === 1 ? actual.der : actual.izq);
  cargarImgLibro(LibroDOM.imgDorso, direccion === 1 ? sig.izq : sig.der);
  
  LibroDOM.hojaAnimada.style.display = "block";
  LibroDOM.hojaAnimada.offsetHeight;

  const nuevaClase = (spreadActual + direccion === 0) ? " modo-portada" : (spreadActual + direccion === 16) ? " modo-contraportada" : "";
  LibroDOM.contenedor.className = "libro-contenedor" + nuevaClase;

  LibroDOM.hojaAnimada.style.transition = "transform 0.65s cubic-bezier(0.25, 1, 0.5, 1)";
  LibroDOM.hojaAnimada.style.transform = `rotateY(${direccion === 1 ? -180 : 180}deg)`;

  setTimeout(() => {
    spreadActual += direccion;
    cargarImgLibro(direccion === 1 ? LibroDOM.imgIzq : LibroDOM.imgDer, direccion === 1 ? sig.izq : sig.der);
    LibroDOM.hojaAnimada.style.display = "none";
    actualizarFlechasLibro();
    animandoLibro = false;
  }, 650);
}

/* ==========================================================================
   6. NAVEGACIÓN GLOBAL POR TECLADO
   ========================================================================== */
window.addEventListener("keydown", (e) => {
  const modalLibroActivo = LibroDOM.modal && LibroDOM.modal.classList.contains("activo");
  const modalProyActivo = DOM.modal && DOM.modal.classList.contains("activo");

  if (e.key === "Escape") {
    if (modalLibroActivo) cerrarVisorLibro();
    else if (modalProyActivo) cerrarModalProyecto();
  } else if (e.key === "ArrowLeft") {
    if (modalLibroActivo) animarVolteo(-1);
    else if (modalProyActivo) DOM.btnAnt.click();
  } else if (e.key === "ArrowRight") {
    if (modalLibroActivo) animarVolteo(1);
    else if (modalProyActivo) DOM.btnSig.click();
  }
});