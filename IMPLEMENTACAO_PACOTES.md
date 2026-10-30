# Implementação dos pacotes — 30/10/2026

## Essencial
Página compacta, foto, nome, cargo, marca, descrição, botão de WhatsApp, vCard e compartilhamento. Mantido minimalista.

## Consultivo
Todos os elementos do Essencial, mais:
- seleção de imóveis, veículos e serviços, com estado e destaque de opção;
- mensagem específica para a modalidade selecionada;
- botão que abre WhatsApp com mensagem contextualizada após cadastrar o telefone;
- sem telefone configurado, demonstração com cópia da mensagem, sem inventar destinatários;
- perguntas frequentes recolhidas, com informações referenciadas no Banco Central;
- materiais de consulta recolhidos, atualmente apenas links públicos oficiais. Materiais comerciais específicos somente após aprovação da empresa.

A seleção não armazena dados pessoais. Nenhum número ou plano foi inventado.

## Limites e implantação
Os personagens e a marca são ilustrativos. As informações de cada vendedor, as imagens autorizadas, as modalidades reais, os contatos e os materiais comerciais serão substituídos na contratação. Tags físicas não fazem parte do desenvolvimento digital.

## Testes concluídos
Puppeteer/Chrome em 320×720, 390×844 e 1366×900: sem imagens quebradas nem rolagem horizontal. Seleção das três modalidades, estado aria-pressed, texto contextualizado, cópia de mensagem, construção de URL do WhatsApp quando configurado, expansão de FAQ e materiais, e carregamento de fotos verificados.
