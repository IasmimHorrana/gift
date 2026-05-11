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
