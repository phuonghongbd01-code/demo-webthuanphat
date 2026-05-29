const PROJECTS = [
  { title: "DỰ ÁN THI CÔNG NỘI THẤT BIỆT THỰ VINHOMES STAR CITY ANH TÙNG", customer: "Anh Tùng", area: "115m²", style: "Hiện đại", type: "biet-thu", img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80" },
  { title: "DỰ ÁN THI CÔNG NỘI THẤT BIỆT THỰ AN LẠC GREEN SYMPHONY", customer: "Chị Oanh", area: "98m²", style: "Hiện đại", type: "biet-thu", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80" },
  { title: "DỰ ÁN THI CÔNG NỘI THẤT BIỆT THỰ VINHOMES OCEANPARK 2", customer: "Anh Dương", area: "65m²", style: "Hiện đại", type: "biet-thu", img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80" },
  { title: "DỰ ÁN NỘI THẤT CHUNG CƯ VINHOMES CENTRAL PARK", customer: "Chị Lan", area: "72m²", style: "Tân cổ điển", type: "chung-cu", img: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=600&q=80" },
  { title: "DỰ ÁN NỘI THẤT CHUNG CƯ THE METROPOLE THỦ THIÊM", customer: "Anh Minh", area: "88m²", style: "Hiện đại", type: "chung-cu", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80" },
  { title: "DỰ ÁN THI CÔNG BIỆT THỰ ECOPARK HƯNG YÊN", customer: "Anh Hùng", area: "210m²", style: "Indochine", type: "biet-thu", img: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&q=80" },
  { title: "DỰ ÁN NỘI THẤT BIỆT THỰ GAMUDA GARDENS", customer: "Chị Hoa", area: "180m²", style: "Hiện đại", type: "biet-thu", img: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80" },
  { title: "DỰ ÁN NỘI THẤT CHUNG CƯ MASTERI THẢO ĐIỀN", customer: "Anh Tuấn", area: "55m²", style: "Scandinavian", type: "chung-cu", img: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&q=80" },
  { title: "DỰ ÁN THI CÔNG NỘI THẤT BIỆT THỰ PALM CITY", customer: "Chị Mai", area: "135m²", style: "Tropical", type: "biet-thu", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80" },
  { title: "DỰ ÁN NỘI THẤT CHUNG CƯ SUNWAH PEARL", customer: "Anh Phúc", area: "110m²", style: "Hiện đại", type: "chung-cu", img: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&q=80" },
  { title: "DỰ ÁN THI CÔNG BIỆT THỰ AQUA CITY NOVALAND", customer: "Chị Thảo", area: "160m²", style: "Hiện đại", type: "biet-thu", img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80" },
  { title: "DỰ ÁN NỘI THẤT CHUNG CƯ VINHOMES GRAND PARK", customer: "Anh Khoa", area: "68m²", style: "Tối giản", type: "chung-cu", img: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&q=80" },
  { title: "DỰ ÁN THI CÔNG NỘI THẤT BIỆT THỰ THE GLOBAL CITY", customer: "Anh Đạt", area: "220m²", style: "Luxury", type: "biet-thu", img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&q=80" },
  { title: "DỰ ÁN NỘI THẤT CHUNG CƯ EMPIRE CITY", customer: "Chị Ngọc", area: "92m²", style: "Hiện đại", type: "chung-cu", img: "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=600&q=80" },
  { title: "DỰ ÁN THI CÔNG BIỆT THỰ STELLA MEGA CITY CẦN THƠ", customer: "Anh Sơn", area: "148m²", style: "Tân cổ điển", type: "biet-thu", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80" },
  { title: "DỰ ÁN NỘI THẤT CHUNG CƯ VINHOMES SKY PARK BẮC GIANG", customer: "Chị Linh", area: "58m²", style: "Hiện đại", type: "chung-cu", img: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&q=80" },
  { title: "DỰ ÁN THI CÔNG BIỆT THỰ WESTA DƯƠNG NỘI", customer: "Anh Bình", area: "195m²", style: "Indochine", type: "biet-thu", img: "https://images.unsplash.com/photo-1602872030219-ad2b9a54315c?w=600&q=80" },
  { title: "DỰ ÁN NỘI THẤT CHUNG CƯ THE RIVER THỦ THIÊM", customer: "Anh Long", area: "103m²", style: "Hiện đại", type: "chung-cu", img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80" },
  { title: "DỰ ÁN THI CÔNG NHÀ PHỐ HIỆN ĐẠI SALA", customer: "Chị Vy", area: "120m²", style: "Hiện đại", type: "nha-pho", img: "https://images.unsplash.com/photo-1588854337236-6889d631f379?w=600&q=80" },
  { title: "DỰ ÁN THIẾT KẾ VĂN PHÒNG TECHCOMBANK", customer: "Techcombank", area: "350m²", style: "Tối giản", type: "van-phong", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80" },
  { title: "DỰ ÁN THI CÔNG NHÀ PHỐ TÂN CỔ ĐIỂN VẠN PHÚC", customer: "Anh Tiến", area: "135m²", style: "Tân cổ điển", type: "nha-pho", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80" },
  { title: "DỰ ÁN THIẾT KẾ VĂN PHÒNG CO-WORKING UP", customer: "UP", area: "600m²", style: "Sáng tạo", type: "van-phong", img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80" },
];

const PER_PAGE = 9;
let currentTab = 'all';
let currentPage = 1;

const typeMap = {
  'biet-thu': 'Biệt thự',
  'chung-cu': 'Chung cư',
  'nha-pho': 'Nhà phố',
  'van-phong': 'Văn phòng'
};

function filtered() {
  if (currentTab === 'all') return PROJECTS;
  return PROJECTS.filter(p => p.type === currentTab);
}

function renderCards() {
  const data = filtered();
  const total = data.length;
  const totalPages = Math.ceil(total / PER_PAGE);
  if (currentPage > totalPages) currentPage = 1;

  const slice = data.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);
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
          <div class="meta-item">Loại hình: <span>${typeMap[p.type] || p.type}</span></div>
        </div>
      </div>
    </article>
  `).join('');

  renderPagination(totalPages);
}

function renderPagination(totalPages) {
  const pg = document.getElementById('pagination');
  if (!pg) return;
  if (totalPages <= 1) { pg.innerHTML = ''; return; }

  let html = `<button class="page-btn arrow" onclick="goPage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>&#8592;</button>`;
  for (let i = 1; i <= totalPages; i++) {
    html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="goPage(${i})">${i}</button>`;
  }
  html += `<button class="page-btn arrow" onclick="goPage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>&#8594;</button>`;
  pg.innerHTML = html;
}

function goPage(n) {
  const totalPages = Math.ceil(filtered().length / PER_PAGE);
  if (n < 1 || n > totalPages) return;
  currentPage = n;
  renderCards();
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
        currentTab = btn.dataset.tab;
        currentPage = 1;
        renderCards();
      });
    });
    renderCards();
  }
});