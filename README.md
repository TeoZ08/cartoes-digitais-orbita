# Cartões digitais — Órbita Consórcios

Três páginas independentes, em HTML/CSS/JavaScript sem build: `index.html` apresenta os dois modelos, `rafael-martins.html` é o Essencial e `mariana-alves.html` é o Consultivo.

## Objetivo da versão minimalista

Os cartões chegam ao visitante por NFC, QR Code ou link. A tela inicial prioriza fotografia, nome e três ações: WhatsApp, Salvar contato e Compartilhar. O Consultivo acrescenta seleção de interesse, mensagem contextualizada para WhatsApp, FAQ recolhido e links de material de consulta verificados. O restante é conteúdo do material comercial, não do cartão.

## Configuração antes da entrega

Os nomes, a marca e as fotos são ilustrativos. Em `app.js`, substitua as informações de `PROFILES` pelos contatos reais, autorizados, no formato internacional sem pontuação (ex.: 5567999999999). Enquanto não existe número, o botão do WhatsApp informa que o canal não foi configurado. O vCard inclui os dados disponíveis e o link do perfil; não adiciona telefone inexistente.

## Estrutura

- `index.html`: escolha entre os dois cartões
- `rafael-martins.html`: perfil objetivo
- `mariana-alves.html`: perfil consultivo
- `styles.css`: estilos dos três layouts e responsividade
- `app.js`: vCard, compartilhamento e WhatsApp
- `assets/`: fotografias e SVGs locais
- `PESQUISA_MINIMALISMO.md`: referências e princípios usados

Os perfis permanecem acessíveis pelos endereços públicos existentes. Não é necessário mudar os links dos materiais comerciais.

## Fontes de recursos

Fotografias de referência da Pexels (2400 px); os modelos fotográficos não são os consultores nomeados e devem ser substituídos. Fontes DM Sans e Newsreader servidas pelo Google Fonts. SVGs locais; ícone de motocicleta baseado em Tabler Icons (MIT).
