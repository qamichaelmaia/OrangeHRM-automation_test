const { generateUserData } = require('../support/generateData');

describe("Recruitment Search", () => {
    beforeEach(() => { cy.visit("/web/index.php/auth/login"); }); // Acessa a página de login antes de cada teste

    it("should searching collaborator successfully", () => {
        
        
        cy.fixture("example").then((data) => {
            // Preenche o login e realiza autenticação
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.username);
            cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.password);
            cy.get('.oxd-button').click(); 
            cy.get(':nth-child(5) > .oxd-main-menu-item > .oxd-text').click();
        });

        //Título de trabalho
        cy.get(':nth-child(1) > .oxd-grid-4 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
        cy.contains('Automaton Tester', { timeout: 3000 }).click();

        //Vaga
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
        cy.contains('Senior QA Lead').click();

        //Gerente de contratação
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
        cy.get('.oxd-select-dropdown .oxd-select-option').eq(1).click();
        
        //Status
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
        cy.contains('Job Offered', { timeout: 3000 }).click();

        //Nome do Candidato
        cy.get('.oxd-autocomplete-text-input > input').type('Tanmay')
        cy.get('.oxd-autocomplete-dropdown .oxd-autocomplete-option').eq(1).click();

        //Palavras-chave
        cy.get(':nth-child(2) > .oxd-input').type('QA Enginner')

        //Data de aplicação
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').click().type('2024-07-09').click()
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').click().type('2024-10-26').click()

        //Método de aplicação
        cy.get(':nth-child(3) > .oxd-grid-4 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
        cy.contains('Online', { timeout: 3000 }).click()

        //Procurar (resultado deve ser = Nenhum registro encontrado)
        cy.get('.oxd-form-actions > .oxd-button--secondary').click()
        cy.contains('No Records Found', { timeout: 3000 }).should('be.visible');
        
    });
});
