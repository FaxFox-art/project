document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    hamburgerMenu.addEventListener('click', () => {
        const nav = document.querySelector('nav ul');
        nav.classList.toggle('open');
    });
});
