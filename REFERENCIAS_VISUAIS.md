# Referências visuais e decisões de design — 30/10/2026

## Objetivo
Construir cartões profissionais individuais para consultores de consórcio. O acesso chega por NFC, QR Code ou link; a tarefa principal no celular é identificar o consultor e usar seus contatos.

## Referências verificadas
1. Wave Connect — https://wavecnct.com/  
   Referência de fluxo: compartilhar contato, salvar na agenda e identificar a pessoa antes de explorar informações adicionais.
2. Axis Arbor (Awwwards) — https://www.awwwards.com/inspiration/mobile_thumbnail-submission-63d9559a1b05b838416785  
   Retrato forte, bastante respiro e blocos editoriais de informação.
3. Finura (KOTA) — https://kota.co.uk/work/finura  
   Padrão da empresa mantido em todos os profissionais sem anular a identidade individual.
4. Cumming Capital Management (Awwwards) — https://www.awwwards.com/inspiration/mobile-cumming-capital-management  
   Tipografia, hierarquia e seções de leitura clara no smartphone.
5. Barjes Angulo (Wright Angle Media) — https://www.wamwebdev.com/work/barjes-angulo  
   Página de consultor voltada para contato e apresentação concreta, sem excesso de texto publicitário.
6. Paulinho Consórcios (Behance) — https://www.behance.net/gallery/245696277/Pagina-Institucional-Paulinho-Consorcios  
   Referência setorial para linguagem das modalidades e explicação do serviço, sem copiar o formato de landing page extensa.

## Decisões implementadas
- Home: mostra os dois produtos como cartões visuais, com links de acesso; explica o NFC em linguagem simples; mantém a faixa de 5 a 10 pessoas.
- Rafael: fotografia, identificação e contato em primeiro lugar; detalhes das modalidades em segundo plano; tipografia sóbria com fundo escuro.
- Mariana: mesma prioridade de contato; organização editorial clara; informações adicionais sobre modalidades e atendimento.
- Ícones: ações reconhecíveis (WhatsApp, agenda, compartilhar, casa, veículo, moto, serviços); nada decorativo sem significado.
- Sem métricas, depoimentos, certificações ou condições comerciais fictícias.
- As fotografias são referências de banco de imagem e devem ser trocadas pelas fotografias autorizadas dos consultores reais.
- O botão WhatsApp depende de inserção de números de telefone oficiais no app.js.
- Nenhum layout, fotografia ou marca das referências foi copiado diretamente.

## Verificação local
Chromium via Puppeteer em 360x780, 390x844 e 1366x900, para home, Rafael e Mariana:
- zero imagens quebradas e zero rolagem horizontal;
- WhatsApp visível sem rolagem nos dois perfis em 360 e 390 px;
- scripts, links e layout preservados.
