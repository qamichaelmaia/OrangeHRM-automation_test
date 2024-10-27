const { generateUserData } = require('../support/generateData');

describe("Cadastro Test", () => {
    beforeEach(() => { cy.visit("/web/index.php/auth/login"); }); // Acessa a página de login antes de cada teste

    it("should add collaborator successfully", () => {
        
        
        cy.fixture("example").then((data) => {
            // Preenche o login e realiza autenticação
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.username);
            cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.password);
            cy.get('.oxd-button').click(); 
        });
            // Navega para a seção de cadastro de colaborador
            cy.get(':nth-child(1) > .oxd-main-menu-item').click();
            cy.get('.orangehrm-header-container > .oxd-button').click();

            // Seleciona função "ESS" e status "Enabled"
            cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
            cy.contains('ESS').click();
            cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
            cy.contains('Enabled').click();

            const userData = generateUserData(); // Gera dados de usuário automaticamente
            // Preenche o formulário de cadastro com nome e dados gerados
            cy.get('.oxd-autocomplete-text-input > input').type("Orange"); cy.contains('Orange Test').click();
            cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userData.username);
            cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type(userData.password);
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userData.confirmPassword);

            cy.get('.oxd-button--secondary').click(); // Submete o cadastro

    });
});
