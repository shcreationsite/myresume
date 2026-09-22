document.addEventListener('DOMContentLoaded', () => {

    // --- Initialize AOS (Animate On Scroll) ---
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false,
        });
    }

    // --- Typing Effect ---
    const typingElement = document.querySelector('.typing-effect');
    if (typingElement && typeof Typed !== 'undefined') {
        new Typed(typingElement, {
            strings: ["Software Engineer", "ThingWorx Developer", "Data Analyst Enthusiast"],
            typeSpeed: 60,
            backSpeed: 40,
            loop: true,
            backDelay: 2000,
            showCursor: true,
            cursorChar: '|',
        });
    }

    // --- Mobile Navigation Toggle ---
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    if (burger && nav) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        });
    }

    // Close mobile nav when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav && nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
            }
        });
    });

    // --- Active Nav Link Highlighting on Scroll ---
    const sections = document.querySelectorAll('main section[id], #home');
    const navLi = document.querySelectorAll('#navbar .nav-links li a');
    const headerHeight = document.getElementById('navbar')?.offsetHeight || 75;

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollY = window.pageYOffset || window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 60;
            if (scrollY >= sectionTop && scrollY <= sectionTop + section.offsetHeight) {
                current = section.getAttribute('id');
            }
        });

        navLi.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href') === `#${current}`) {
                a.classList.add('active');
            }
        });
    });

    // --- Dynamic Year in Footer ---
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
