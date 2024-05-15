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
