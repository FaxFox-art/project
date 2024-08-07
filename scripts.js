document.addEventListener('DOMContentLoaded', () => {
    const sections = ['header', 'hero', 'about', 'services', 'gallery', 'contact'];
    sections.forEach(section => {
        fetch(`${section}.html`)
            .then(response => response.text())
            .then(data => {
                document.getElementById(section).innerHTML = data;
                if (section === 'about') {
                    lottie.loadAnimation({
                        container: document.getElementById('about-animation'),
                        renderer: 'svg',
                        loop: true,
                        autoplay: true,
                        path: 'animation1.json'
                    });
                } else if (section === 'services') {
                    lottie.loadAnimation({
                        container: document.getElementById('services-animation'),
                        renderer: 'svg',
                        loop: true,
                        autoplay: true,
                        path: 'animation2.json'
                    });
                } else if (section === 'contact') {
                    lottie.loadAnimation({
                        container: document.getElementById('contact-animation'),
                        renderer: 'svg',
                        loop: true,
                        autoplay: true,
                        path: 'animation3.json'
                    });
                }
            });
    });

    const hamburgerMenu = document.getElementById('hamburger-menu');
    hamburgerMenu.addEventListener('click', () => {
        const nav = document.querySelector('nav ul');
        nav.classList.toggle('open');
    });
});
