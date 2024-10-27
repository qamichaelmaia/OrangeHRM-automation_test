describe("Login Test", () => {
    beforeEach(() => {
        cy.visit("/web/index.php/auth/login");
    });


    it("should display correct messages for username and password hints", () => {
        // Verifica se as dicas para Username e Password estão visíveis
        cy.get('.oxd-sheet').should("contain", "Username : Admin");
        cy.get('.oxd-sheet').should("contain", "Password : admin123");
    });

    it("should display error message for invalid login", () => {
        // Usando credenciais inválidas
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("invalidUsername");
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("invalidPassword");
        cy.get('.oxd-button').click();

        // Verifica se a mensagem de erro é exibida
        cy.get('.oxd-alert-content').should("contain", "Invalid credentials");
    });
    it("should login successfully", () => {
        
        cy.fixture("example").then((data) => {
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.username);
            cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.password);
            cy.get('.oxd-button').click();

        });
    });
});
