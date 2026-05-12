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

## 🚀 Como publicar no GitHub Pages

Para colocar este site gratuitamente no ar pelo GitHub Pages, siga os passos abaixo:

1. **Atenção ao tamanho do áudio:** O GitHub não permite envio de arquivos maiores que 100MB (o atual tem ~176MB). Para usar o GitHub Pages, você precisa comprimir o arquivo `EpicSpaceMusic.mp3` em um site de compressão de áudio (deixe-o preferencialmente com menos de 20MB para carregar rápido na internet).
2. **Atualize o arquivo `.gitignore`:** Após substituir a música por uma menor, abra o arquivo `.gitignore` e comente a linha `*.mp3` (adicionando um `#` na frente, ficando `# *.mp3`) para permitir que o arquivo de música seja enviado.
3. **Crie o Repositório:** Crie um novo repositório na sua conta do GitHub.
4. **Envie os arquivos pelo terminal:**
   ```bash
   git init
   git add .
   git commit -m "Meu projeto"
   git branch -M main
   git remote add origin URL_DO_SEU_REPOSITORIO
   git push -u origin main
   ```
5. **Ative o GitHub Pages:**
   - No GitHub, vá na aba **Settings** (Configurações) do seu repositório.
   - No menu lateral esquerdo, clique em **Pages**.
   - Em "Build and deployment", selecione **Deploy from a branch**.
   - Em "Branch", selecione **main** e a pasta **/ (root)**.
   - Clique em **Save**.
   - Aguarde alguns minutos. O link do seu site aparecerá no topo dessa página (ex: `https://seunome.github.io/nomedorepositorio`).