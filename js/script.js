window.onload = function() {
    var open = document.getElementById('open-menu');
    var close = document.getElementById('close-menu');

    open.addEventListener('click', openMenu);
    close.addEventListener('click', closeMenu);
}

function openMenu() {
    let openBtn = document.querySelector('.navigation');
    openBtn.classList.add('menu-click');
}

function closeMenu() {
    let openBtn = document.querySelector('.navigation');
    openBtn.classList.remove('menu-click');
}