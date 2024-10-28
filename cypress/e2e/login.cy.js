describe("Login Test", () => {
    beforeEach(() => {
        cy.visitLoginPage(); // Usando o comando customizado
    });

    it("should display correct messages for username and password hints", () => {
        cy.checkLoginHints();
    });

    it("should display error message for invalid login", () => {
        cy.login("invalidUsername", "invalidPassword");

        cy.checkErrorMessage("Invalid credentials");
    });

    it("should login successfully", () => {
        cy.fixture("example").then((data) => {
            cy.login(data.username, data.password);
        });
    });
});
