document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navbarMobile = document.querySelector('.navbar-mobile');
    const navListMobile = document.querySelector('.navlist-mobile');
    const navItems = document.querySelectorAll('.nav-item');
    const hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', function() {
        menuToggle.checked = !menuToggle.checked;
        hamburger.classList.toggle('active');
        if (navbarMobile.classList.contains('show')) {
            navbarMobile.classList.remove('show');
            navListMobile.classList.remove('show');
            setTimeout(() => {
                navbarMobile.style.display = 'none';
                navItems.forEach(item => item.style.transform = 'translateX(-100%)');
            }, 300);
        } else {
            navbarMobile.style.display = 'block';
            setTimeout(() => {
                navbarMobile.classList.add('show');
                setTimeout(() => {
                    navListMobile.classList.add('show');
                    navItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.style.transform = 'translateX(0)';
                        }, index * 100); // Stagger the appearance of items
                    });
                }, 300); // Wait for navbar-mobile transition to complete
            }, 10); 
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
