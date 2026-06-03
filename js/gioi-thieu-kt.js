
// Toggle mobile footer accordion
        function fmToggle(btn) {
            const item = btn.closest('.fm-acc-item');
            const body = item.querySelector('.fm-acc-body');
            const icon = btn.querySelector('i');
            const isOpen = item.classList.contains('open');

            // Close all
            document.querySelectorAll('.fm-acc-item.open').forEach(el => {
                el.classList.remove('open');
                el.querySelector('.fm-acc-body').style.maxHeight = null;
                el.querySelector('i').style.transform = 'rotate(0deg)';
            });

            // Open clicked
            if (!isOpen) {
                item.classList.add('open');
                body.style.maxHeight = body.scrollHeight + 'px';
                icon.style.transform = 'rotate(180deg)';
            }
        }

        // Logic thay thế ảnh lỗi thông minh bằng ảnh Unsplash độ phân giải cao cực đẹp
        function handleImgError(img, type) {
            const fallbacks = {
                'ceo': 'images/ceo.png', // Sử dụng ảnh CEO local có sẵn
                'sitting': 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
                'discuss': 'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=800&q=80',
                'biet-thu': 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
                'chung-cu': 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
                'nha-pho': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
                'van-phong': 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
            };
            img.src = fallbacks[type] || 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80';
            img.onerror = null;
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

        // Kích hoạt Modal ở các nút tùy chỉnh trong trang
        document.addEventListener('DOMContentLoaded', () => {
            const contactModal = document.getElementById('contactModal');
            const openKtsBtn = document.getElementById('openContactModalChallenge');
            const ctaKtsBtn = document.getElementById('ctaKtsBtn');

            if (contactModal) {
                if (openKtsBtn) {
                    openKtsBtn.addEventListener('click', (e) => {
                        e.preventDefault();
                        contactModal.classList.add('active');
                        document.body.style.overflow = 'hidden';
                    });
                }
                if (ctaKtsBtn) {
                    ctaKtsBtn.addEventListener('click', (e) => {
                        e.preventDefault();
                        contactModal.classList.add('active');
                        document.body.style.overflow = 'hidden';
                    });
                }
            }
        });

// Dữ liệu 16 dự án chi tiết mô phỏng hoạt động phân trang và bộ lọc cực mượt
        const projectsData = [
            {
                title: "DỰ ÁN THIẾT KẾ BIỆT THỰ STARLAKE CÔ LIỆU",
                client: "Cô Liệu",
                area: "83m2",
                style: "Hiện đại",
                type: "Biệt thự",
                category: "biet-thu",
                image: "images/project_1.png"
            },
            {
                title: "DỰ ÁN THIẾT KẾ NỘI THẤT BIỆT THỰ VINHOMES STAR CITY ANH TÙNG",
                client: "Anh Tùng",
                area: "115m2",
                style: "Hiện đại",
                type: "Biệt thự",
                category: "biet-thu",
                image: "images/project_2.png"
            },
            {
                title: "DỰ ÁN THI CÔNG NỘI THẤT BIỆT THỰ AN LẠC GREEN SYMPHONY",
                client: "Chị Oanh",
                area: "98m2",
                style: "Hiện đại",
                type: "Biệt thự",
                category: "biet-thu",
                image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "CĂN HỘ CHUNG CƯ LUXURY VINHOMES METROPOLIS",
                client: "Anh Hùng",
                area: "110m2",
                style: "Luxury",
                type: "Chung cư",
                category: "chung-cu",
                image: "https://images.unsplash.com/photo-1545464693-f1798a373343?auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "NHÀ PHỐ HIỆN ĐẠI KHU ĐÔ THỊ SALA QUẬN 2",
                client: "Chị Vy",
                area: "120m2",
                style: "Hiện đại",
                type: "Nhà phố",
                category: "nha-pho",
                image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "VĂN PHÒNG LÀM VIỆC CAO CẤP TECHCOM BANK",
                client: "Techcombank",
                area: "350m2",
                style: "Tối giản",
                type: "Văn phòng",
                category: "van-phong",
                image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "DUPLEX CĂN HỘ CAO CẤP MASTERI THẢO ĐIỀN",
                client: "Chị Lan",
                area: "145m2",
                style: "Indochine",
                type: "Chung cư",
                category: "chung-cu",
                image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "BIỆT THỰ SINH THÁI ECOPARK GRAND THE ISLAND",
                client: "Chú Bình",
                area: "380m2",
                style: "Hiện đại",
                type: "Biệt thự",
                category: "biet-thu",
                image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "PENTHOUSE ĐẲNG CẤP LANDMARK 81",
                client: "Anh Minh",
                area: "220m2",
                style: "Hiện đại Luxury",
                type: "Chung cư",
                category: "chung-cu",
                image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "DỰ ÁN THIẾT KẾ VĂN PHÒNG ĐẠI DIỆN SHISEIDO",
                client: "Shiseido",
                area: "180m2",
                style: "Hiện đại",
                type: "Văn phòng",
                category: "van-phong",
                image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "THI CÔNG TRỌN GÓI NHÀ PHỐ TÂN CỔ ĐIỂN VẠN PHÚC CITY",
                client: "Anh Tiến",
                area: "135m2",
                style: "Tân cổ điển",
                type: "Nhà phố",
                category: "nha-pho",
                image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "BIỆT THỰ PHỐ MẶT TIỀN 3 TẦNG KĐT CIPUTRA",
                client: "Chị Trâm",
                area: "160m2",
                style: "Hiện đại",
                type: "Nhà phố",
                category: "nha-pho",
                image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "VĂN PHÒNG LÀM VIỆC TẬP ĐOÀN BẤT ĐỘNG SẢN VINGROUP",
                client: "Vingroup",
                area: "450m2",
                style: "Hiện đại",
                type: "Văn phòng",
                category: "van-phong",
                image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "CĂN HỘ CHUNG CƯ 3 PHÒNG NGỦ ROYAL CITY",
                client: "Cô Hạnh",
                area: "125m2",
                style: "Tân cổ điển",
                type: "Chung cư",
                category: "chung-cu",
                image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "DỰ ÁN THIẾT KẾ VĂN PHÒNG CO-WORKING SPACE UP",
                client: "UP Co-working",
                area: "600m2",
                style: "Sáng tạo",
                type: "Văn phòng",
                category: "van-phong",
                image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "BIỆT THỰ VƯỜN NGHỈ DƯỠNG MŨI NÉ HILLS",
                client: "Anh Tuấn",
                area: "450m2",
                style: "Nhiệt đới",
                type: "Biệt thự",
                category: "biet-thu",
                image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
            }
        ];

        const itemsPerPage = 8; // 2 dòng x 4 ô
        let currentPage = 1;
        let currentFilter = 'all';

        // Hàm render lưới dự án theo bộ lọc và số trang
        function renderProjects() {
            const grid = document.getElementById('projectGrid');
            if (!grid) return;

            // Lọc theo category
            const filtered = projectsData.filter(proj => {
                return currentFilter === 'all' || proj.category === currentFilter;
            });

            // Tính tổng số trang
            const totalItems = filtered.length;
            const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;

            // Ràng buộc trang hiện tại không vượt quá tổng số trang
            if (currentPage > totalPages) {
                currentPage = totalPages;
            }

            const startIndex = (currentPage - 1) * itemsPerPage;
            const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

            // Cắt mảng hiển thị trang hiện tại
            const pageItems = filtered.slice(startIndex, endIndex);

            // Hiệu ứng mờ nhòe nhẹ khi chuyển trang/lọc
            grid.style.opacity = '0';

            setTimeout(() => {
                grid.innerHTML = '';

                if (pageItems.length === 0) {
                    grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 80px 0; color: var(--text-muted); font-size:16px;">Không có dự án nào thuộc danh mục này.</div>`;
                    grid.style.opacity = '1';
                    renderPagination(totalPages);
                    return;
                }

                pageItems.forEach((proj, idx) => {
                    const card = document.createElement('div');
                    card.className = 'project-card';
                    // Hiệu ứng AOS mượt mà từng ô
                    card.style.animationDelay = `${idx * 0.05}s`;

                    card.innerHTML = `
                        <div class="project-img">
                            <img src="${proj.image}" alt="${proj.title}" onerror="handleImgError(this, '${proj.category}')">
                        </div>
                        <div class="project-info">
                            <h3 class="project-name">${proj.title}</h3>
                            <div class="project-meta">
                                <div class="meta-item">Khách hàng: <span>${proj.client}</span></div>
                                <div class="meta-item">Diện tích: <span>${proj.area}</span></div>
                                <div class="meta-item">Phong cách: <span>${proj.style}</span></div>
                                <div class="meta-item">Loại hình: <span>${proj.type}</span></div>
                            </div>
                        </div>
                    `;
                    grid.appendChild(card);
                });

                grid.style.opacity = '1';
                renderPagination(totalPages);
            }, 200);
        }

        // Dựng thanh phân trang (Pagination)
        function renderPagination(totalPages) {
            const paginationContainer = document.querySelector('.pagination');
            if (!paginationContainer) return;

            paginationContainer.innerHTML = '';

            // Nút Quay lại (chevron left)
            const prevBtn = document.createElement('button');
            prevBtn.className = 'page-btn';
            prevBtn.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
            prevBtn.disabled = currentPage === 1;
            prevBtn.addEventListener('click', () => {
                if (currentPage > 1) {
                    currentPage--;
                    renderProjects();
                    scrollToProjects();
                }
            });
            paginationContainer.appendChild(prevBtn);

            // Nút số trang
            for (let i = 1; i <= totalPages; i++) {
                const pageBtn = document.createElement('button');
                pageBtn.className = `page-btn ${i === currentPage ? 'active' : ''}`;
                pageBtn.innerText = i;
                pageBtn.addEventListener('click', () => {
                    if (currentPage !== i) {
                        currentPage = i;
                        renderProjects();
                        scrollToProjects();
                    }
                });
                paginationContainer.appendChild(pageBtn);
            }

            // Nút Kế tiếp (chevron right)
            const nextBtn = document.createElement('button');
            nextBtn.className = 'page-btn';
            nextBtn.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
            nextBtn.disabled = currentPage === totalPages;
            nextBtn.addEventListener('click', () => {
                if (currentPage < totalPages) {
                    currentPage++;
                    renderProjects();
                    scrollToProjects();
                }
            });
            paginationContainer.appendChild(nextBtn);
        }

        // Tự động cuộn mượt lên đầu danh sách dự án khi chuyển trang
        function scrollToProjects() {
            const section = document.querySelector('.kts-projects');
            if (section) {
                window.scrollTo({
                    top: section.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }

        // Gán sự kiện cho các tab lọc
        document.addEventListener('DOMContentLoaded', () => {
            const filterBtns = document.querySelectorAll('.filter-btn');

            filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    filterBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');

                    currentFilter = btn.getAttribute('data-filter');
                    currentPage = 1; // Reset về trang 1
                    renderProjects();
                });
            });

            // Lần chạy đầu tiên
            renderProjects();
        });
