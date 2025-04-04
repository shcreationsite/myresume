document.addEventListener('DOMContentLoaded', () => {

    // --- Initialize AOS (Animate On Scroll) ---
    AOS.init({
        duration: 800, // values from 0 to 3000, with step 50ms
        easing: 'ease-in-out', // default easing for AOS animations
        once: true, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
    });


    // --- Typing Effect ---
    const typingElement = document.querySelector('.typing-effect');
    if (typingElement) {
        const typed = new Typed(typingElement, {
            strings: ["Software Engineer", "ThingWorx Developer", "Data Enthusiast"], // Customize your titles
            typeSpeed: 70,
            backSpeed: 40,
            loop: true,
            backDelay: 1500,
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
            // Toggle Nav
            nav.classList.toggle('nav-active');

            // Animate Links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = ''; // Reset animation
                } else {
                    // Delay fade in based on index
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });

            // Burger Animation
            burger.classList.toggle('toggle');
        });
    }

     // Close mobile nav when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
                 navLinks.forEach((link) => { // Reset animation immediately
                     link.style.animation = '';
                 });
            }
        });
    });


    // --- Active Nav Link Highlighting on Scroll ---
    const sections = document.querySelectorAll('main section[id]'); // Select only sections in main with an ID
    const navLi = document.querySelectorAll('#navbar .nav-links li a'); // Select nav links
    const headerHeight = document.getElementById('navbar')?.offsetHeight || 70; // Get header height

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 50; // Add a little offset
            // Check if scroll position is within the section's bounds
            if (scrollY >= sectionTop && scrollY <= sectionTop + section.offsetHeight) {
                current = section.getAttribute('id');
            }
            // Handle edge case for the last section reaching the bottom
             else if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50 && section.id === sections[sections.length - 1].id) {
                 current = section.getAttribute('id');
             }
        });

        // If scrolled to the very top, highlight 'home'
        if (scrollY < sections[0].offsetTop - headerHeight - 50) {
             current = sections[0].getAttribute('id'); // Assume first section is home
        }


        navLi.forEach(a => {
            a.classList.remove('active');
            // Check href against the current section's ID
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