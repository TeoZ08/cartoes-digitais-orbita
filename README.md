# Protótipos NFC para equipe de consórcios

Projeto demonstrativo (HTML/CSS/JavaScript sem dependências externas) preparado para GitHub Pages e Vercel.

## Arquivos
- `index.html`: página inicial para comparar dois modelos.
- `demo-essencial.html`: cartão do consultor Rafael Martins.
- `demo-consultivo.html`: miniportfólio da consultora Mariana Alves.
- `styles.css` e `app.js`: estilos e funcionalidades.
- `assets/`: imagens ilustrativas de pessoas geradas artificialmente.

## Teste local
Na pasta `site`, execute `python3 -m http.server 8080` e acesse `http://localhost:8080`.

## Publicação
**GitHub Pages**: publicar o conteúdo da pasta `site` na raiz do branch de distribuição. Links relativos permitem subdiretórios de repositório.

**Vercel**: importar o repositório com `site` como Root Directory e Framework Preset `Other` (sem build obrigatório), ou publicar os arquivos estáticos conforme a configuração do projeto.

## NFC
Depois que o endereço final estiver publicado, gravar a URL individual de cada perfil em uma tag NFC NTAG213/215/216 usando um app de gravação; testar em Android e iPhone compatíveis. A aproximação pode exibir uma notificação que o usuário toca para abrir o link. Um QR Code poderá usar a mesma URL.

## Limites e segurança
- Perfis, nomes, fotos e marca **fictícios**.
- Botões de contato e simulação abrem avisos ilustrativos; não enviam mensagens ou dados.
- Botões de compartilhar e salvar vCard funcionam, observadas permissões e limitações do navegador.
- Não incluir dados reais de clientes, promessas de contemplação ou condições financeiras não verificadas.
- Para produção, configurar números oficiais, dados autorizados pela empresa e política de privacidade, caso haja formulários de coleta.
- Google Fonts é opcional; CSS possui fallback.
