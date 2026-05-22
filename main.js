document.addEventListener("DOMContentLoaded", () => {
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 50
    });

    // Hero Slider
    const sliderContainer = document.querySelector('.hero');
    const slides = document.querySelectorAll('.hero-slider .slide');
    const dots = document.querySelectorAll('.slider-dots .dot');

    if (slides.length > 0) {
        let currentSlide = 0;
        let slideInterval;
        let startX = 0;
        let isDragging = false;

        const updateSlider = (index) => {
            slides.forEach(slide => slide.classList.remove('active'));
            if (dots.length > 0) dots.forEach(dot => dot.classList.remove('active'));

            slides[index].classList.add('active');
            if (dots[index]) dots[index].classList.add('active');
            currentSlide = index;
        };

        const nextSlide = () => {
            let nextIndex = (currentSlide + 1) % slides.length;
            updateSlider(nextIndex);
        };

        const prevSlide = () => {
            let prevIndex = (currentSlide - 1 + slides.length) % slides.length;
            updateSlider(prevIndex);
        };

        const startSlider = () => {
            slideInterval = setInterval(nextSlide, 5000);
        };

        const resetSlider = () => {
            clearInterval(slideInterval);
            startSlider();
        };

        // Swipe & Drag Events
        const dragStart = (e) => {
            isDragging = true;
            sliderContainer.style.cursor = 'grabbing';
            sliderContainer.setPointerCapture(e.pointerId);
            startX = e.clientX;
            clearInterval(slideInterval);
        };

        const dragEnd = (e) => {
            if (!isDragging) return;
            isDragging = false;
            sliderContainer.style.cursor = 'grab';
            try { sliderContainer.releasePointerCapture(e.pointerId); } catch (err) { }

            const endX = e.clientX;
            const diff = startX - endX;

            if (diff > 50) {
                // Swiped left -> next slide
                nextSlide();
            } else if (diff < -50) {
                // Swiped right -> prev slide
                prevSlide();
            }
            startSlider();
        };

        if (sliderContainer) {
            sliderContainer.style.cursor = 'grab';
            // Use pointer events for unified mouse and touch handling
            sliderContainer.addEventListener('pointerdown', dragStart);
            sliderContainer.addEventListener('pointerup', dragEnd);
            sliderContainer.addEventListener('pointercancel', dragEnd);
            sliderContainer.addEventListener('pointerleave', dragEnd);
        }

        if (dots.length > 0) {
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    updateSlider(index);
                    resetSlider();
                });
            });
        }

        startSlider();
    }

    // Sticky Navbar & Scroll Spy
    const header = document.getElementById('main-header');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.main-nav ul li a');

    window.addEventListener('scroll', () => {
        let current = '';

        // Sticky Header
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Scroll Spy
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
            if (current && a.getAttribute('href').includes(current)) {
                a.classList.add('active');
                let parentLi = a.closest('.has-simple-dropdown');
                if (parentLi) {
                    let parentLink = parentLi.querySelector('a');
                    if (parentLink) parentLink.classList.add('active');
                }
            }
        });
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            if (mainNav.classList.contains('active')) {
                mainNav.style.display = 'block';
                mainNav.style.position = 'absolute';
                mainNav.style.top = '100%';
                mainNav.style.left = '0';
                mainNav.style.width = '100%';
                mainNav.style.background = 'rgba(15, 15, 15, 0.95)';
                mainNav.style.padding = '20px';
                mainNav.style.borderTop = '1px solid var(--luxury-gold)';
                const ul = mainNav.querySelector('ul');
                if (ul) {
                    ul.style.flexDirection = 'column';
                    ul.style.gap = '15px';
                }
            } else {
                mainNav.style.display = 'none';
            }
        });
    }

    // Contact Modal
    const contactModal = document.getElementById('contactModal');
    const openContactModal = document.getElementById('openContactModal');
    const closeContactModal = document.getElementById('closeContactModal');

    if (contactModal && openContactModal && closeContactModal) {
        openContactModal.addEventListener('click', (e) => {
            e.preventDefault();
            contactModal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });

        closeContactModal.addEventListener('click', () => {
            contactModal.classList.remove('active');
            document.body.style.overflow = '';
        });

        // Close on clicking outside
        contactModal.addEventListener('click', (e) => {
            if (e.target === contactModal) {
                contactModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Number Counter Animation
    const counters = document.querySelectorAll('.counter');
    const duration = 2000; // 2 seconds animation
    const interval = 30; // update every 30ms

    const startCounters = () => {
        counters.forEach(counter => {
            counter.innerText = '0';
            const target = +counter.getAttribute('data-target');
            const steps = duration / interval;
            const inc = target / steps;
            let current = 0;

            const updateCount = () => {
                current += inc;
                if (current < target) {
                    counter.innerText = Math.ceil(current);
                    setTimeout(updateCount, interval);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    };

    // Use Intersection Observer to trigger counter when stats row is visible
    const statsRow = document.querySelector('.stats-row');
    if (statsRow) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startCounters();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        observer.observe(statsRow);
    }

    // Testimonials Slider
    const testiTrack = document.querySelector('.testi-slider-track');
    const testiPrev = document.querySelector('.prev-arrow');
    const testiNext = document.querySelector('.next-arrow');

    if (testiTrack && testiPrev && testiNext) {
        let testiIndex = 0;

        const updateTestiSlider = () => {
            testiTrack.style.transform = `translateX(-${testiIndex * 100}%)`;
        };

        testiNext.addEventListener('click', () => {
            const itemsPerView = window.innerWidth <= 991 ? 1 : 2;
            const totalItems = document.querySelectorAll('.testi-slider-track .testimonial-card').length;
            const maxIndex = Math.ceil(totalItems / itemsPerView) - 1;

            if (testiIndex < maxIndex) {
                testiIndex++;
                updateTestiSlider();
            }
        });

        testiPrev.addEventListener('click', () => {
            if (testiIndex > 0) {
                testiIndex--;
                updateTestiSlider();
            }
        });

        window.addEventListener('resize', () => {
            testiIndex = 0;
            updateTestiSlider();
        });
    }
});
