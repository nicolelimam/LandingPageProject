document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navbarMobile = document.querySelector('.navbar-mobile');
    const hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', function() {
        menuToggle.checked = !menuToggle.checked;
        hamburger.classList.toggle('active');
        if (navbarMobile.classList.contains('show')) {
            navbarMobile.classList.remove('show');
            setTimeout(() => {
                navbarMobile.style.display = 'none';
            }, 300); // Tempo para a animação completar
        } else {
            navbarMobile.style.display = 'block';
            setTimeout(() => {
                navbarMobile.classList.add('show');
            }, 10); // Pequeno atraso para permitir o repaint
        }
        updateHamburgerIcon(menuToggle.checked);
    });

    menuToggle.addEventListener('change', function() {
        hamburger.classList.toggle('active', menuToggle.checked);
        updateHamburgerIcon(menuToggle.checked);
    });

    function updateHamburgerIcon(menuChecked) {
        const svg = hamburger.querySelector('svg');
        const line = hamburger.querySelector('.line-top-bottom');
        if (menuChecked) {
            svg.classList.add('checked');
            line.classList.add('checked');
        } else {
            svg.classList.remove('checked');
            line.classList.remove('checked');
        }
    }
});

//CONFIGURAÇÕES DO CARROSSEL
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    let currentIndex = 0;

    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    };

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        showSlide(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        showSlide(currentIndex);
    });

    // Initialize first slide
    showSlide(currentIndex);
});
