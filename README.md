# Projeto de Consulta de CEP

Este projeto foi desenvolvido com o objetivo de colocar em práticas algumas habilidades e conhecimentos de HTML, CSS, Javascript e jQuery.  Oferecendo uma interface simples e intuitiva, o sistema permite que os usuários consultem informações detalhadas sobre endereços a partir de CEPs específicos, com suporte à adição de múltiplos campos de consulta simultaneamente.

## Funcionalidades

- **Consulta de CEP**: Os usuários podem inserir um CEP para consulta na base de dados dos Correios, recebendo informações detalhadas sobre o endereço correspondente.
- **Máscara de Formato de CEP**: Ao inserir o CEP, o campo de entrada automaticamente aplica uma máscara de formatação para facilitar a leitura e evitar erros de digitação (formato `00.000-000`).
- **Campos Adicionais de CEP**: É possível adicionar até 4 campos extras de CEP, permitindo a consulta simultânea de até 5 CEPs por vez.
- **Exclusão de Campos Adicionais**: Campos de CEP extras podem ser removidos individualmente, permitindo ao usuário gerenciar as consultas de forma dinâmica.
- **Validação de Campo**: A consulta só é realizada se ao menos um campo de CEP estiver corretamente preenchido, garantindo que buscas inválidas não sejam processadas.
- **Exibição de Resultados**: Os resultados da consulta são exibidos diretamente na interface, proporcionando acesso rápido e fácil às informações buscadas.
- **Integração com API do ViaCEP**: Utiliza chamadas AJAX para consultar a API do ViaCEP, trazendo os dados de endereço de forma assíncrona.
- **Gestão de Dados de Consulta**: Os dados retornados pela API são armazenados em uma variável e, a partir deles, é criado um novo objeto com as informações formatadas para exibição.

## Integração com a API do ViaCEP

Este projeto faz uso da API pública do ViaCEP (`https://viacep.com.br/`), que fornece uma interface REST para a consulta de endereços a partir de CEPs. As chamadas são feitas via AJAX, assegurando uma experiência de usuário fluida e responsiva.

