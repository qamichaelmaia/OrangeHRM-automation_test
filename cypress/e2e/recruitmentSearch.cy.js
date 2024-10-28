const { generateUserData } = require('../support/generateData');

describe("Recruitment Search", () => {
       beforeEach(() => { 
        cy.visitLoginPage(); //Usando o comando customizado
    });

    it("should searching collaborator successfully", () => {
        
        
        cy.fixture("example").then((data) => {
            // Preenche o login e realiza autenticação
            cy.login(data.username, data.password);
        });
        cy.recruitmentSection();
        cy.fillFormFields();
        cy.vacancy();
        cy.manager();
        cy.status();
        cy.candidateName();
        cy.keywords();
        cy.dateApplication();
        cy.methodApplication();
        cy.none();
    });
});
