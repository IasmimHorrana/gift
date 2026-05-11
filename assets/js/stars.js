/* ============================================================
   STARS.JS — Campo de estrelas animadas no canvas de fundo
   ============================================================
   Cria estrelas com:
   - Posições aleatórias na tela
   - Brilho piscante (twinkle) individual
   - Tamanhos variados
   - Algumas com tonalidade levemente dourada (ênfase)
   ============================================================ */

(function () {
    'use strict';

    const canvas = document.getElementById('starfield');
    const ctx    = canvas.getContext('2d');

    /* --- Configuração das estrelas --- */
    const STAR_COUNT       = 280;  // quantidade de estrelas
    const TWINKLE_SPEED    = 0.008; // velocidade do brilho

    let stars = [];

    /* ----------------------------------------------------------
       Cria o array de estrelas com propriedades aleatórias
    ---------------------------------------------------------- */
    function initStars() {
        stars = [];
        for (let i = 0; i < STAR_COUNT; i++) {
            stars.push({
                x:         Math.random() * canvas.width,
                y:         Math.random() * canvas.height,
                radius:    Math.random() * 1.4 + 0.3,          // 0.3 a 1.7px
                alpha:     Math.random(),                        // opacidade inicial
                delta:     (Math.random() * 0.6 + 0.2) * (Math.random() < 0.5 ? 1 : -1),
                golden:    Math.random() < 0.12,                 // 12% são douradas
            });
        }
    }

    /* ----------------------------------------------------------
       Ajusta o canvas ao tamanho da janela
    ---------------------------------------------------------- */
    function resize() {
        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;
        initStars(); // reinicia para redistribuir
    }

    /* ----------------------------------------------------------
       Loop de animação — limpa e redesenha cada frame
    ---------------------------------------------------------- */
    function animate() {
        // Limpa com fundo semi-transparente para efeito de rastro suave
        ctx.fillStyle = 'rgba(5, 13, 26, 0.25)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        stars.forEach(function (s) {
            // Atualiza opacidade (twinkle)
            s.alpha += s.delta * TWINKLE_SPEED;
            if (s.alpha >= 1) { s.alpha = 1; s.delta *= -1; }
            if (s.alpha <= 0) { s.alpha = 0; s.delta *= -1; }

            // Cor: branco ou dourado suave
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);

            if (s.golden) {
                ctx.fillStyle = 'rgba(201, 169, 110, ' + s.alpha + ')';
            } else {
                ctx.fillStyle = 'rgba(210, 220, 255, ' + s.alpha + ')';
            }

            ctx.fill();
        });

        requestAnimationFrame(animate);
    }

    /* ----------------------------------------------------------
       Inicialização
    ---------------------------------------------------------- */
    window.addEventListener('resize', resize);
    resize();
    animate();

})();
