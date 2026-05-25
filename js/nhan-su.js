
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
                // Open clicked if was closed
                if (!isOpen) {
                    item.classList.add('open');
                    body.style.maxHeight = body.scrollHeight + 'px';
                    icon.style.transform = 'rotate(180deg)';
                }
            }

// Giữ cố định active theo trang, không đổi khi scroll
            (function () {
                const currentPage = location.pathname.split('/').pop() || 'index.html';
                const navLinks = document.querySelectorAll('.main-nav > ul > li > a');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    const href = link.getAttribute('href') || '';
                    if (currentPage === 'index.html' && (href === '#home' || href === 'index.html')) {
                        link.classList.add('active');
                    }
                });

                // Override bất kỳ IntersectionObserver hay scroll listener nào từ main.js
                const origObserver = window.IntersectionObserver;
                // Chặn main.js gán lại active sau khi load
                window.addEventListener('load', function () {
                    navLinks.forEach(link => link.classList.remove('active'));
                    navLinks.forEach(link => {
                        const href = link.getAttribute('href') || '';
                        if (currentPage === 'index.html' && (href === '#home' || href === 'index.html')) {
                            link.classList.add('active');
                        }
                    });
                });
            })();
