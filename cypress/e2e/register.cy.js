const { generateUserData } = require("../support/generateData");

describe("Register Test", () => {
    beforeEach(() => {
        cy.visitLoginPage(); //Usando o comando customizado
    });

    it("should add collaborator successfully", () => {
        cy.fixture("example").then((data) => {
            cy.login(data.username, data.password);
        });

        cy.browseSection();
        cy.selectFunction();

        const userData = generateUserData();
        cy.fillForm(userData);
    });
});
