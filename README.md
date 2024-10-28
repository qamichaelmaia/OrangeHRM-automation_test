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
  - Dado que navego para a seção de cadastro de colaborador
  - Quando preencho os campos obrigatórios (função do usuário, nome, status, username, senha)
  - E clico em "Save"
  - Então o funcionário deve ser adicionado com sucesso à lista de funcionários.

### 3. Recrutamento de Funcionários

- **Descrição**: Validar o processo de busca de colaboradores em um sistema de recrutamento, garantindo que todas as interações com a interface sejam realizadas corretamente e que o resultado esperado (nenhum registro encontrado) seja verificado. O uso do Cypress permite uma execução rápida e confiável dos testes, contribuindo para a manutenção da qualidade do sistema.
- **Cenário**:
  - Dado que estou na página de recrutamento
  - Quando insiro os dados da vaga, informações de candidatos e clico em "Search"
  - Então a mensagem "No Records Found" deve aparecer como confirmação.

## Tecnologias Utilizadas

- **JavaScript**: Linguagem de programação utilizada para escrever os testes.
- **Cypress**: Ferramenta de automação de testes end-to-end.
- **Mocha**: Fornece uma estrutura flexível para a organização e execução de testes, facilitando a escrita de testes assíncronos e a integração com outras bibliotecas de assertivas.
- **Faker**: Biblioteca utilizada para gerar dados fictícios de forma rápida e eficiente, permitindo criar entradas de teste realistas e variáveis sem a necessidade de usar dados reais, aumentando a robustez dos testes.

## Comandos Customizados (Custom Commands)

Neste projeto, foram utilizados comandos customizados para simplificar a estrutura dos testes e reutilizar ações comuns, como o login, navegação e preenchimento de formulários. Esses comandos customizados ajudam a manter o código limpo e organizado, tornando-o mais fácil de manter e expandir. 

Exemplos de alguns comandos customizados utilizados:

- `cy.visitLoginPage()`: Acessa diretamente a página de login.
- `cy.login(username, password)`: Realiza login no sistema com as credenciais fornecidas.
- `cy.browseSection()`: Navega para a seção de cadastro de colaboradores.
- `cy.fillForm(userData)`: Preenche automaticamente o formulário de cadastro com dados fornecidos dinamicamente.

Os comandos customizados são definidos no arquivo `cypress/support/commands.js`, onde cada comando é adicionado utilizando `Cypress.Commands.add`, permitindo chamadas mais legíveis e consistentes ao longo dos testes.

## Estrutura do Projeto

A estrutura do projeto segue as melhores práticas do Cypress, incluindo o uso de comandos customizados e organizando os testes em arquivos específicos para cada funcionalidade. Isso ajuda a manter o código escalável e eficiente, facilitando a expansão dos testes para novas funcionalidades do OrangeHRM.


## Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. Instale as dependências:
    ```bash
    npm install
    ```

## Execução dos Testes
    ```bash
    npx cypress open
    ```

## Licença
- Sinta-se à vontade para modificar o texto de acordo com suas necessidades ou adicionar mais detalhes sobre o projeto!
