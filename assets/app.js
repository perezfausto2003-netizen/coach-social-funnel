/* Coach Social — lógica compartida del funnel */

// Casos reales (carpeta "Casos de éxito"). Orden: primero perfiles técnicos → liderazgo (avatar principal).
// img = portada del video, vid = video completo. Excluidos a pedido del cliente: Carmen Molina, Oscar Vega.
// PRODUCCIÓN: re-subir imágenes/videos al hosting de la página (GHL / Panda); las URLs de Drive son para preview.
const CASES = [
  {n:'Efraín Ortega', r:'Especialista en distribución minera', t:'De inseguro y silencioso a visible e influyente', img:'10lWcy9wqR57LXHykEU1Vni423jMz_UAy', vid:'1f9CYIONxzczUStIUKuAuRx3cc9-DWnus', tag:'tecnico'},
  {n:'Camilo Poma', r:'Científico de datos e IA', t:'Aumentó su confianza y comunicación con superiores', img:'1iRl9d5lhmItscKLz_Ump_oncqGCKJOVP', vid:'1QqDK56LzfQp9lbyuhfvRhwnOvl4B2JdN', tag:'tecnico'},
  {n:'Miguel A. de la Torre', r:'Tribe Lead', t:'Aprendió a conectar con sus superiores en 2 meses', img:'13OhBV44vGmmZQzzP_CSe_HGQaYbbqu9X', vid:'1Q7kphA6OpMQsRqGCOdaP5VnwzS9Ne77f', tag:'lider'},
  {n:'Erick Flores', r:'Coordinador de infraestructura', t:'Venció su timidez y aumentó su influencia en reuniones', img:'1UoZ-ZMWLigIAH6IA0GOn-eaKZLapXq4X', vid:'114Gs6PKIalHVE31TQR4UvY251ZAqKNa2', tag:'tecnico'},
  {n:'Harold Franco', r:'Jefe de marca', t:'Desarrolló su liderazgo carismático en 60 días', img:'1roAXAodBSbw4hvvp1dTNkBQCjs1OT2kn', vid:'1CBNgm-aXme_n_Szxi89_UfAQ4-Pti8sb', tag:'lider'},
  {n:'Manuel Vizcarra', r:'Analytics & Reporting Specialist', t:'Superó su ansiedad en entornos profesionales', img:'10DZK5pOk9ZypwIDJDaBM5eyBsel1z9bc', vid:'1rVbeas0H_cv9EhLIfwiGWZ7ZrQRp-CIO', tag:'tecnico'},
  {n:'Rafael Buelvas', r:'Gerente de producto', t:'Aumentó su visibilidad y confianza profesional en 60 días', img:'13Vll3n3ZAcGjUsrteyqYkgO5PB4J_eSy', vid:'1xZjoSQYASi5M81i_AKIWerhxdDb3Lc1b', tag:'lider'},
  {n:'Marco Pezzini', r:'Ingeniero de telecomunicaciones', t:'Aumentó su confianza y toma de decisiones en reuniones', img:'1ROCVmAr8P3lrkjarBcBMIaftmglE0RCn', vid:'1PUcpvcIVg3Brxb_96kf2c7ESpWxQV2Xe', tag:'tecnico'},
  {n:'Etoile Silveira', r:'Medicina estética', t:'+3.000 USD adicionales al mes gracias a su nueva marca personal', img:'1MaRtcGaS0igq1yfbq2WfsO6PAiidKoTF', vid:'1HYuEMH_8ly-E8rmF7SUAHA-FUa0kmb-Y', tag:'negocio'},
  {n:'Alexis Galván', r:'Ingeniero de sistemas', t:'Venció su timidez en 60 días', img:'18UwqwuESHX2O7_c-STyjxDshpiuAwSEV', vid:'1ZgUWvcPoOHrAPnTS2R2QM_WeIFrM-vWi', tag:'tecnico'},
  {n:'Bertha Castañeda', r:'Ingeniera civil', t:'Aumentó su confianza y asertividad en reuniones profesionales', img:'1k1x9P0-I2lI-1_543cnOKB1oQ2Xkhq6n', vid:'1fHGwmrnR7W6h27KkG9Meun6MgAtO-65m', tag:'tecnico'},
  {n:'Erich Schultz', r:'Gerente comercial · Jefe de ventas', t:'Aprendió a cautivar a su audiencia en 60 días', img:'17bqxpRJpb2T1mZOVRpdb2SsscjzxTD-3', vid:'1U_JOZkXhmlgX5_xkm7VTYYFKB9eBHYiR', tag:'lider'},
  {n:'Eduardo Hoyos', r:'Desarrollador de software', t:'Aumentó su confianza y visibilidad en reuniones', img:'1vimZz1h79Ua8CYbJn4h5G0qclGh5vWqn', vid:'1P_KVjK5JYEjSkPDfU7JjZuGk_zP-Q-Jy', tag:'tecnico'},
  {n:'Diana Guerra', r:'Ingeniera industrial y de sistemas', t:'Venció su timidez en el trabajo en menos de 60 días', img:'1jgE4N3ClROBOUqK8zXaevRZxNFhOhWMW', vid:'1fKg-Mx5lcsZvG9JT3_bFXtC980ngp4UM', tag:'tecnico'},
  {n:'Ali Alderete', r:'Gestor de cuentas corporativas', t:'Aumentó su visibilidad estratégica en 60 días', img:'1DWR67QgZ8gSlxYGeOHzzPvycF5PCQle3', vid:'1edDbsVgx3JgjCkdi_4tads4FhBTqR8e8', tag:'lider'},
  {n:'Carlos Mantilla', r:'Emprendedor digital', t:'Lanzamiento exitoso de su programa de IA gracias a su nueva red de contactos', img:'1CrKmKVpX1kxQOrlOveNdHRtFb4NhqjN5', vid:'1Gp2a5cVDhc5mQREbCXqSYXEnpnbksVmW', tag:'negocio'},
  {n:'Mauricio Cabrera', r:'Auditor interno y catedrático', t:'Aumentó su carisma y comunicación profesional', img:'1NKbaHs7jlvag9MvkJxjXuMqLub357LNy', vid:'1G8DM-RAnmz6N958g76gLcy76R5VTQ0tb', tag:'lider'},
  {n:'Julieta Fernández', r:'Directora de operaciones', t:'Aumentó su círculo social y red de contactos profesionales', img:'1xzHrKA9gj_wBOCL75-SBetOmI8ISE7WR', vid:'1km1e5uiK7ops05ko5pKVCifidQbdwN-x', tag:'lider'},
  {n:'Eduardo La Rosa', r:'Account Manager', t:'Aumentó su carisma y confianza en menos de 60 días', img:'1S-OYb9ASzLo3ViUBHnxs9zDn23h_ttcU', vid:'1p6Ev-tr8KK_Fc51sD2fKOI8OZMueI9UN', tag:'lider'},
  {n:'Johan Neyra', r:'Ingeniero industrial y de sistemas', t:'Potenció su habilidad para conectar con los demás en 60 días', img:'1CzsMuIK0VY9YCrewMU0lmjWw-J2o56Tg', vid:'1dOmEvQ0LBOzx_5H4SI9KoIU09l80qhgf', tag:'tecnico'},
  {n:'Omar Ochoa', r:'Strategic Accounts Sales Manager', t:'Aumentó su círculo social y profesional en 60 días', img:'1c0J1ljLgLFVCSthKgx2RFE7vYckCPuvQ', vid:'1qmH_n1ksycqufQp3n4fBN5b7D59SrpNu', tag:'lider'},
  {n:'Daisy Montoya', r:'Contadora pública', t:'Aumentó su carisma y perfeccionó su comunicación en 60 días', img:'1nJx9F2fCS70xjYUs-wSpejcZm9pJWXhF', vid:'1tk2dTfNg9q-rlWC-xMyRmvdUuZ9oHzF6', tag:'tecnico'},
  {n:'Paolo Bonamigo', r:'Export Manager', t:'Mejoró su comunicación profesional en 60 días', img:'1fv0TFQUF_PBs9gKXhzApdCMkdz-pQuSh', vid:'1iEwJK8KUpu94SQ5tKc-G2VCeIhyed0kN', tag:'lider'},
  {n:'Daniel Chávez', r:'Ejecutivo comercial', t:'Aumentó su capacidad para conectar con personas en menos de 60 días', img:'1dN65PiNNwC-YXHDzwsydd7Z3HL10bfOp', vid:'1PMukydVUtqGKSVOSdGPB4svsY_3yMvM7', tag:'lider'},
  {n:'Diego Recabarren', r:'Ingeniero civil', t:'Aumentó su círculo social y red de contactos profesionales', img:'16rCnwxbIeKr9vHB_L3JLGSVqQWELb8aZ', vid:'1F1rQ8PBhO-ePOXmMJaTwRLrTkgWp3vPn', tag:'tecnico'},
  {n:'Felipe López', r:'Consultor de organizaciones', t:'Aumentó su red de contactos y círculo social en 60 días', img:'1iC6DJ32eoDQ6KQVUkgJMxicsML-DyiFg', vid:'1LyPD-z8ybYAwtDeLnOLq1m4rZarbbfV4', tag:'negocio'},
  {n:'Daniela Sánchez', r:'Directora creativa', t:'Aumentó su círculo social y red de contactos profesionales', img:'1mRgWT6E9TCF-wTHU1xqS-tag_8zAWcKV', vid:'1MhTLb48nN5uvHiobXadDkldmZmzp19DB', tag:'lider'}
];

const thumb = id => `https://drive.google.com/thumbnail?id=${id}&sz=w800`;

function renderCases(el, {limit = 6, tags = null} = {}) {
  if (!el) return;
  const list = tags ? CASES.filter(c => tags.includes(c.tag)).concat(CASES.filter(c => !tags.includes(c.tag))) : CASES;
  el.innerHTML = list.map((c, i) => `
    <button class="t-card ${i >= limit ? 'hidden extra' : ''}" data-vid="${c.vid}" aria-label="Ver testimonio de ${c.n}">
      <div class="t-thumb" style="background-image:url('${thumb(c.img)}')"></div>
      <div class="t-body"><b>${c.n}</b><span>${c.r}</span><p>${c.t}</p></div>
    </button>`).join('');
  const more = document.querySelector('[data-more]');
  if (more) more.addEventListener('click', () => {
    el.querySelectorAll('.extra').forEach(x => x.classList.remove('hidden'));
    more.remove();
    track('ver_mas_casos');
  });
}

function setupModal() {
  const m = document.createElement('div');
  m.className = 'modal';
  m.innerHTML = '<div class="box"><button class="close" aria-label="Cerrar">×</button><iframe allow="autoplay; fullscreen" allowfullscreen></iframe></div>';
  document.body.appendChild(m);
  const frame = m.querySelector('iframe');
  const close = () => { m.classList.remove('open'); frame.src = ''; };
  document.addEventListener('click', e => {
    const card = e.target.closest('[data-vid]');
    if (card) { frame.src = `https://drive.google.com/file/d/${card.dataset.vid}/preview`; m.classList.add('open'); track('ver_testimonio', {id: card.dataset.vid}); }
    if (e.target === m || e.target.closest('.close')) close();
  });
  document.addEventListener('keydown', e => e.key === 'Escape' && close());
}

// Revela los CTA después de N segundos (data-reveal en <body>). ?preview=1 los muestra siempre.
function setupReveal() {
  const secs = Number(document.body.dataset.reveal || 0);
  const locked = document.querySelectorAll('.is-locked');
  const show = () => { locked.forEach(x => x.classList.remove('is-locked')); document.querySelector('.sticky')?.classList.add('show'); };
  if (!secs || new URLSearchParams(location.search).has('preview')) return show();
  const key = 'cs_reveal_' + location.pathname;
  try { if (localStorage.getItem(key)) return show(); } catch (e) {}
  setTimeout(() => { show(); try { localStorage.setItem(key, 1); } catch (e) {} }, secs * 1000);
}

// Mantiene UTMs + variante en todos los links internos del funnel (atribución por variante).
function carryParams() {
  const p = new URLSearchParams(location.search);
  const v = document.body.dataset.variant;
  if (v && !p.has('v')) p.set('v', v);
  p.delete('preview');
  const qs = p.toString();
  if (!qs) return;
  document.querySelectorAll('a[href$=".html"], a[href*=".html#"]').forEach(a => {
    const [base, hash] = a.getAttribute('href').split('#');
    a.setAttribute('href', base + (base.includes('?') ? '&' : '?') + qs + (hash ? '#' + hash : ''));
  });
}

// Punto único de medición: reemplazar por fbq / gtag / GHL según stack.
function track(event, data = {}) {
  const payload = {event, variant: document.body.dataset.variant || new URLSearchParams(location.search).get('v') || 'na', ...data};
  (window.dataLayer = window.dataLayer || []).push(payload);
}

document.addEventListener('DOMContentLoaded', () => {
  renderCases(document.querySelector('[data-cases]'), {
    limit: Number(document.querySelector('[data-cases]')?.dataset.limit || 6),
    tags: document.querySelector('[data-cases]')?.dataset.tags?.split(',')
  });
  setupModal();
  setupReveal();
  carryParams();
  document.querySelectorAll('[data-track]').forEach(el => el.addEventListener('click', () => track(el.dataset.track)));
  track('page_view', {page: location.pathname.split('/').pop()});
});

// Barra de revisión: solo para la propuesta (permite volver al índice desde cada prototipo).
document.addEventListener('DOMContentLoaded', () => {
  if (document.body.dataset.noreview !== undefined) return;
  const bar = document.createElement('a');
  bar.href = './';
  bar.textContent = '← Volver a la propuesta · Prototipo';
  bar.style.cssText = 'position:fixed;left:14px;bottom:14px;z-index:60;background:#123F3D;color:#fff;font:600 13px/1 Inter,sans-serif;padding:10px 14px;border-radius:999px;text-decoration:none;box-shadow:0 6px 20px rgba(0,0,0,.25)';
  const fit = () => bar.style.bottom = window.innerWidth < 760 ? '86px' : '14px';
  fit(); window.addEventListener('resize', fit);
  document.body.appendChild(bar);
});
