# MARVEL HQ STORE

## Sobre o projeto
Uma loja virtual de quadrinhos da Marvel. O objetivo é ser uma loja moderna, intuitiva e responsiva, permitido adicionar HQs no carrinho e ver mais detalhes sobre cada obra.

## Tecnologias utilizadas
- Next.js (projeto inicialmente em React, migrado para Next)
- React.js
- Styled Components
- Redux Toolkit para gerenciamento de estado global
- Cypress para testes E2E
- Comic Vine API como fonte de dados (substituindo a API oficial da Marvel devido a erros no servidor)
- Vercel para deploy

## Minha Jornada e Aprendizados
Este foi um dos projetos mais desafiadores que desenvolvi, principalmente por ter sido meu primeiro contato com várias tecnologias novas.
- Migração de React para Next.js: comecei o projeto em React puro, mas percebi que o Next.js deixaria o roteamento mais prático e facilitaria o consumo da api. Isso exigiu aprendizado e adaptação no meio do desenvolvimento.
- Problemas com a API da Marvel: a API oficial estava retornando erro 418, "I am a teapot: Error: Server not available". Após pesquisar, vi que a API já tinha um histórico de ter quedas no servidor e outras pessoas também relataram problemas, então decidi trocar para a Comic Vine API e adaptar toda a lógica de busca e listagem para o novo formato de dados.
- Gerenciamento de estado com Redux Toolkit: primeira experiência com a ferramenta, onde implementei controle global de carrinho e contagem de itens.
- Testes E2E com Cypress: configurei e criei testes para fluxos essenciais, como adicionar HQ ao carrinho e verificar a contagem de itens.
- Estilização com Styled Components: costumo usar nos meus projetos, mas precisei relembrar alguns conceitos.
- Animações e detalhes visuais para deixar a experiência mais fluida.
  
## Funcionalidades Implementadas
- Listagem de dez HQs
- Página de detalhes de cada HQ
- Carrinho de compras com atualização em tempo real
- Contador de itens no ícone do carrinho
- Testes E2E cobrindo fluxos principais

## Testes
Foram implementados testes E2E com Cypress para:
- Verificar se a listagem é exibida corretamente
- Acessar a página de detalhes de uma HQ
- Adicionar uma HQ ao carrinho e confirmar que a contagem e os itens estão corretos
- Remover um item do carrinho

## Deploy
O projeto está hospedado na Vercel.

## Lições Aprendidas

Este projeto me ensinou muito sobre:

- Adaptabilidade quando recursos externos falham (mudança de API)
- Importância de escrever código limpo e modular para facilitar testes
- Gerenciamento de estado global com Redux Toolkit
- Boas práticas em responsividade e experiência do usuário
- Configuração e escrita de testes E2E
