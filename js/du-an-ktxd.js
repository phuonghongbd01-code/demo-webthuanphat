// js/du-an-ktxd.js
// Dữ liệu dự án KIẾN TRÚC & XÂY DỰNG (xây thô, xây phần thô, xây dựng hoàn thiện)

const PROJECTS = [
  {
    title: "XÂY DỰNG PHẦN THÔ BIỆT THỰ 3 TẦNG VINHOMES RIVERSIDE",
    customer: "Anh Quốc",
    area: "320m²",
    style: "Tân cổ điển",
    type: "biet-thu",
    tag: "Xây phần thô",
    img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80"
  },
  {
    title: "THI CÔNG XÂY THÔ BIỆT THỰ 4 TẦNG ECOPARK HƯNG YÊN",
    customer: "Chị Hương",
    area: "415m²",
    style: "Hiện đại",
    type: "biet-thu",
    tag: "Xây phần thô",
    img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&q=80"
  },
  {
    title: "XÂY DỰNG PHẦN THÔ BIỆT THỰ SONG LẬP THE MANOR CENTRAL PARK",
    customer: "Anh Mạnh",
    area: "280m²",
    style: "Hiện đại",
    type: "biet-thu",
    tag: "Xây phần thô",
    img: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80"
  },
  {
    title: "XÂY DỰNG HOÀN THIỆN NHÀ PHỐ 5 TẦNG QUẬN BÌNH THẠNH",
    customer: "Anh Tâm",
    area: "180m²",
    style: "Hiện đại",
    type: "nha-pho",
    tag: "Xây hoàn thiện",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80"
  },
  {
    title: "THI CÔNG XÂY THÔ NHÀ PHỐ LIỀN KỀ VẠN PHÚC HÀ ĐÔNG",
    customer: "Chị Thúy",
    area: "120m²",
    style: "Tân cổ điển",
    type: "nha-pho",
    tag: "Xây phần thô",
    img: "https://images.unsplash.com/photo-1588854337236-6889d631f379?w=600&q=80"
  },
  {
    title: "XÂY DỰNG NHÀ PHỐ 4 TẦNG HIỆN ĐẠI QUẬN THỦ ĐỨC",
    customer: "Anh Hải",
    area: "145m²",
    style: "Hiện đại",
    type: "nha-pho",
    tag: "Xây hoàn thiện",
    img: "https://images.unsplash.com/photo-1602872030219-ad2b9a54315c?w=600&q=80"
  },
  {
    title: "THI CÔNG XÂY THÔ CHUNG CƯ 15 TẦNG SUNSHINE AVENUE",
    customer: "CĐT Sunshine",
    area: "4.200m²",
    style: "Hiện đại",
    type: "chung-cu",
    tag: "Xây phần thô",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80"
  },
  {
    title: "XÂY DỰNG HOÀN THIỆN CHUNG CƯ THE PANORAMA VINHOMES",
    customer: "CĐT Vinhomes",
    area: "6.800m²",
    style: "Tối giản",
    type: "chung-cu",
    tag: "Xây hoàn thiện",
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80"
  },
  {
    title: "THI CÔNG PHẦN THÂN VÀ MÁI CHUNG CƯ MIDTOWN PHÚ MỸ HƯNG",
    customer: "CĐT PMH",
    area: "5.500m²",
    style: "Hiện đại",
    type: "chung-cu",
    tag: "Xây phần thô",
    img: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=600&q=80"
  },
  {
    title: "XÂY DỰNG TÒA NHÀ VĂN PHÒNG 8 TẦNG QUẬN BA ĐÌNH",
    customer: "Công ty ABC",
    area: "2.400m²",
    style: "Hiện đại",
    type: "van-phong",
    tag: "Xây hoàn thiện",
    img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80"
  },
  {
    title: "THI CÔNG PHẦN THÔ TÒA VĂN PHÒNG DIAMOND PLAZA MỞ RỘNG",
    customer: "Tập đoàn XYZ",
    area: "3.100m²",
    style: "Tối giản",
    type: "van-phong",
    tag: "Xây phần thô",
    img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80"
  },
  {
    title: "XÂY DỰNG HOÀN THIỆN VĂN PHÒNG CO-WORKING TECHZONE",
    customer: "Công ty Techzone",
    area: "800m²",
    style: "Sáng tạo",
    type: "van-phong",
    tag: "Xây hoàn thiện",
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80"
  },
  {
    title: "XÂY DỰNG BIỆT THỰ ĐƠN LẬP 2 TẦNG STELLA MEGA CITY CẦN THƠ",
    customer: "Anh Sơn",
    area: "248m²",
    style: "Tân cổ điển",
    type: "biet-thu",
    tag: "Xây hoàn thiện",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80"
  },
  {
    title: "THI CÔNG XÂY THÔ BIỆT THỰ WESTA DƯƠNG NỘI HÀ NỘI",
    customer: "Anh Bình",
    area: "395m²",
    style: "Indochine",
    type: "biet-thu",
    tag: "Xây phần thô",
    img: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&q=80"
  },
  {
    title: "XÂY DỰNG NHÀ PHỐ TÂN CỔ ĐIỂN 3 TẦNG QUẬN 12 TP.HCM",
    customer: "Chị Nga",
    area: "160m²",
    style: "Tân cổ điển",
    type: "nha-pho",
    tag: "Xây hoàn thiện",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
  },
  {
    title: "THI CÔNG XÂY DỰNG CHUNG CƯ THE ASCENT THẢO ĐIỀN",
    customer: "CĐT Tiến Phát",
    area: "7.200m²",
    style: "Hiện đại",
    type: "chung-cu",
    tag: "Xây phần thô",
    img: "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=600&q=80"
  },
  {
    title: "XÂY DỰNG HOÀN THIỆN TÒA VP VẠN XUÂN TOWER LONG BIÊN",
    customer: "Tập đoàn Vạn Xuân",
    area: "1.800m²",
    style: "Hiện đại",
    type: "van-phong",
    tag: "Xây hoàn thiện",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80"
  },
  {
    title: "THI CÔNG PHẦN THÔ NHÀ PHỐ LIÊN KẾ KHU ĐÔ THỊ SALA",
    customer: "Chị Vy",
    area: "130m²",
    style: "Hiện đại",
    type: "nha-pho",
    tag: "Xây phần thô",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80"
  },
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
          <a href="lien-he.html" class="overlay-btn quote">Nhận Báo Giá</a>
          <a href="du-an-chi-tiet.html" class="overlay-btn detail">Xem Chi Tiết</a>
        </div>
      </div>
      <div class="card-body">
        <h3 class="card-title">${p.title}</h3>
        <hr class="card-divider">
        <div class="card-meta">
          <div class="meta-item">Chủ đầu tư: <span>${p.customer}</span></div>
          <div class="meta-item">Diện tích: <span>${p.area}</span></div>
          <div class="meta-item">Hạng mục: <span>${p.tag}</span></div>
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
  const cardGrid = document.getElementById('cardGrid');

  if (cardGrid) {
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
    }
    renderCards();
  }
});
