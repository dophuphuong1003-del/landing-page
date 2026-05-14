// ============================================================
//  components/Contact.js
// ============================================================
/*
const Contact = (() => {

  function _serviceOptions() {
    return SERVICES.map(s =>
      `<option value="${s.title}">${s.title}</option>`
    ).join('');
  }

  function render() {
    return `
      <section id="contact">
        <div class="contact-inner">

          <!-- LEFT: Info -->
          <div class="contact-left reveal">
            <div class="section-label" style="color:#E02020">Liên Hệ Ngay</div>
            <h2 class="section-title">Nhận Báo Giá<br><span class="red">Trong 30'</span></h2>
            <p class="contact-sub">
              Gửi yêu cầu hoặc liên hệ trực tiếp – chúng tôi phản hồi trong vòng 30 phút trong giờ hành chính.
            </p>
            <ul class="contact-info">
              <li>
                <div class="ico">📞</div>
                <a href="tel:${CONFIG.phone}"><span>${CONFIG.phone}</span></a>
              </li>
              <li>
                <div class="ico">✉️</div>
                <a href="mailto:${CONFIG.email}"><span>${CONFIG.email}</span></a>
              </li>
              <li>
                <div class="ico">📍</div>
                <span>${CONFIG.address}</span>
              </li>
              <li>
                <div class="ico">💬</div>
                <a href="https://zalo.me/${CONFIG.zalo}" target="_blank">
                  <span>Zalo: ${CONFIG.zalo}</span>
                </a>
              </li>
            </ul>
          </div>

          <!-- RIGHT: Form -->
          <div class="reveal">
            <form class="contact-form" id="contactForm" novalidate>
              <div class="form-row">
                <div class="form-group">
                  <label>Họ và Tên *</label>
                  <input type="text" name="name" placeholder="Nguyễn Văn A" required />
                </div>
                <div class="form-group">
                  <label>Số Điện Thoại *</label>
                  <input type="tel" name="phone" placeholder="0909 xxx xxx" required />
                </div>
              </div>
              <div class="form-group">
                <label>Email</label>
                <input type="email" name="email" placeholder="email@congty.vn" />
              </div>
              <div class="form-group">
                <label>Dịch Vụ Cần Báo Giá</label>
                <select name="service">
                  <option value="">-- Chọn dịch vụ --</option>
                  ${_serviceOptions()}
                </select>
              </div>
              <div class="form-group">
                <label>Mô Tả Yêu Cầu</label>
                <textarea name="message" placeholder="Số lượng, kích thước, chất liệu, thời hạn cần..."></textarea>
              </div>
              <button type="submit" class="form-submit">🚀 Gửi Yêu Cầu Báo Giá</button>
              <p class="form-note">Chúng tôi sẽ liên hệ trong vòng 30 phút</p>
              <div id="form-success">✅ Cảm ơn! Chúng tôi sẽ liên hệ lại với bạn sớm nhất.</div>
            </form>
          </div>

        </div>
      </section>`;
  }

  function init() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const btn   = this.querySelector('.form-submit');
      const name  = this.querySelector('[name=name]').value.trim();
      const phone = this.querySelector('[name=phone]').value.trim();

      if (!name || !phone) {
        _showError(this.querySelector('[name=name]'), 'Vui lòng nhập họ tên và số điện thoại.');
        return;
      }

      // Loading state
      btn.textContent = '⏳ Đang gửi...';
      btn.disabled = true;

      // ── Replace this setTimeout with a real fetch() call ──
      // fetch('/api/contact.php', {
      //   method: 'POST',
      //   body: new FormData(this)
      // }).then(r => r.json()).then(data => { ... });

      setTimeout(() => {
        btn.style.display = 'none';
        document.getElementById('form-success').style.display = 'block';
        form.reset();
      }, 1200);
    });
  }

  function _showError(el, msg) {
    el.focus();
    el.style.borderColor = 'var(--red-light)';
    setTimeout(() => el.style.borderColor = '', 2000);
    // Optionally show toast / tooltip
    alert(msg);
  }

  return { render, init };
})();
*/