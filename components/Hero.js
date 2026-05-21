// ============================================================
//  components/Hero.js
// ============================================================

const Hero = (() => {

  function render() {
    return `
      <section id="hero">

        <!-- Banner -->
        <img
          src="public/static/dmt_banner_new.jpg"
          alt="MyFarm Banner"
          class="hero-banner"
         
        <!-- Overlay content -->
        <div class="hero-overlay">
        </div>

      </section>
    `;
  }

  function init() {}

  return { render, init };

})();