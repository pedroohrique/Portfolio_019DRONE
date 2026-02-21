# Guia de Armazenamento e Exibição de Mídia

Este guia fornece recomendações sobre como armazenar e servir imagens e vídeos de alta qualidade para o seu portfólio de drone, garantindo desempenho e qualidade visual.

## 1. Recomendações de Armazenamento

Para um portfólio de drone, a qualidade da imagem é fundamental, mas o peso dos arquivos pode prejudicar a velocidade do site.

### Opção A: Cloudinary (Recomendado para Imagens e Vídeos)
*   **Vantagens:** Otimização automática (converte para WebP/Avif), redimensionamento dinâmico, player de vídeo otimizado.
*   **Uso:** Você faz o upload do arquivo original e o Cloudinary entrega a versão otimizada para o navegador do usuário.
*   **Custo:** Possui um plano gratuito generoso para pequenos portfólios.

### Opção B: Mux (Melhor para Vídeos)
*   **Vantagens:** Streaming adaptativo (como YouTube/Netflix). O vídeo não trava mesmo em conexões lentas.
*   **Uso:** Excelente para vídeos cinematográficos de 4k que precisam carregar instantaneamente.

### Opção C: Vercel Blob (Simplicidade)
*   **Vantagens:** Integração nativa com o Next.js. Muito fácil de configurar no código.
*   **Uso:** Armazenamento simples de arquivos.

## 2. Dicas de Otimização

*   **Formatos:** Use **WebP** para imagens e **MP4 (H.264)** ou **WebM** para vídeos.
*   **Compressão:** Antes de subir, use ferramentas como [TinyPNG](https://tinypng.com/) para imagens ou [Handbrake](https://handbrake.fr/) para vídeos.
*   **Miniaturas (Thumbnails):** Sempre exiba uma imagem estática (thumbnail) de alta qualidade antes de carregar o vídeo para economizar banda e tempo de carregamento.

## 3. Como integrar no código

Atualmente, o projeto utiliza URLs externas no arquivo `lib/data.ts`. Para trocar pelas suas mídias:

1. Suba o arquivo para o seu serviço escolhido (Cloudinary, Mux, etc).
2. Copie a URL gerada.
3. Substitua a URL no campo `image` ou `videoUrl` no `lib/data.ts`.

---

*Dica: Para vídeos de fundo no Hero, recomenda-se mantê-los abaixo de 5MB e sem áudio.*
