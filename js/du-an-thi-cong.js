// js/du-an-thi-cong.js
// Dữ liệu và logic hiển thị dự án THI CÔNG cho trang bao-gia-thi-cong.html

const TC_PROJECTS = [
  { title: "DỰ ÁN THI CÔNG TRỌN GÓI BIỆT THỰ VINHOMES STAR CITY", customer: "Anh Tùng", area: "250m²", style: "Hiện đại", type: "biet-thu", img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80" },
  { title: "DỰ ÁN THI CÔNG NỘI THẤT BIỆT THỰ AN LẠC GREEN SYMPHONY", customer: "Chị Oanh", area: "198m²", style: "Tân cổ điển", type: "biet-thu", img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80" },
  { title: "DỰ ÁN THI CÔNG NỘI THẤT BIỆT THỰ VINHOMES OCEANPARK 2", customer: "Anh Dương", area: "165m²", style: "Indochine", type: "biet-thu", img: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80" },
  { title: "DỰ ÁN THI CÔNG CHUNG CƯ VINHOMES CENTRAL PARK", customer: "Chị Lan", area: "72m²", style: "Hiện đại", type: "chung-cu", img: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=600&q=80" },
  { title: "DỰ ÁN THI CÔNG CHUNG CƯ THE METROPOLE THỦ THIÊM", customer: "Anh Minh", area: "88m²", style: "Luxury", type: "chung-cu", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80" },
  { title: "DỰ ÁN THI CÔNG BIỆT THỰ ECOPARK HƯNG YÊN", customer: "Anh Hùng", area: "310m²", style: "Tân cổ điển", type: "biet-thu", img: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&q=80" },
  { title: "DỰ ÁN THI CÔNG BIỆT THỰ GAMUDA GARDENS HÀ NỘI", customer: "Chị Hoa", area: "280m²", style: "Hiện đại", type: "biet-thu", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80" },
  { title: "DỰ ÁN THI CÔNG CHUNG CƯ MASTERI THẢO ĐIỀN", customer: "Anh Tuấn", area: "55m²", style: "Scandinavian", type: "chung-cu", img: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&q=80" },
  { title: "DỰ ÁN THI CÔNG BIỆT THỰ PALM CITY QUẬN 9", customer: "Chị Mai", area: "235m²", style: "Tropical", type: "biet-thu", img: "https://images.unsplash.com/photo-1600607687644-c7ddd0d03d2b?w=600&q=80" },
  { title: "DỰ ÁN THI CÔNG CHUNG CƯ SUNWAH PEARL BÌNH THẠNH", customer: "Anh Phúc", area: "110m²", style: "Hiện đại", type: "chung-cu", img: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&q=80" },
  { title: "DỰ ÁN THI CÔNG BIỆT THỰ AQUA CITY NOVALAND", customer: "Chị Thảo", area: "360m²", style: "Luxury", type: "biet-thu", img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80" },
  { title: "DỰ ÁN THI CÔNG CHUNG CƯ VINHOMES GRAND PARK", customer: "Anh Khoa", area: "68m²", style: "Tối giản", type: "chung-cu", img: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&q=80" },
  { title: "DỰ ÁN THI CÔNG BIỆT THỰ THE GLOBAL CITY Q.9", customer: "Anh Đạt", area: "420m²", style: "Hiện đại", type: "biet-thu", img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&q=80" },
  { title: "DỰ ÁN THI CÔNG CHUNG CƯ EMPIRE CITY THỦ THIÊM", customer: "Chị Ngọc", area: "92m²", style: "Hiện đại", type: "chung-cu", img: "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=600&q=80" },
  { title: "DỰ ÁN THI CÔNG NHÀ PHỐ HIỆN ĐẠI SALA ĐẠI QUANG MINH", customer: "Chị Vy", area: "180m²", style: "Hiện đại", type: "nha-pho", img: "https://images.unsplash.com/photo-1588854337236-6889d631f379?w=600&q=80" },
  { title: "DỰ ÁN THI CÔNG BIỆT THỰ STELLA MEGA CITY CẦN THƠ", customer: "Anh Sơn", area: "248m²", style: "Tân cổ điển", type: "biet-thu", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80" },
  { title: "DỰ ÁN THI CÔNG NHÀ PHỐ TÂN CỔ ĐIỂN VẠN PHÚC HÀ ĐÔNG", customer: "Anh Tiến", area: "135m²", style: "Tân cổ điển", type: "nha-pho", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80" },
  { title: "DỰ ÁN THI CÔNG BIỆT THỰ WESTA DƯƠNG NỘI HÀ NỘI", customer: "Anh Bình", area: "295m²", style: "Indochine", type: "biet-thu", img: "https://images.unsplash.com/photo-1602872030219-ad2b9a54315c?w=600&q=80" },
];

const TC_PER_PAGE = 9;
let tcCurrentPage = 1;

const tcTypeMap = {
  'biet-thu': 'Biệt thự',
  'chung-cu': 'Chung cư',
  'nha-pho': 'Nhà phố',
};

function tcFiltered() {
  return TC_PROJECTS;
}

function tcRenderCards() {
  const data = tcFiltered();
  const totalPages = Math.ceil(data.length / TC_PER_PAGE);
  if (tcCurrentPage > totalPages) tcCurrentPage = 1;

  const slice = data.slice((tcCurrentPage - 1) * TC_PER_PAGE, tcCurrentPage * TC_PER_PAGE);
  const grid = document.getElementById('cardGridTC');
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
          <div class="meta-item">Khách hàng: <span>${p.customer}</span></div>
          <div class="meta-item">Diện tích: <span>${p.area}</span></div>
          <div class="meta-item">Phong cách: <span>${p.style}</span></div>
          <div class="meta-item">Loại hình: <span>${tcTypeMap[p.type] || p.type}</span></div>
        </div>
      </div>
    </article>
  `).join('');

  tcRenderPagination(totalPages);
}

function tcRenderPagination(totalPages) {
  const pg = document.getElementById('paginationTC');
  if (!pg) return;
  if (totalPages <= 1) { pg.innerHTML = ''; return; }

  let html = `<button class="page-btn arrow" onclick="tcGoPage(${tcCurrentPage - 1})" ${tcCurrentPage === 1 ? 'disabled' : ''}>&#8592;</button>`;
  for (let i = 1; i <= totalPages; i++) {
    html += `<button class="page-btn ${i === tcCurrentPage ? 'active' : ''}" onclick="tcGoPage(${i})">${i}</button>`;
  }
  html += `<button class="page-btn arrow" onclick="tcGoPage(${tcCurrentPage + 1})" ${tcCurrentPage === totalPages ? 'disabled' : ''}>&#8594;</button>`;
  pg.innerHTML = html;
}

function tcGoPage(n) {
  const totalPages = Math.ceil(tcFiltered().length / TC_PER_PAGE);
  if (n < 1 || n > totalPages) return;
  tcCurrentPage = n;
  tcRenderCards();
  // Cuộn về đầu section dự án
  const heading = document.querySelector('#thi-cong .section-title-underline:nth-of-type(2)');
  if (heading) heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('cardGridTC')) {
    tcRenderCards();
  }
});
