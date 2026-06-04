document.addEventListener('DOMContentLoaded', function () {
    // Slider Showcase
    const slides = document.querySelectorAll('.bst-slide');
    const dots = document.querySelectorAll('.bst-dot');
    const prevBtn = document.getElementById('sliderPrevBtn');
    const nextBtn = document.getElementById('sliderNextBtn');
    let currentSlide = 0;

    function showSlide(index) {
        if (!slides.length || !dots.length) return;
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        currentSlide = index;
    }

    if (slides.length > 0 && prevBtn && nextBtn) {
        nextBtn.addEventListener('click', () => {
            showSlide((currentSlide + 1) % slides.length);
        });

        prevBtn.addEventListener('click', () => {
            showSlide((currentSlide - 1 + slides.length) % slides.length);
        });

        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                showSlide(parseInt(dot.dataset.index));
            });
        });

        showSlide(0); // Initial slide
    }


    // Trends Grid Filter
    const trendsData = [
        { id: 1, title: 'Bàn Trà Gỗ Óc Chó Nguyên Khối', desc: 'Vẻ đẹp mộc mạc và sang trọng', img: 'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&q=80', category: 'ban' },
        { id: 2, title: 'Giường Bay Hiện Đại', desc: 'Thiết kế tối giản, tinh tế', img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80', category: 'giuong-nam' },
        { id: 3, title: 'Sofa Băng Da Bò Ý', desc: 'Đẳng cấp và êm ái', img: 'https://images.unsplash.com/photo-1540574163026-643ea200b52b?w=600&q=80', category: 'sofa' },
        { id: 4, title: 'Kệ Tivi Treo Tường Thông Minh', desc: 'Tối ưu không gian sống', img: 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?w=600&q=80', category: 'tu-ke' },
        { id: 5, title: 'Bàn Ăn Mặt Đá Tự Nhiên', desc: 'Điểm nhấn cho phòng bếp', img: 'https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=600&q=80', category: 'ban' },
        { id: 6, title: 'Tủ Quần Áo Cánh Kính', desc: 'Trưng bày và lưu trữ hiệu quả', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80', category: 'tu-ke' },
        { id: 7, title: 'Sofa Góc Vải Nhung', desc: 'Sự mềm mại và quyến rũ', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80', category: 'sofa' },
        { id: 8, title: 'Giường Ngủ Bọc Nệm Cao Cấp', desc: 'Giấc ngủ trọn vẹn', img: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&q=80', category: 'giuong-nam' },
        { id: 9, title: 'Bàn Console Trang Trí', desc: 'Nét chấm phá nghệ thuật', img: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=600&q=80', category: 'ban' },
        { id: 10, title: 'Tủ Rượu Âm Tường', desc: 'Đam mê của người sành sỏi', img: 'https://images.unsplash.com/photo-1581622558352-a20fdc9f3583?w=600&q=80', category: 'tu-ke' },
        { id: 11, title: 'Ghế Bành Thư Giãn', desc: 'Góc đọc sách lý tưởng', img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&q=80', category: 'sofa' },
        { id: 12, title: 'Giường Tầng Thông Minh', desc: 'Giải pháp cho không gian nhỏ', img: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&q=80', category: 'giuong-nam' }
    ];

    const grid = document.getElementById('trendsGrid');
    const filterBtns = document.querySelectorAll('.trends-filter-btn');

    function renderGrid(filter = 'all') {
        if (!grid) return;

        grid.style.opacity = 0;

        setTimeout(() => {
            grid.innerHTML = '';
            const filteredData = filter === 'all'
                ? trendsData
                : trendsData.filter(item => item.category === filter);

            filteredData.forEach((item, index) => {
                const card = document.createElement('a');
                card.href = "#"; // Make the whole card a link
                card.className = 'trend-card';
                card.setAttribute('data-category', item.category);
                card.style.animationDelay = `${index * 50}ms`;

                card.innerHTML = `
                    <div class="trend-img-wrapper">
                        <img src="${item.img}" alt="${item.title}">
                    </div>
                    <div class="trend-content">
                        <h3 class="trend-card-title">${item.title}</h3>
                        <p class="trend-card-desc">${item.desc}</p>
                    </div>
                `;
                grid.appendChild(card);
            });

            grid.style.opacity = 1;
        }, 300); // Match transition time
    }

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderGrid(btn.dataset.filter);
            });
        });

        renderGrid(); // Initial render
    }
});