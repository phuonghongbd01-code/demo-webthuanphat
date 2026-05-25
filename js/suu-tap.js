
// Accordion mobile
        function fmToggle(btn) {
            const item = btn.closest('.fm-acc-item');
            const body = item.querySelector('.fm-acc-body');
            const icon = btn.querySelector('i');
            const isOpen = item.classList.contains('open');

            document.querySelectorAll('.fm-acc-item.open').forEach(el => {
                el.classList.remove('open');
                el.querySelector('.fm-acc-body').style.maxHeight = null;
                el.querySelector('i').style.transform = 'rotate(0deg)';
            });

            if (!isOpen) {
                item.classList.add('open');
                body.style.maxHeight = body.scrollHeight + 'px';
                icon.style.transform = 'rotate(180deg)';
            }
        }

        // Đè trạng thái active cho menu Giới thiệu
        (function () {
            const navLinks = document.querySelectorAll('.main-nav > ul > li > a');
            const forceActive = () => {
                navLinks.forEach(link => {
                    const text = link.textContent.trim();
                    if (text === 'GIỚI THIỆU') {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            };
            window.addEventListener('load', forceActive);
            window.addEventListener('scroll', forceActive);
        })();

        // Xử lý sự kiện mở Modal bổ sung trong trang
        document.addEventListener('DOMContentLoaded', () => {
            const contactModal = document.getElementById('contactModal');
            const openCtaModal = document.getElementById('openCtaModal');
            if (contactModal && openCtaModal) {
                openCtaModal.addEventListener('click', (e) => {
                    e.preventDefault();
                    contactModal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                });
            }
        });

document.addEventListener('DOMContentLoaded', () => {
            const slides = document.querySelectorAll('.bst-slide');
            const dots = document.querySelectorAll('.bst-dot');
            const prevBtn = document.getElementById('sliderPrevBtn');
            const nextBtn = document.getElementById('sliderNextBtn');
            let currentSlide = 0;

            const changeSlide = (index) => {
                slides.forEach(slide => slide.classList.remove('active'));
                dots.forEach(dot => dot.classList.remove('active'));

                slides[index].classList.add('active');
                dots[index].classList.add('active');
                currentSlide = index;
            };

            if (prevBtn && nextBtn) {
                prevBtn.addEventListener('click', () => {
                    let prevIndex = (currentSlide - 1 + slides.length) % slides.length;
                    changeSlide(prevIndex);
                });

                nextBtn.addEventListener('click', () => {
                    let nextIndex = (currentSlide + 1) % slides.length;
                    changeSlide(nextIndex);
                });
            }

            dots.forEach((dot, idx) => {
                dot.addEventListener('click', () => {
                    changeSlide(idx);
                });
            });
        });

// Dữ liệu 8 bộ sưu tập theo đúng ảnh phác thảo
        const trendsData = [
            {
                title: "BST GIƯỜNG NGỦ GỖ ÓC CHÓ",
                desc: "Giường ngủ gỗ óc chó cao cấp",
                category: "giuong-nam",
                image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "BST BÀN ĂN GỖ ÓC CHÓ",
                desc: "Bàn ăn gỗ óc chó sang trọng",
                category: "ban",
                image: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "BST SOFA GỖ ÓC CHÓ",
                desc: "Sofa gỗ óc chó ấn tượng",
                category: "sofa",
                image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "BST BÀN TRANG ĐIỂM GỖ ÓC CHÓ",
                desc: "Bàn trang điểm gỗ óc chó đẹp",
                category: "ban",
                image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "BST KỆ TIVI GỖ ÓC CHÓ",
                desc: "Kệ tivi gỗ óc chó hiện đại",
                category: "tu-ke",
                image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "BST TỦ BẾP GỖ ÓC CHÓ",
                desc: "Tủ bếp gỗ óc chó tiện nghi",
                category: "tu-ke",
                image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "BST TỦ RƯỢU GỖ ÓC CHÓ",
                desc: "Tủ rượu gỗ óc chó sang trọng",
                category: "tu-ke",
                image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "BST BÀN TRÀ GỖ ÓC CHÓ",
                desc: "Bàn trà gỗ óc chó độc đáo",
                category: "ban",
                image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
            }
        ];

        let currentFilter = 'all';

        function renderTrends() {
            const grid = document.getElementById('trendsGrid');
            if (!grid) return;

            const filtered = trendsData.filter(item => {
                return currentFilter === 'all' || item.category === currentFilter;
            });

            grid.style.opacity = '0';

            setTimeout(() => {
                grid.innerHTML = '';

                if (filtered.length === 0) {
                    grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 60px; color: var(--text-muted);">Không tìm thấy bộ sưu tập nào thuộc nhóm này.</div>`;
                    grid.style.opacity = '1';
                    return;
                }

                filtered.forEach((item, idx) => {
                    const card = document.createElement('div');
                    card.className = 'trend-card';
                    card.style.animationDelay = `${idx * 0.05}s`;

                    card.innerHTML = `
                        <div class="trend-img-wrapper">
                            <img src="${item.image}" alt="${item.title}" onerror="this.src='https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80'">
                        </div>
                        <div class="trend-content">
                            <h3 class="trend-card-title">${item.title}</h3>
                            <p class="trend-card-desc">${item.desc}</p>
                        </div>
                    `;
                    grid.appendChild(card);
                });

                grid.style.opacity = '1';
            }, 200);
        }

        document.addEventListener('DOMContentLoaded', () => {
            const filterBtns = document.querySelectorAll('.trends-filter-btn');

            filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    filterBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');

                    currentFilter = btn.getAttribute('data-filter');
                    renderTrends();
                });
            });

            // Lần chạy đầu tiên
            renderTrends();
        });
