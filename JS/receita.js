// ── receita.js — renderiza a página de uma receita pelo slug da URL ───────────

// Marca "Receitas" como active no nav
const navLinks = document.querySelectorAll('header nav ul a');
navLinks.forEach(link => link.classList.remove('active'));
const linkReceitas = document.querySelector('header nav ul a[href="../index.html#container-cards"]');
if (linkReceitas) linkReceitas.classList.add('active');

// Lê o slug da query string
const params = new URLSearchParams(window.location.search);
const slug = params.get('slug');

const receita = receitas.find(r => r.slug === slug);

const conteudo = document.getElementById('receita-conteudo');
const erro = document.getElementById('receita-erro');

if (!receita) {
    erro.style.display = 'block';
} else {
    // Atualiza o título da aba
    document.title = `${receita.titulo} – Receitas`;

    const ingredientesHTML = receita.ingredientes
        .map(i => `<li>${i}</li>`)
        .join('');

    const preparoHTML = receita.preparo
        .map((passo, idx) => `
            <div class="passo">
                <span class="passo-num">${idx + 1}</span>
                <p>${passo}</p>
            </div>
        `)
        .join('');

    conteudo.innerHTML = `
        <section class="receita-hero" style="background-image: url('${receita.src}')">
            <div class="receita-hero-overlay">
                <a href="../index.html#container-cards" class="receita-voltar">← Voltar</a>
                <h1>${receita.titulo}</h1>
                <p class="receita-desc">${receita.descricao}</p>
                <div class="receita-meta">
                    <span>⏱ ${receita.tempo}</span>
                    <span>🍽 ${receita.porcoes}</span>
                    <span>📊 ${receita.dificuldade}</span>
                </div>
            </div>
        </section>

        <section class="receita-corpo">
            <div class="receita-ingredientes">
                <h2>Ingredientes</h2>
                <ul>${ingredientesHTML}</ul>
            </div>

            <div class="receita-preparo">
                <h2>Modo de preparo</h2>
                <div class="passos">${preparoHTML}</div>
            </div>
        </section>
    `;
}