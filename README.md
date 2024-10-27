# Automação de Testes - OrangeHRM

Este repositório contém um conjunto de testes automatizados utilizando JavaScript e Cypress para a plataforma OrangeHRM, um sistema de gerenciamento de recursos humanos. Os testes cobrem funcionalidades essenciais como login, cadastro de funcionários, consulta, edição de perfil e solicitações de férias.

## Objetivo

O objetivo deste projeto é garantir que as funcionalidades principais do OrangeHRM funcionem corretamente, automatizando os testes para facilitar a manutenção e a validação do sistema.

## Funcionalidades Testadas

### 1. Login no Sistema

- **Descrição**: Verificar se o sistema permite que o usuário acesse sua conta com credenciais válidas e exiba mensagens de erro apropriadas para credenciais inválidas.
- **Cenário**:
  - Dado que estou na página de login do OrangeHRM
  - Quando insiro credenciais válidas e clico em "Login"
  - Então devo ser redirecionado para o painel principal.

### 2. Cadastro de Novo Funcionário

- **Descrição**: Testar o fluxo de criação de um novo funcionário, verificando se todos os campos obrigatórios estão preenchidos e se o funcionário é adicionado à lista de funcionários com sucesso.
- **Cenário**:
  - Dado que estou na página "Add Employee"
  - Quando preencho os campos obrigatórios (primeiro nome, último nome, ID do funcionário)
  - E clico em "Save"
  - Então o funcionário deve ser adicionado com sucesso à lista de funcionários.

### 3. Consulta de Funcionários

- **Descrição**: Verificar se o sistema permite pesquisar um funcionário específico pelo nome ou ID e se os resultados são exibidos corretamente.
- **Cenário**:
  - Dado que estou na página de listagem de funcionários
  - Quando insiro o nome ou ID do funcionário no campo de pesquisa e clico em "Search"
  - Então o funcionário correspondente deve ser exibido na lista de resultados.

### 4. Edição de Perfil do Funcionário

- **Descrição**: Garantir que o sistema permita atualizar informações do perfil de um funcionário, como nome, endereço e cargo.
- **Cenário**:
  - Dado que estou visualizando o perfil de um funcionário existente
  - Quando edito informações como endereço ou cargo e clico em "Save"
  - Então as informações atualizadas devem ser salvas com sucesso.

### 5. Solicitação de Férias

- **Descrição**: Testar o processo de solicitação de férias, incluindo a inserção de datas válidas e a verificação de saldo de férias antes da aprovação.
- **Cenário**:
  - Dado que estou na seção de solicitação de férias
  - Quando seleciono as datas de início e término e submeto a solicitação
  - Então a solicitação de férias deve ser registrada e aguardando aprovação.

## Tecnologias Utilizadas

- **JavaScript**: Linguagem de programação utilizada para escrever os testes.
- **Cypress**: Ferramenta de automação de testes end-to-end.

## Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
