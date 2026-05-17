// ============================================================
//  components/Hero.js
// ============================================================

const Hero = (() => {

  function render() {
    return `
      <section id="hero">

        <!-- Banner -->
        <img
          src="../static/DMT.fB_Banner_vn.jpg"
          alt="MyFarm Banner"
          class="hero-banner"
        />

        <!-- Overlay content -->
        <div class="hero-overlay">
        </div>

      </section>
    `;
  }

  function init() {}

  return { render, init };

})();