// ============================================================
//  components/PainPoints.js
// ============================================================
const PainPoints = (() => {
  function render() {
   const items = PAIN_POINTS.map(p => `
  <div class="pain-item reveal">

    <div class="pain-icon-wrap">
      <img
        src="${p.image}"
        alt="${p.text}"
        class="pain-icon-img"
      />
    </div>

    <p class="pain-h2">
      ${p.h2}
    </p>

    <p class="pain-text">
      ${p.text}
    </p>

  </div>
`).join('');
    return `
    <section id="pain">
      <div class="container">
        <p class="pain-title">
          Khó Khăn Khi Thiết Kế & In Ấn
          <strong> Bao Bì Hiện Tại Chưa Đủ Chuyên Nghiệp?</strong>
        </p>
        <div class="pain-grid">
          ${items}
        </div>
      </div>
    </section>
    `;
  }
  function init(){}
  return { render, init };

})();




