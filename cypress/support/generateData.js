// cypress/support/generateData.js
const { faker } = require('@faker-js/faker');

function generateUserData() {
    const password = faker.internet.password();
    return {
        username: faker.internet.userName(),
        password: password,
        confirmPassword: password, // Mesma senha para confirmação
        firstName: faker.person.fullName(),
    };
}

module.exports = { generateUserData };
