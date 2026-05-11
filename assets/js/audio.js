/* ============================================================
   AUDIO.JS — Controle do botão de música
   ============================================================
   Funcionalidades:
   - Ligar/desligar a música com o botão
   - Dois spans independentes (♪ / ⏸) com métricas próprias
   - Classe "playing" no botão ativa animação de pulso
   ============================================================ */

(function () {
    'use strict';

    /* --- Elementos --- */
    const audio = document.getElementById('bg-audio');
    const btn   = document.getElementById('audio-btn');
    const play  = document.getElementById('btn-icon-play');
    const pause = document.getElementById('btn-icon-pause');

    /* ----------------------------------------------------------
       toggleAudio — chamado pelo onclick do botão
    ---------------------------------------------------------- */
    window.toggleAudio = function () {
        if (audio.paused) {
            // Tenta dar play (pode ser bloqueado antes de interação)
            audio.play().catch(function () {
                // Silencia erros de autoplay bloqueado pelo navegador
            });
            play.style.display  = 'none';
            pause.style.display = '';
            btn.classList.add('playing');
            btn.title = 'Desligar música';
        } else {
            audio.pause();
            play.style.display  = '';
            pause.style.display = 'none';
            btn.classList.remove('playing');
            btn.title = 'Ligar música';
        }
    };

})();
