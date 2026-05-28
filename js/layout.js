document.addEventListener('DOMContentLoaded', function () {

    const loadComponent = (url, placeholderId, callback) => {
        const placeholder = document.getElementById(placeholderId);
        if (placeholder) {
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Could not load ${url}. Status: ${response.status}`);
                    }
                    return response.text();
                })
                .then(data => {
                    placeholder.insertAdjacentHTML('afterbegin', data);
                    if (callback) callback();
                })
                .catch(error => console.error('Error loading component:', error));
        }
    };

    const initializeHeaderScripts = () => {
        // Set active menu item
        const currentPage = window.location.pathname.split('/').pop();
        const navLinks = document.querySelectorAll('.main-nav a');

        let isSubpageActive = false;

        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href').split('/').pop().split('#')[0];
            if (linkPage === currentPage && currentPage !== '' && currentPage !== 'index.html') {
                link.classList.add('active');
                isSubpageActive = true;
                const parentDropdown = link.closest('.has-simple-dropdown');
                if (parentDropdown) {
                    parentDropdown.querySelector('a').classList.add('active');
                }
            }
        });

        if (!isSubpageActive) {
             const homeLink = document.querySelector('.main-nav a[href="index.html"]');
             if (homeLink && (currentPage === '' || currentPage === 'index.html')) {
                 homeLink.classList.add('active');
             }
             else {
                 navLinks.forEach(link => {
                    const linkPage = link.getAttribute('href').split('/').pop().split('#')[0];
                    if (linkPage === currentPage) {
                        link.classList.add('active');
                    }
                 });
             }
        }

        // Mobile menu toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const mainNav = document.querySelector('.main-nav');
        if (menuToggle && mainNav) {
            menuToggle.addEventListener('click', () => {
                mainNav.classList.toggle('active');
            });
        }

        // Sticky header & Scroll Spy
        const header = document.getElementById('main-header');
        const sections = document.querySelectorAll('section');

        if (header || sections.length > 0) {
            window.addEventListener('scroll', () => {
                const scrollY = window.pageYOffset || window.scrollY;

                // Sticky Header (uses .scrolled to match css/layout.css)
                if (header) {
                    if (scrollY > 50) {
                        header.classList.add('scrolled');
                    } else {
                        header.classList.remove('scrolled');
                    }
                }

                // Scroll Spy (updates active class as user scrolls through sections)
                if (sections.length > 0 && navLinks.length > 0) {
                    let current = '';
                    sections.forEach(section => {
                        const sectionTop = section.offsetTop;
                        const sectionHeight = section.clientHeight;
                        if (scrollY >= (sectionTop - sectionHeight / 3)) {
                            current = section.getAttribute('id');
                        }
                    });

                    navLinks.forEach(a => {
                        a.classList.remove('active');
                        let parentLi = a.closest('.has-simple-dropdown');
                        if (parentLi) {
                            let parentLink = parentLi.querySelector('a');
                            if (parentLink) parentLink.classList.remove('active');
                        }
                    });

                    navLinks.forEach(a => {
                        const href = a.getAttribute('href');
                        if (current && href && href.includes(current)) {
                            a.classList.add('active');
                            let parentLi = a.closest('.has-simple-dropdown');
                            if (parentLi) {
                                let parentLink = parentLi.querySelector('a');
                                if (parentLink) parentLink.classList.add('active');
                            }
                        }
                    });
                }
            }, { passive: true });
        }
    };

    const initializeFooterScripts = () => {
        // Mobile footer accordion
        const accordionHeaders = document.querySelectorAll('.footer-accordion-item .footer-heading-title');
        accordionHeaders.forEach(header => {
            header.addEventListener('click', () => {
                if (window.innerWidth < 768) {
                    const item = header.closest('.footer-accordion-item');
                    item.classList.toggle('open');
                    const content = item.querySelector('.footer-collapse-content');
                    if (item.classList.contains('open')) {
                        content.style.maxHeight = content.scrollHeight + 'px';
                    } else {
                        content.style.maxHeight = null;
                    }
                }
            });
        });

        // Contact Modal
        const openModalBtn = document.getElementById('openContactModal');
        const closeModalBtn = document.getElementById('closeContactModal');
        const contactModal = document.getElementById('contactModal');

        const openModal = (e) => {
            e.preventDefault();
            if (contactModal) {
                contactModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        };

        const closeModal = () => {
            if (contactModal) {
                contactModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        };

        if (openModalBtn) openModalBtn.addEventListener('click', openModal);
        if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
        if (contactModal) {
            contactModal.addEventListener('click', (e) => {
                if (e.target === contactModal) {
                    closeModal();
                }
            });
        }
        
        const otherTriggers = document.querySelectorAll('[id^="openContactModal"]');
        otherTriggers.forEach(trigger => {
            if(trigger.id !== 'openContactModal') {
                trigger.addEventListener('click', openModal);
            }
        });

        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
    };

    loadComponent('_header.html', 'header-placeholder', initializeHeaderScripts);
    loadComponent('_footer.html', 'footer-placeholder', initializeFooterScripts);
});