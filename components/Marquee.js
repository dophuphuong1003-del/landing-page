// ============================================================
//  components/Marquee.js
// ============================================================

const Marquee = (() => {

  const ITEMS = [
    'In Offset', 'In Kỹ Thuật Số', 'Bao Bì Hộp Giấy',
    'Tem Nhãn', 'Hiflex – Backdrop', 'Vật Phẩm Văn Phòng',
    'Giao Hàng Nhanh', 'Báo Giá 30 Phút',
  ];

  function render() {
    // Duplicate 4× so the loop is seamless
    const items = Array(4).fill(ITEMS).flat()
      .map(t => `<span>${t}</span><span class="dot">◆</span>`)
      .join('');

    return `
      <div class="marquee-wrap">
        <div class="marquee-track">${items}</div>
      </div>`;
  }

  // No special JS init needed – animation is pure CSS
  function init() {}

  return { render, init };
})();