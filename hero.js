document.addEventListener('DOMContentLoaded', () => {
    fetch('hero.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('hero').innerHTML = data;
        });
});
