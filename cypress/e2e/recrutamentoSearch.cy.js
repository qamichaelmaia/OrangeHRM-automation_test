const { generateUserData } = require('../support/generateData');

describe("Recrutamento Search", () => {
    beforeEach(() => { cy.visit("/web/index.php/auth/login"); }); // Acessa a página de login antes de cada teste

    it("should add collaborator successfully", () => {
        
        
        cy.fixture("example").then((data) => {
            // Preenche o login e realiza autenticação
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.username);
            cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.password);
            cy.get('.oxd-button').click(); 
            cy.get(':nth-child(5) > .oxd-main-menu-item > .oxd-text').click();
        });

        cy.get(':nth-child(1) > .oxd-grid-4 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
        cy.contains('Automaton Tester').click();
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
        cy.contains('Senior QA Lead').click();
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
        cy.contains('Ravi B').click();
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
        cy.contains('Job Offered').click();
        
    });
});
