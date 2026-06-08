/**
 * du-an-chi-tiet.js
 * Xử lý slider thư viện ảnh: auto-play, prev/next, dots, thumbnails
 */

(function () {
    'use strict';

    // ── Lấy các phần tử DOM ──
    const slider    = document.getElementById('dactSlider');
    if (!slider) return; // Không có slider thì thoát

    const slides    = slider.querySelectorAll('.dact-slide');
    const dotsWrap  = document.getElementById('dactDots');
    const thumbsWrap= document.getElementById('dactThumbs');
    const btnPrev   = document.getElementById('dactPrev');
    const btnNext   = document.getElementById('dactNext');

    const totalSlides = slides.length;
    let currentIndex  = 0;
    let autoTimer     = null;
    const AUTO_DELAY  = 5000; // 5 giây

    // ── Tạo dots ──
    slides.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.classList.add('dact-dot');
        if (i === 0) dot.classList.add('active');
        dot.dataset.index = i;
        dot.addEventListener('click', () => goTo(i));
        dotsWrap.appendChild(dot);
    });

    // ── Hàm chuyển slide ──
    function goTo(index) {
        // Ẩn slide cũ
        slides[currentIndex].classList.remove('active');
        // Cập nhật dots
        dotsWrap.children[currentIndex].classList.remove('active');
        // Cập nhật thumbnails
        if (thumbsWrap) {
            thumbsWrap.querySelector('.dact-thumb.active')?.classList.remove('active');
            thumbsWrap.querySelector(`.dact-thumb[data-index="${index}"]`)?.classList.add('active');
        }

        currentIndex = (index + totalSlides) % totalSlides;

        // Hiện slide mới
        slides[currentIndex].classList.add('active');
        dotsWrap.children[currentIndex].classList.add('active');
    }

    function next() { goTo(currentIndex + 1); }
    function prev() { goTo(currentIndex - 1); }

    // ── Auto-play ──
    function startAuto() {
        stopAuto();
        autoTimer = setInterval(next, AUTO_DELAY);
    }

    function stopAuto() {
        if (autoTimer) {
            clearInterval(autoTimer);
            autoTimer = null;
        }
    }

    // ── Nút mũi tên ──
    btnPrev.addEventListener('click', () => { prev(); stopAuto(); startAuto(); });
    btnNext.addEventListener('click', () => { next(); stopAuto(); startAuto(); });

    // ── Thumbnail click ──
    if (thumbsWrap) {
        thumbsWrap.querySelectorAll('.dact-thumb').forEach(thumb => {
            thumb.addEventListener('click', () => {
                const idx = parseInt(thumb.dataset.index, 10);
                goTo(idx);
                stopAuto();
                startAuto();
            });
        });
    }

    // ── Dừng auto khi hover vào slider ──
    slider.addEventListener('mouseenter', stopAuto);
    slider.addEventListener('mouseleave', startAuto);

    // ── Swipe trên mobile ──
    let touchStartX = 0;
    slider.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].clientX;
    }, { passive: true });

    slider.addEventListener('touchend', e => {
        const dx = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(dx) > 50) {
            dx < 0 ? next() : prev();
            stopAuto();
            startAuto();
        }
    }, { passive: true });

    // ── Khởi động ──
    startAuto();

})();
