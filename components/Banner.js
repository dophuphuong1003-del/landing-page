// ============================================================
//  components/Banner.js
// ============================================================
const Banner = (() => {

  function render() {

    return `
      <section id="banner-section">

        <!-- LINK -->
        <a
          href="https://forms.gle/1gFcuP7u9isDf3qEA"
          target="_blank"
          rel="noopener noreferrer"
          class="banner-link"
        >

          <!-- Banner -->
          <img
            src="public/static/group_14518.png"
            alt="MyFarm Banner"
            class="banner-image"
          />

        </a>

        <!-- Overlay -->
        <div class="banner-overlay"></div>

      </section>
    `;
  }

  function init(){}

  return {
    render,
    init
  };

})();