// ============================================================
//  components/Projects.js
//  Data: PROJECTS  ← js/config.js
// ============================================================
const Projects = (() => {

  function _card(p) {
    return `
      <div class="proj-card reveal">
        <div class="proj-card-inner">
          <img
            src="${p.image}"
            alt="${p.label}"
            class="proj-card-img"
            onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
          />
          <div class="proj-card-placeholder">
            <span>🖼️</span>
            <span class="proj-placeholder-text">${p.label}</span>
          </div>
          <div class="proj-card-overlay">
            <span class="proj-card-label">${p.label}</span>
          </div>
        </div>
      </div>`;
  }

  function render() {
    return `
      <section id="projects">
        <div class="proj-header reveal">
          <h2 class="proj-title">Dự Án Tiêu Biểu</h2>
        </div>
        <div class="proj-grid container">
          ${PROJECTS.map(_card).join('')}
        </div>
      </section>`;
  }

  function init() {}

  return { render, init };
})();