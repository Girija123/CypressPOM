class LoginPage {

    getUsername() {
        return cy.get('input[name="user-name"]');
    }

    getPassword() {
        return cy.get('#password');
    }

    getLoginButton() {
        return cy.get('#login-button');
    }

    getLoginFailedErrorMessage() {
        return cy.get('h3[data-test="error"]');
    }

    doLogin(username, password)
    {
        this.getUsername().type(username);
        this.getPassword().type(password);
        this.getLoginButton().click();
    }

    verifyFailedLogin(expectedErrorMsg)
    {
        this.getLoginFailedErrorMessage().should('have.text', expectedErrorMsg);
    }

}

export default LoginPage