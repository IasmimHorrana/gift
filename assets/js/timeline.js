/* ============================================================
   TIMELINE.JS — Scroll reveal dos momentos + lightbox
   ============================================================
   Funcionalidades:
   - Intersection Observer: anima cada .moment quando entra na tela
   - Lightbox: abre foto em tela cheia com frase especial
   - Fecha o lightbox clicando no botão ou fora da imagem
   ============================================================ */

(function () {
    'use strict';

    /* ----------------------------------------------------------
       DADOS DOS MOMENTOS
       Altere aqui as mensagens românticas e frases do lightbox
    ---------------------------------------------------------- */
    var moments = [
        {
            /* 03/11/2025 — Eclipse total lunar + Via Láctea + Luz Zodiacal */
            lightboxMsg: "A Lua ficou laranja dentro da sombra da Terra, e a Via Láctea e a luz zodiacal se cruzaram no céu como uma dupla hélice. O universo inteiro se alinhou naquela noite — e foi nela que te vi pela primeira vez."
        },
        {
            /* 20/12/2025 — Solstice Sun Tattoo */
            lightboxMsg: "Naquele dia do solstício, o sol parou no céu por um instante. Eu sei que foi só para nos olhar juntos."
        },
        {
            /* 10/01/2026 — Júpiter com a Grande Mancha Vermelha */
            lightboxMsg: "Júpiter tem o maior campo magnético do nosso sistema. Mas, naquele dia, eu descobri que a maior força de atração do universo era o nosso beijo."
        },
        {
            /* 14/02/2026 — Roses are Red */
            lightboxMsg: "A NASA escolheu esse título nesse dia. O universo inteiro já sabia o que eu sentia antes de eu ter coragem de dizer."
        }
    ];

    /* ----------------------------------------------------------
       SCROLL REVEAL — Intersection Observer
       Adiciona a classe .visible quando cada momento entra na tela
    ---------------------------------------------------------- */
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // anima só uma vez
            }
        });
    }, {
        threshold: 0.15,         // dispara quando 15% do elemento está visível
        rootMargin: '0px 0px -50px 0px'
    });

    /* Observa todos os .moment e o #final */
    document.querySelectorAll('.moment, #final').forEach(function (el) {
        observer.observe(el);
    });

    /* ----------------------------------------------------------
       LIGHTBOX — abrir foto em tela cheia
    ---------------------------------------------------------- */
    var lightbox     = document.getElementById('lightbox');
    var lightboxImg  = document.getElementById('lightbox-img');
    var lightboxMsg  = document.getElementById('lightbox-msg');

    /**
     * openLightbox(index)
     * Chamado pelo onclick em cada .moment-img-wrap
     * @param {number} index — índice do momento (0 a 3)
     */
    window.openLightbox = function (index) {
        /* Pega o <img> dentro do .moment-img-wrap clicado */
        var imgWraps = document.querySelectorAll('.moment-img-wrap img');
        var src      = imgWraps[index] ? imgWraps[index].src : '';
        var alt      = imgWraps[index] ? imgWraps[index].alt : '';

        lightboxImg.src = src;
        lightboxImg.alt = alt;
        lightboxMsg.textContent = moments[index] ? moments[index].lightboxMsg : '';

        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden'; // trava o scroll
    };

    /**
     * closeLightbox()
     * Chamado pelo botão fechar e pelo clique fora da imagem
     */
    window.closeLightbox = function () {
        lightbox.classList.remove('open');
        document.body.style.overflow = '';
        lightboxImg.src = ''; // libera memória
    };

    /* Fecha ao clicar no fundo (fora da imagem e da mensagem) */
    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    /* Fecha com tecla ESC */
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });

})();
