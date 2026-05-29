const CAITAO_PROJECTS = [
  // Biệt thự
  { title: "CẢI TẠO BIỆT THỰ VINHOMES RIVERSIDE ANH QUÂN", customer: "Anh Quân", area: "240m²", style: "Tân cổ điển", type: "biet-thu", img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80" },
  { title: "CẢI TẠO BIỆT THỰ KHU ĐÔ THỊ AN KHÁNH CHỊ HƯƠNG", customer: "Chị Hương", area: "185m²", style: "Hiện đại", type: "biet-thu", img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&q=80" },
  { title: "CẢI TẠO BIỆT THỰ ECOPARK PHASE 5 ANH TOÀN", customer: "Anh Toàn", area: "310m²", style: "Indochine", type: "biet-thu", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80" },
  { title: "CẢI TẠO BIỆT THỰ THE MANOR CHỊ THANH", customer: "Chị Thanh", area: "160m²", style: "Luxury", type: "biet-thu", img: "https://images.unsplash.com/photo-1602872030219-ad2b9a54315c?w=600&q=80" },
  { title: "CẢI TẠO BIỆT THỰ CIPUTRA LAKEVIEW ANH DŨNG", customer: "Anh Dũng", area: "280m²", style: "Hiện đại", type: "biet-thu", img: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&q=80" },
  { title: "CẢI TẠO BIỆT THỰ VINHOMES STAR CITY THANH HOÁ CHỊ PHƯƠNG", customer: "Chị Phương", area: "195m²", style: "Tân cổ điển", type: "biet-thu", img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80" },

  // Nhà phố
  { title: "CẢI TẠO NHÀ PHỐ QUẬN 2 CHỊ LIÊN", customer: "Chị Liên", area: "90m²", style: "Hiện đại", type: "nha-pho", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80" },
  { title: "CẢI TẠO NHÀ PHỐ TÂY HỒ ANH TUẤN", customer: "Anh Tuấn", area: "75m²", style: "Tối giản", type: "nha-pho", img: "https://images.unsplash.com/photo-1588854337236-6889d631f379?w=600&q=80" },
  { title: "CẢI TẠO NHÀ PHỐ BÌNH DƯƠNG ANH NGHĨA", customer: "Anh Nghĩa", area: "120m²", style: "Scandinavian", type: "nha-pho", img: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80" },
  { title: "CẢI TẠO NHÀ PHỐ LONG BIÊN CHỊ THỦY", customer: "Chị Thủy", area: "85m²", style: "Indochine", type: "nha-pho", img: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&q=80" },
  { title: "CẢI TẠO NHÀ PHỐ HẢI PHÒNG ANH KHÁNH", customer: "Anh Khánh", area: "105m²", style: "Tân cổ điển", type: "nha-pho", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80" },

  // Chung cư
  { title: "CẢI TẠO CHUNG CƯ VINHOMES METROPOLIS ANH BÌNH", customer: "Anh Bình", area: "98m²", style: "Hiện đại", type: "chung-cu", img: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=600&q=80" },
  { title: "CẢI TẠO CHUNG CƯ GOLD VIEW CHỊ NGỌC", customer: "Chị Ngọc", area: "68m²", style: "Tối giản", type: "chung-cu", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80" },
  { title: "CẢI TẠO CHUNG CƯ THE LANDMARK 81 ANH KHOA", customer: "Anh Khoa", area: "142m²", style: "Luxury", type: "chung-cu", img: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&q=80" },
  { title: "CẢI TẠO CHUNG CƯ TIMES CITY CHỊ MAI", customer: "Chị Mai", area: "78m²", style: "Scandinavian", type: "chung-cu", img: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&q=80" },
  { title: "CẢI TẠO CHUNG CƯ MASTERI AN PHÚ ANH LONG", customer: "Anh Long", area: "55m²", style: "Hiện đại", type: "chung-cu", img: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&q=80" },
  { title: "CẢI TẠO CHUNG CƯ GREENBAY MỄ TRÌ CHỊ HỒNG", customer: "Chị Hồng", area: "62m²", style: "Tân cổ điển", type: "chung-cu", img: "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=600&q=80" },

  // Văn phòng
  { title: "CẢI TẠO VĂN PHÒNG VIETCOMBANK TOWER", customer: "Vietcombank", area: "450m²", style: "Corporate", type: "van-phong", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80" },
  { title: "CẢI TẠO VĂN PHÒNG CO-WORKING TOONG ĐỐNG ĐA", customer: "Toong", area: "380m²", style: "Sáng tạo", type: "van-phong", img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80" },
  { title: "CẢI TẠO VĂN PHÒNG FPT TOWER HÀ NỘI", customer: "FPT", area: "620m²", style: "Tối giản", type: "van-phong", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80" },
  { title: "CẢI TẠO VĂN PHÒNG MASAN GROUP TP.HCM", customer: "Masan Group", area: "550m²", style: "Corporate", type: "van-phong", img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80" },
  { title: "CẢI TẠO VĂN PHÒNG VINGROUP SKY LAKE", customer: "Vingroup", area: "800m²", style: "Luxury", type: "van-phong", img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80" },
];

const CT_PER_PAGE = 9;
let ctCurrentTab = 'all';
let ctCurrentPage = 1;

const ctTypeMap = {
  'biet-thu': 'Biệt thự',
  'chung-cu': 'Chung cư',
  'nha-pho': 'Nhà phố',
  'van-phong': 'Văn phòng'
};

function ctFiltered() {
  if (ctCurrentTab === 'all') return CAITAO_PROJECTS;
  return CAITAO_PROJECTS.filter(p => p.type === ctCurrentTab);
}

function ctRenderCards() {
  const data = ctFiltered();
  const total = data.length;
  const totalPages = Math.ceil(total / CT_PER_PAGE);
  if (ctCurrentPage > totalPages) ctCurrentPage = 1;

  const slice = data.slice((ctCurrentPage - 1) * CT_PER_PAGE, ctCurrentPage * CT_PER_PAGE);
  const grid = document.getElementById('cardGrid');

  if (!grid) return;

  grid.innerHTML = slice.map(p => `
    <article class="card">
      <div class="card-image-wrap">
        <img src="${p.img}" alt="${p.title}" loading="lazy">
        <div class="card-overlay">
          <a href="bao-gia.html" class="overlay-btn quote">Báo Giá</a>
          <a href="du-an-chi-tiet.html" class="overlay-btn detail">Xem Chi Tiết</a>
        </div>
      </div>
      <div class="card-body">
        <h3 class="card-title">${p.title}</h3>
        <hr class="card-divider">
        <div class="card-meta">
          <div class="meta-item">Khách hàng: <span>${p.customer}</span></div>
          <div class="meta-item">Diện tích: <span>${p.area}</span></div>
          <div class="meta-item">Phong cách: <span>${p.style}</span></div>
          <div class="meta-item">Loại hình: <span>${ctTypeMap[p.type] || p.type}</span></div>
        </div>
      </div>
    </article>
  `).join('');

  ctRenderPagination(totalPages);
}

function ctRenderPagination(totalPages) {
  const pg = document.getElementById('pagination');
  if (!pg) return;
  if (totalPages <= 1) { pg.innerHTML = ''; return; }

  let html = `<button class="page-btn arrow" onclick="ctGoPage(${ctCurrentPage - 1})" ${ctCurrentPage === 1 ? 'disabled' : ''}>&#8592;</button>`;
  for (let i = 1; i <= totalPages; i++) {
    html += `<button class="page-btn ${i === ctCurrentPage ? 'active' : ''}" onclick="ctGoPage(${i})">${i}</button>`;
  }
  html += `<button class="page-btn arrow" onclick="ctGoPage(${ctCurrentPage + 1})" ${ctCurrentPage === totalPages ? 'disabled' : ''}>&#8594;</button>`;
  pg.innerHTML = html;
}

function ctGoPage(n) {
  const totalPages = Math.ceil(ctFiltered().length / CT_PER_PAGE);
  if (n < 1 || n > totalPages) return;
  ctCurrentPage = n;
  ctRenderCards();
  const gridSection = document.querySelector('.grid-section');
  if (gridSection) {
    gridSection.scrollIntoView({ behavior: 'smooth' });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-btn');
  if (tabButtons.length > 0) {
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        ctCurrentTab = btn.dataset.tab;
        ctCurrentPage = 1;
        ctRenderCards();
      });
    });
    ctRenderCards();
  }
});
