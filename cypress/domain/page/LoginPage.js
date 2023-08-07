export class LoginPage  {
    constructor() {
        this.mainElement = '.login_container';
        this.usernameField = "#user-name";
        this.passwordField = "#password";
        this.loginBtn = "#login-button";
        this.errorMessage = "[data-test='error']"
    }

     verifyUsernameFieldVisibility() {
        cy.get(this.mainElement).find(this.usernameField ).should("be.visible");
     }

    verifyPasswordFieldVisibility() {
        cy.get(this.mainElement).find(this.passwordField).should("be.visible");
    }

    verifyLoginBtnVisibility() {
        cy.get(this.mainElement).find(this.loginBtn).should("be.visible");
    }

     enterUsername(username) {
         cy.get(this.mainElement).find(this.usernameField).type(username);
     }

     verifyUsername(expectedUsername) {
         cy.get(this.mainElement).find(this.usernameField).should("have.text", expectedUsername)
     }

    verifyPassword(expectedPassword) {
        cy.get(this.mainElement).find(this.passwordField).should("have.text", expectedPassword)
    }

    enterPassword(password) {
        cy.get(this.mainElement).find(this.passwordField).type(password);
    }

    clickLoginBtn() {
        cy.get(this.mainElement).find(this.loginBtn).click();
    }

    getErrorMessage() {
        return cy.get(this.mainElement).find(this.errorMessage);
    }
};

export const loginPage = new LoginPage();