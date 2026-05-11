/* ============================================================
   ENVELOPE.JS — Botão "Abrir o envelope final" + estrelinhas
   ============================================================
   Funcionalidades:
   - Clique no botão revela a mensagem final com fade suave
   - Dispara chuva de estrelinhas douradas na tela
   - Estrelinhas desaparecem automaticamente após a animação
   ============================================================ */

(function () {
    'use strict';

    /* --- Elementos --- */
    var revealEl = document.getElementById('reveal');

    /* ----------------------------------------------------------
       openEnvelope() — chamado pelo onclick do botão final
    ---------------------------------------------------------- */
    window.openEnvelope = function () {
        /* Mostra o container (display:block) */
        revealEl.classList.add('open');

        /* Pequeno delay para a transição de opacidade funcionar */
        setTimeout(function () {
            revealEl.classList.add('visible');
        }, 30);

        /* Dispara chuva de estrelinhas douradas */
        launchStars();
    };

    /* ----------------------------------------------------------
       launchStars() — cria partículas de ★ caindo pela tela
    ---------------------------------------------------------- */
    function launchStars() {
        var symbols = ['★', '✦', '✧', '✩', '⭐'];
        var total   = 60;  // quantidade de estrelinhas

        for (var i = 0; i < total; i++) {
            (function (delay) {
                setTimeout(function () {
                    var el = document.createElement('span');
                    el.className   = 'star-particle';
                    el.textContent = symbols[Math.floor(Math.random() * symbols.length)];

                    /* Posição horizontal aleatória */
                    el.style.left = Math.random() * 100 + 'vw';

                    /* Cor: dourado ou branco suave */
                    var golden = Math.random() < 0.6;
                    el.style.color = golden
                        ? 'rgba(201, 169, 110, ' + (Math.random() * 0.5 + 0.5) + ')'
                        : 'rgba(255, 255, 255, '  + (Math.random() * 0.4 + 0.4) + ')';

                    /* Tamanho variado */
                    var size = Math.random() * 14 + 10;
                    el.style.fontSize = size + 'px';

                    /* Duração e velocidade da queda */
                    var duration = Math.random() * 3 + 2; // 2s a 5s
                    el.style.animationDuration = duration + 's';

                    document.body.appendChild(el);

                    /* Remove do DOM após a animação terminar */
                    setTimeout(function () {
                        if (el.parentNode) {
                            el.parentNode.removeChild(el);
                        }
                    }, duration * 1000 + 100);

                }, delay);
            })(i * 60); // cada estrela começa 60ms depois da anterior
        }
    }

})();
