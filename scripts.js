document.addEventListener('DOMContentLoaded', () => {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
            const hamburgerMenu = document.getElementById('hamburger-menu');
            hamburgerMenu.addEventListener('click', () => {
                const nav = document.querySelector('nav ul');
                nav.classList.toggle('open');
            });
        });
});
