document.addEventListener('DOMContentLoaded', () => {
    // Atualiza o ano automaticamente no rodapé
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Funcionalidade de copiar link da página
    const copyBtn = document.getElementById('copyLinkBtn');
    const copyText = document.getElementById('copyText');

    if (copyBtn && copyText) {
        copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(window.location.href).then(() => {
                const originalText = copyText.textContent;
                copyText.textContent = 'Link copiado!';
                
                setTimeout(() => {
                    copyText.textContent = originalText;
                }, 2500);
            }).catch(err => {
                console.error('Erro ao copiar o link:', err);
            });
        });
    }
});
