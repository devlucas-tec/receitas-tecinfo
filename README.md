# 🍽️ Receitas — TecInfo Lourdinas

Projeto web desenvolvido na disciplina de **HTML e CSS** do curso Técnico em Informática (TecInfo — Lourdinas).

## 📋 Sobre o projeto

O **Receitas** é um site de culinária que reúne pratos caseiros testados, com foco em simplicidade e acessibilidade. A proposta surgiu da ideia de preservar receitas de família e tornar a cozinha do dia a dia mais fácil para qualquer pessoa.

## 🖥️ Páginas

| Página | Descrição |
|---|---|
| `index.html` | Página inicial com banner parallax e cards de receitas gerados dinamicamente |
| `HTML/quem-somos.html` | Página institucional com história, valores, equipe e formulário de contato |
| `HTML/receita.html` | Página de detalhe de cada receita (ingredientes e modo de preparo) |

## 📁 Estrutura de arquivos

```
receitas-tecinfo/
├── index.html
├── HTML/
│   ├── quem-somos.html
│   └── receita.html
├── CSS/
│   ├── index.css
│   ├── quem-somos.css
│   └── receita.css
├── JS/
│   ├── dados.js        ← fonte de dados de todas as receitas
│   ├── app.js          ← lógica da página inicial (parallax, cards)
│   ├── receita.js      ← carrega detalhes da receita via query string
│   └── quem-somos.js
└── images/
    ├── logo.png
    ├── banner.png
    ├── banner2.png
    └── banner3.png
```

## ⚙️ Tecnologias utilizadas

- **HTML5**
- **CSS3** (variáveis CSS, Flexbox, efeito parallax)
- **JavaScript** (vanilla — sem frameworks)

## 🚀 Como rodar localmente

1. Clone ou baixe o repositório.
2. Abra o arquivo `index.html` em qualquer navegador moderno.

> Nenhuma instalação ou servidor é necessário — o projeto roda 100% no lado do cliente (dados mockados).

## ✨ Funcionalidades

- Slider de banners com efeito parallax automático
- Cards de receitas gerados a partir de um arquivo de dados centralizado (`dados.js`)
- Filtragem de receitas por categoria
- Página de detalhe com ingredientes e modo de preparo
- Formulário de contato na aba "Quem Somos"
- Layout responsivo para dispositivos móveis

## 👨‍💻 Autor

**Lucas Barbosa** — aluno do curso Técnico em Informática (TecInfo — Lourdinas)

## Considerções finais
**Não querendo dizer nada**, mas eu acho que mereço um **10** em professor.

---

*Projeto técnico — disciplina de HTML e CSS | 2026*
