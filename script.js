window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.scroll-animation');
    const windowHeight = window.innerHeight;
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        if (position < windowHeight - 100) {
            el.classList.add('visible');
        }
    });
});

// Initialize Animate.css animations on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate__animated');
    const windowHeight = window.innerHeight;
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        if (position < windowHeight - 100) {
            el.classList.add('animate__fadeInUp');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
document.addEventListener('DOMContentLoaded', animateOnScroll);

