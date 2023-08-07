import { loginPage} from "../page/LoginPage";
export class LoginValidator {

    verifyLoginElementsVisibility() {
        loginPage.verifyUsernameFieldVisibility();
        loginPage.verifyPasswordFieldVisibility();
        loginPage.verifyLoginBtnVisibility();
    }

    verifyErrorMessageVisibility() {
        loginPage.getErrorMessage().should("be.visible");
    }

    verifyErrorMessageText(expectedErrorMessage) {
        loginPage.getErrorMessage().should("have.text", expectedErrorMessage);
    }

}

export const loginValidator = new LoginValidator();