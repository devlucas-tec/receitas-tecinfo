
const links = document.querySelectorAll('header nav ul a');

links.forEach(link => {
    link.addEventListener('click', function () {
        this.blur();
    });
});

// Formulário de contato
function enviarContato() {
    const nome    = document.getElementById('contact-name').value.trim();
    const email   = document.getElementById('contact-email').value.trim();
    const assunto = document.getElementById('contact-subject').value.trim();
    const mensagem= document.getElementById('contact-message').value.trim();
    const feedback = document.getElementById('contact-feedback');

    if (!nome || !email || !assunto || !mensagem) {
        feedback.style.color = '#c0392b';
        feedback.textContent = 'Por favor, preencha todos os campos antes de enviar.';
        return;
    }

    feedback.style.color = 'var(--primary-color)';
    feedback.textContent = `Mensagem enviada com sucesso, ${nome}! Em breve entraremos em contato. 🎉`;

    document.getElementById('contact-name').value    = '';
    document.getElementById('contact-email').value   = '';
    document.getElementById('contact-subject').value = '';
    document.getElementById('contact-message').value = '';
}