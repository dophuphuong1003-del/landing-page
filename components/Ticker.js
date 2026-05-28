// ============================================================
//  components/Ticker.js
//  Data: TICKER_DATA  ← js/config.js
// ============================================================
const Ticker = (() => {

  function _item({ text, sub }) {
    return `
      <div class="ticker-item">
        <span class="ticker-star">✦</span>
        <div class="ticker-text-wrap">
          <span class="ticker-text">${text}</span>
          <span class="ticker-sub">${sub}</span>
        </div>
      </div>`;
  }

  function render() {
    // Nhân đôi để loop liền mạch
    const items = [...TICKER_DATA, ...TICKER_DATA]
      .map(_item).join('');

    return `
      <div id="ticker">
        <div class="ticker-track">${items}</div>
      </div>`;
  }

  function init() {}

  return { render, init };
})();