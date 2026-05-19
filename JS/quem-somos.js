
const links = document.querySelectorAll('header nav ul a');

links.forEach(link => {
    link.addEventListener('click', function () {
        this.blur();
    });
});