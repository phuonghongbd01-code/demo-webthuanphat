
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
            // Bỏ qua hành vi kéo (drag) nếu người dùng nhấp vào các nút chấm.
            // Điều này ngăn chặn việc `setPointerCapture` chặn sự kiện 'click' trên các nút.
            if (e.target.closest('.slider-dots')) {
                return;
            }
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
            dots.forEach(dot => {
                dot.addEventListener('click', (e) => {
                    const slideIndex = parseInt(e.currentTarget.dataset.slide, 10);
                    updateSlider(slideIndex);
                    resetSlider();
                });
            });
        }

        startSlider();
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

    // Search Icon Click Event (Placeholder)
    const searchBtn = document.querySelector('.icon-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // TODO: Implement search functionality or toggle search modal here
            console.log("Search button clicked");
        });
    }

    // Floating Widget Visibility Logic
    const floatingWidget = document.querySelector('.floating-widget');
    const footerContactInfo = document.querySelector('.footer-contact-info-wrapper');

    if (floatingWidget && footerContactInfo) {
        const observerOptions = {
            root: null, // relative to the viewport
            rootMargin: '0px',
            threshold: 0.1 // trigger when 10% of the element is visible
        };

        const widgetObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // The contact info section is visible, so hide the widget
                    floatingWidget.classList.add('hidden');
                } else {
                    // The contact info section is not visible, so show the widget
                    floatingWidget.classList.remove('hidden');
                }
            });
        }, observerOptions);

        widgetObserver.observe(footerContactInfo);
    }
});
