/**
 * article-toc.js
 * Tự động tạo widget "Nội dung chính" (Table of Contents)
 * bằng cách đọc tất cả h2 và h3 bên trong .article-content
 */
(function () {
    'use strict';

    function slugify(text) {
        return text
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd').replace(/Đ/g, 'd')
            .replace(/[^a-z0-9\s-]/g, '')
            .trim()
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');
    }

    function buildTOC() {
        const content = document.querySelector('.article-content');
        const tocContainer = document.getElementById('article-toc');
        if (!content || !tocContainer) return;

        // Lấy tất cả h2 và h3 trong nội dung bài
        const headings = content.querySelectorAll('h2, h3');
        if (headings.length < 2) {
            // Ít hơn 2 heading thì không cần mục lục
            tocContainer.style.display = 'none';
            return;
        }

        // Gán ID cho từng heading nếu chưa có
        headings.forEach(function (h, idx) {
            if (!h.id) {
                h.id = 'heading-' + idx + '-' + slugify(h.textContent.slice(0, 40));
            }
        });

        // Build HTML mục lục
        const ul = document.createElement('ul');
        ul.className = 'toc-list';

        let currentH2Li = null;
        let currentSubUl = null;

        headings.forEach(function (h) {
            if (h.tagName === 'H2') {
                currentH2Li = document.createElement('li');
                const a = document.createElement('a');
                a.href = '#' + h.id;
                a.className = 'toc-h2-link';
                a.textContent = h.textContent;
                a.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.getElementById(h.id);
                    if (target) {
                        const offset = 90; // chiều cao header cố định
                        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                        window.scrollTo({ top: top, behavior: 'smooth' });
                    }
                });
                currentH2Li.appendChild(a);
                currentSubUl = null;
                ul.appendChild(currentH2Li);
            } else if (h.tagName === 'H3' && currentH2Li) {
                if (!currentSubUl) {
                    currentSubUl = document.createElement('ul');
                    currentSubUl.className = 'toc-sublist';
                    currentH2Li.appendChild(currentSubUl);
                }
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = '#' + h.id;
                a.className = 'toc-h3-link';
                a.textContent = h.textContent;
                a.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.getElementById(h.id);
                    if (target) {
                        const offset = 90;
                        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                        window.scrollTo({ top: top, behavior: 'smooth' });
                    }
                });
                li.appendChild(a);
                currentSubUl.appendChild(li);
            }
        });

        // Chèn vào body của TOC
        const tocBody = tocContainer.querySelector('.article-toc-body');
        if (tocBody) tocBody.appendChild(ul);

        // Toggle ẩn/hiện
        const header = tocContainer.querySelector('.article-toc-header');
        const toggleBtn = tocContainer.querySelector('.toc-toggle');
        if (header && toggleBtn) {
            header.addEventListener('click', function () {
                const collapsed = tocContainer.classList.toggle('is-collapsed');
                toggleBtn.textContent = collapsed ? '[Hiện]' : '[Ẩn]';
            });
        }
    }

    // Chạy sau khi DOM sẵn sàng
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', buildTOC);
    } else {
        buildTOC();
    }
})();
