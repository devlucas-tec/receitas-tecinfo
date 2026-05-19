// Header: active baseado na seção visível (scroll) ─────────────────────────
const links = document.querySelectorAll('header nav ul a');

function atualizarActive() {
    const scrollY = window.scrollY;
    const cardsSection = document.getElementById('container-cards');

    links.forEach(link => link.classList.remove('active'));

    if (cardsSection && scrollY >= cardsSection.offsetTop - 100) {
        const linkReceitas = document.querySelector('header nav ul a[href="#container-cards"]');
        if (linkReceitas) linkReceitas.classList.add('active');
    } else {
        const linkInicio = document.querySelector('header nav ul a[href="index.html"]');
        if (linkInicio) linkInicio.classList.add('active');
    }
}

window.addEventListener('scroll', atualizarActive);
atualizarActive();

links.forEach(link => {
    link.addEventListener('click', function () {
        this.blur();
    });
});


// Parallax: troca o banner a cada 5s ───────────────────────────────────────
const slides = document.querySelectorAll('.parallax');
let current = 0;

function trocarImagem() {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
}

setInterval(trocarImagem, 5000);


// Cards: renderiza a partir de dados.js ─────────────────────────────────────
const container = document.querySelector('.container-cards');

const cardsHTML = receitas.map((receita) => `
    <div class="card">
        <img src="${receita.src}" alt="${receita.titulo}">
        <h2>${receita.titulo}</h2>
        <p class="card-desc">${receita.descricao}</p>
        <button class="card-btn" data-slug="${receita.slug}">Ver receita</button>
    </div>
`).join('');

container.innerHTML = cardsHTML;

container.addEventListener('click', function (e) {
    if (e.target.classList.contains('card-btn')) {
        const slug = e.target.dataset.slug;
        window.location.href = `HTML/receita.html?slug=${slug}`;
    }
});