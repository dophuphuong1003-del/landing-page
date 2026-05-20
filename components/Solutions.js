// ============================================================
//  components/Solutions.js
// ============================================================
const Solutions = (() => {

  function render() {

    const groups = SOLUTIONS.map(group => {

      const items = group.items.map(item => `
        <li class="solutions-item">

          <!-- CHECKBOX -->
          <div class="solutions-check">
            ✓
          </div>

          <!-- TEXT -->
          <span class="solutions-item-text">
            ${item}
          </span>

        </li>
      `).join('');

      return `
        <div class="solutions-group">

          <h3 class="solutions-group-title">
            ${group.title}
          </h3>

          <ul class="solutions-list">
            ${items}
          </ul>

        </div>
      `;
    }).join('');

    return `
    <section id="solutions">

      <div class="solutions-inner container">

        <!-- LEFT IMAGE -->
        <div class="solutions-image-wrap">

          <img
            src="public/static/giaiphap_dmt.jpg"
            alt="Giải Pháp Từ DEMETER FOR BUSINESS"
            class="solutions-image"
          />

        </div>

        <!-- RIGHT CONTENT -->
        <div class="solutions-content">

          <div class="sec-label">
            Giải Pháp Từ ${CONFIG.companyName} FOR BUSINESS
          </div>

          <h2 class="solutions-title">
            Thiết Kế Sáng Tạo<br>
            In Ấn Chuyên Nghiệp
          </h2>

          ${groups}

          <div class="solutions-btn-wrap">

            <a
              href="https://drive.google.com/file/d/1x-LCc7lhnCofnqQqNwvGqwJOFED4jsQ9/view"
              target="_blank"
              rel="noopener noreferrer"
              class="solutions-btn"
            >
              XEM THÊM HỒ SƠ NĂNG LỰC
            </a>

          </div>

        </div>

      </div>

    </section>
    `;
  }

  function init(){}

  return { render, init };

})();