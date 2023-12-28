const menu = document.querySelector('#mobile_menu');
const menuLinks = document.querySelector('.navbar_menu');
const navLogo = document.querySelector('#navbar_logo');

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

const highlightMenuOnScroll = () => {
    const elem = document.querySelector('.highlight_link');
    const homeMenu = document.querySelector('#home_section');
    const skillMenu = document.querySelector('#skills_section');
    const ProjectMenu = document.querySelector('#projects_section');
    let scrollPos = window.scrollY;

    if (window.innerWidth > 850 && scrollPos < 575) {
        skillMenu.classList.remove('highlight_link');
        ProjectMenu.classList.remove('highlight_link');
        homeMenu.classList.add('highlight_link');
    } else if (window.innerWidth > 850 && scrollPos < 1250) {
        homeMenu.classList.remove('highlight_link');
        ProjectMenu.classList.remove('highlight_link');
        skillMenu.classList.add('highlight_link');
    } else if (window.innerWidth > 850 && scrollPos < 1300) {
        skillMenu.classList.remove('highlight_link');
        homeMenu.classList.remove('highlight_link');
        ProjectMenu.classList.add('highlight_link');
    }

    if (elem && window.innerWidth < 850 && scrollPos < 575) {
        elem.classList.remove('highlight_link');
    }
};

const highlightMenuOnClick = (event) => {
    const target = event.target;
    const navbarLinks = document.querySelectorAll('.navbar_links');

    navbarLinks.forEach((link) => {
        link.classList.remove('highlight_link');
    }
);

if (target.classList.contains('navbar_links')) {
        target.classList.add('highlight_link');
    }
};

window.addEventListener('scroll', highlightMenuOnScroll);
window.addEventListener('click', highlightMenuOnClick);

// Close mobile menu when clicking on a menu item
const hideMobileMenu = (event) => {
    const menuBars = document.querySelector('.is-active');
    const target = event.target;

    // Check if the clicked element is a navbar link
    if (target.classList.contains('navbar_links')) {
        menu.classList.remove('is-active');
        menuLinks.classList.remove('active');
    }

    if (window.innerWidth <= 850 && menuBars && !target.classList.contains('navbar_container')) {
        menu.classList.remove('is-active');
        menuLinks.classList.remove('active');
    }
};

// Close mobile menu when clicking outside of the menu
window.addEventListener('click', (event) => {
    const target = event.target;
    const navbar = document.querySelector('.navbar_container');
    
    if (!navbar.contains(target) && !menu.contains(target)) {
        menu.classList.remove('is-active');
        menuLinks.classList.remove('active');
    }
});
