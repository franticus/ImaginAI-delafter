// Мобильное меню - максимально простое
document.addEventListener('DOMContentLoaded', function() {
    console.log('Script loaded');

    const burger = document.querySelector('.burger');
    const drawer = document.querySelector('.drawer');
    const closeBtn = document.querySelector('.drawer-close');
    const overlay = document.querySelector('.overlay');

    console.log('Elements:', { burger, drawer, closeBtn, overlay });

    // Проверяем, что элементы найдены
    if (!burger || !drawer) {
        console.error('Burger or drawer not found!');
        return;
    }

    // Функция открытия
    function openMenu() {
        console.log('Opening menu');
        drawer.style.setProperty('display', 'flex', 'important');
        drawer.style.setProperty('transform', 'translateY(0)', 'important');
        drawer.style.setProperty('visibility', 'visible', 'important');
        if (overlay) {
            overlay.style.setProperty('display', 'block', 'important');
            overlay.style.setProperty('visibility', 'visible', 'important');
        }
        document.body.style.overflow = 'hidden';
        console.log('Menu should be visible now');
    }

    // Функция закрытия
    function closeMenu() {
        console.log('Closing menu');
        drawer.style.setProperty('transform', 'translateY(100%)', 'important');
        if (overlay) {
            overlay.style.setProperty('display', 'none', 'important');
            overlay.style.setProperty('visibility', 'hidden', 'important');
        }
        document.body.style.overflow = '';

        setTimeout(() => {
            drawer.style.setProperty('display', 'none', 'important');
            drawer.style.setProperty('visibility', 'hidden', 'important');
        }, 300);
    }

    // Обработчики событий
    burger.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Burger clicked');
        openMenu();
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Close clicked');
            closeMenu();
        });
    }

    if (overlay) {
        overlay.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Overlay clicked');
            closeMenu();
        });
    }

    // Закрытие по ссылкам
    const menuLinks = document.querySelectorAll('.drawer .menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // ESC для закрытия
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMenu();
        }
    });

    // Инициализация
    drawer.style.display = 'none';
    drawer.style.transform = 'translateY(100%)';

    console.log('Menu initialized');
});
