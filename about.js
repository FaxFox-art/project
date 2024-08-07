document.addEventListener('DOMContentLoaded', () => {
    fetch('about.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('about').innerHTML = data;
        });
});
