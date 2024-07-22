const menu = document.querySelector('#mobile_menu');
const menuLinks = document.querySelector('.navbar_menu');
const navLogo = document.querySelector('#navbar_logo');

// Highjlight menu when scrolling
window.addEventListener('scroll', () => {
    const homeMenu = document.querySelector('#home_section');
    const skillMenu = document.querySelector('#skills_section');
    const projectMenu = document.querySelector('#projects_section');
    let scrollPos = window.scrollY;

    if (window.innerWidth > 850 && scrollPos < 600) {
        skillMenu.classList.remove('highlight_link');
        projectMenu.classList.remove('highlight_link');
        homeMenu.classList.add('highlight_link');
    } else if (window.innerWidth > 850 && scrollPos < 1275) {
        homeMenu.classList.remove('highlight_link');
        projectMenu.classList.remove('highlight_link');
        skillMenu.classList.add('highlight_link');
    } else if (window.innerWidth > 850 && scrollPos < 1300) {
        skillMenu.classList.remove('highlight_link');
        homeMenu.classList.remove('highlight_link');
        projectMenu.classList.add('highlight_link');
    }
});

// Automatically highlight home menu when page is loaded, if no other menu is highlighted
window.addEventListener("load", (event) => {
    // Check if navbar_links are highlighted by checking if it contains the highlight_link class
    const navbarLinks = document.querySelectorAll('.navbar_links');
    const elem = document.querySelector('.highlight_link');

    if (!elem) {
        navbarLinks.forEach((link) => {
            link.classList.remove('highlight_link');
        });
        const homeMenu = document.querySelector('#home_section');
        homeMenu.classList.add('highlight_link');
    }
});

// Highlight menu when clicking on it
window.addEventListener('click', (event) => {
    const target = event.target;
    const navbarLinks = document.querySelectorAll('.navbar_links');

    if (target.classList.contains('navbar_links')) {
        target.classList.add('highlight_link');
        navbarLinks.forEach((link) => {
            if (link != target) {
                link.classList.remove('highlight_link');
            }
        });
    }
});

// Toggle Mobile Menu
menu.addEventListener('click', () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// Close the mobile menu
window.addEventListener('click', (event) => {
    const target = event.target;
    const navbar = document.querySelector('.navbar_container');
    const mobile_menu = document.querySelector('#mobile_menu');
    const menuLinks = document.querySelector('.navbar_menu');

    if (menuLinks.classList.contains('active')) { // Check if navabr menu is active, if so and user clicks outside of it, close it
        if (target.classList.contains('navbar_links')) {
            mobile_menu.classList.toggle('is-active');
            menuLinks.classList.toggle('active');
        } else if (!navbar.contains(target)) {
            mobile_menu.classList.remove('is-active');
            menuLinks.classList.remove('active');
        }
    }
});
