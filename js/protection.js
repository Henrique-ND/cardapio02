const ProtecaoWeb = (function() {
    const ativar = () => {
        
        // 1. Bloqueia o clique direito (Menu de Contexto)
        document.addEventListener('contextmenu', e => e.preventDefault());

        // 2. Bloqueia atalhos de teclado
        document.addEventListener('keydown', e => {
            // F12
            if (e.keyCode === 123) {
                e.preventDefault();
                return false;
            }
            // Ctrl+Shift+I (Inspecionar), Ctrl+Shift+J (Console), Ctrl+Shift+C (Elementos)
            if (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key.toUpperCase())) {
                e.preventDefault();
                return false;
            }
            // Ctrl+U (Ver código fonte)
            if (e.ctrlKey && e.key.toUpperCase() === 'U') {
                e.preventDefault();
                return false;
            }
            // Ctrl+S (Salvar página)
            if (e.ctrlKey && e.key.toUpperCase() === 'S') {
                e.preventDefault();
                return false;
            }
        });

        // 3. Detecta abertura do console via Debugger
        // Se o DevTools abrir, o script "pausa" a página
        setInterval(() => {
            (function() {
                return false;
            }['constructor']('debugger')['call']());
        }, 50);

        console.log("Proteção ativa.");
    };

    return {
        init: ativar
    };
})();

// Para rodar:
ProtecaoWeb.init();