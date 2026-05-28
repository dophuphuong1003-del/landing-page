// ============================================================
//  components/SuMenh.js
//  Data: SUMENH_DATA  ← js/config.js
// ============================================================
const SuMenh = (() => {

  function _card({ icon, title, desc }) {
    return `
      <div class="sm-card reveal">
        <div class="sm-icon-wrap">
          <img
            src="${icon}" alt="${title}" class="sm-icon"
            onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
          />
        </div>
        <h3 class="sm-title">${title}</h3>
        <p class="sm-desc">${desc}</p>
      </div>`;
  }

  function render() {
    return `
      <section id="sumenh">
        <div class="sm-inner container">
          ${SUMENH_DATA.map(_card).join('')}
        </div>
      </section>`;
  }

  function init() {}

  return { render, init };
})();