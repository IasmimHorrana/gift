# Para Vitória ✦ — Página de Presente Romântica

Página web estática para hospedar no **Netlify** e compartilhar via QR code.

## 🗂 Estrutura do Projeto

```
gift/
├── index.html              ← Página principal (HTML completo e comentado)
├── assets/
│   ├── css/
│   │   └── style.css       ← Todos os estilos (com comentários por seção)
│   └── js/
│       ├── stars.js        ← Campo de estrelas animadas (canvas)
│       ├── audio.js        ← Controle do botão de música
│       ├── timeline.js     ← Scroll reveal + lightbox das fotos
│       └── envelope.js     ← Botão final + chuva de estrelinhas douradas
└── README.md
```

## 🎨 O que a página faz

- **Fundo azul-noite** com estrelas animadas piscando em tempo real
- **Música de piano suave** com botão ♪ para ligar/desligar
- **Timeline elegante** com 4 momentos especiais, cada um com a foto real da NASA
- **Ao clicar na foto** → abre em tela cheia com uma frase especial
- **Botão "abrir o envelope final"** → revela a mensagem com estrelinhas douradas caindo

## 📅 Os 4 Momentos

| Data | Foto da NASA | Ocasião |
|------|-------------|---------|
| 04/11/2025 | Comet Lemmon Crossing the Sky | Quando a vi pela 1ª vez |
| 20/12/2025 | A Solstice Sun Tattoo | Quando nos apaixonamos |
| 10/01/2026 | Jupiter and the Great Red Spot | 1º beijo |
| 14/02/2026 | Roses are Red | Pedido de namoro |

## ✏️ Como personalizar

### Alterar nome, textos e datas
Abra `index.html` e procure os comentários `➜ ALTERE:` — cada um indica exatamente o que mudar.

### Alterar as frases do lightbox (ao clicar na foto)
Edite o array `moments` em `assets/js/timeline.js`.

### Alterar a mensagem final revelada
Edite o conteúdo dentro de `<div id="reveal">` no `index.html`.

### Alterar a música
Substitua o atributo `src` do `<source>` dentro do `<audio id="bg-audio">` por outro arquivo `.mp3`.

## 🚀 Como publicar no Netlify

1. Acesse [netlify.com](https://netlify.com) e faça login
2. Arraste a pasta inteira `gift/` para a área de deploy do Netlify
3. Aguarde o deploy (normalmente menos de 1 minuto)
4. Copie a URL gerada e gere o QR code em [qr-code-generator.com](https://www.qr-code-generator.com/)
