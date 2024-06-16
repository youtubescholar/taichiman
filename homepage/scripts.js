document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');

    if (!slides.length || !nextBtn || !prevBtn) {
        console.error('Slides or navigation buttons not found');
        return;
    }

    const updateSlide = () => {
        slides.forEach((slide, index) => {
            slide.classList.remove('active');
            if (index === currentSlide) {
                slide.classList.add('active');
            }
        });
    }

    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlide();
    });

    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlide();
    });

    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlide();
    }, 5000);
});
