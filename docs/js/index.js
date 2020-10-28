const menuBtn = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');

const navItems = document.querySelectorAll('.nav-item');


const scrollBtn = document.querySelector('.scrollToTop');

let lastScrollTop = 0;

function scroll () {
    window.addEventListener('scroll', function() {
        scrollBtn.removeAttribute('id');

    })

    scrollBtn.addEventListener('click', function () {
        scrollBtn.setAttribute('id', 'hidden');
    })
}
//initial state

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('showing');
        menuNav.classList.add('showing');
        

        navItems.forEach(item => item.classList.add('showing'));
        
//set menu state
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('showing');
        menuNav.classList.remove('showing');
        

        navItems.forEach(item => item.classList.remove('showing'));

//set menu state
        showMenu = false;
    }
}

scroll();