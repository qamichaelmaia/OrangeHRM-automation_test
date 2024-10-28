Cypress.Commands.add("visitLoginPage", () => {
    cy.visit("/web/index.php/auth/login");
});


// Usando credenciais inválidas
Cypress.Commands.add("login", (username, password) => {
    cy.get(
        ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type(username);
    cy.get(
        ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type(password);
    cy.get(".oxd-button").click();
});

// Verifica se as dicas para Username e Password estão visíveis
Cypress.Commands.add("checkLoginHints", () => {
    cy.get(".oxd-sheet").should("contain", "Username : Admin");
    cy.get(".oxd-sheet").should("contain", "Password : admin123");
    cy.wait(2000);
});

// Verifica se a mensagem de erro é exibida
Cypress.Commands.add("checkErrorMessage", (message) => {
    cy.get(".oxd-alert-content").should("contain", message);
    cy.wait(3000);
});


// Navega para a seção de cadastro de colaborador
Cypress.Commands.add("browseSection", () => {
    cy.get(":nth-child(1) > .oxd-main-menu-item").click();
    cy.get(".orangehrm-header-container > .oxd-button").click();
});

// Seleciona função "ESS" e status "Enabled"
Cypress.Commands.add("selectFunction", () => {
    cy.get(
        ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    ).click();
    cy.contains("ESS").click();
    cy.get(
        ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    ).click();
    cy.contains("Enabled").click();
});

// Preenche o formulário de cadastro com nome e dados gerados e conclui cadastro
Cypress.Commands.add("fillForm", (userData) => {
    cy.get(".oxd-autocomplete-text-input > input").type("Orange");
    cy.contains("Orange Test").click();
    cy.get(
        ":nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type(userData.username);
    cy.get(
        ".user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type(userData.password);
    cy.get(
        ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type(userData.confirmPassword);
    cy.get(".oxd-button--secondary").click();
    cy.contains("Successfully Saved", { timeout: 3000 }).should("be.visible");
    cy.wait(3000);
});



Cypress.Commands.add("recruitmentSection", () => {
     
    cy.get(':nth-child(5) > .oxd-main-menu-item > .oxd-text').click();
});

//Título de trabalho
Cypress.Commands.add("fillFormFields", () => {
    cy.get(':nth-child(1) > .oxd-grid-4 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
    cy.get('.oxd-select-dropdown .oxd-select-option').eq(2).click()
    cy.wait(500);
});

//Vaga
Cypress.Commands.add("vacancy", () => {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
    cy.get('.oxd-select-dropdown .oxd-select-option').eq(4).click();
    cy.wait(500);
})

//Gerente de contratação
Cypress.Commands.add("manager", () => {
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
    cy.get('.oxd-select-dropdown .oxd-select-option').eq(1).click()
});

//Status
Cypress.Commands.add("status", () => {
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
    cy.get('.oxd-select-dropdown .oxd-select-option').eq(1).click();
})

//Nome do Candidato
Cypress.Commands.add("candidateName", () => {
    cy.get('.oxd-autocomplete-text-input > input').type('Tanmay')
    cy.get('.oxd-autocomplete-dropdown .oxd-autocomplete-option').eq(1).click();
})

//Palavras-chave
Cypress.Commands.add("keywords", () => {
    cy.get(':nth-child(2) > .oxd-input').type('QA Enginner')
})

//Data de aplicação
Cypress.Commands.add("dateApplication", () => {
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').click().type('2024-07-09').click()
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').click().type('2024-10-26').click()
})

//Método de aplicação
Cypress.Commands.add("methodApplication", () => {
    cy.get(':nth-child(3) > .oxd-grid-4 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.contains('Online', { timeout: 3000 }).click()
})

//Procurar (resultado deve ser = Nenhum registro encontrado)
Cypress.Commands.add("none", () => {
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    cy.contains('No Records Found', { timeout: 3000 }).should('be.visible');
})