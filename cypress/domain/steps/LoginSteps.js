import { loginPage} from "../page/LoginPage";

export class LoginSteps  {

    login(username, password) {
        loginPage.enterUsername(username);
        loginPage.enterPassword(password);
        loginPage.clickLoginBtn();
    }

}
export const loginSteps= new LoginSteps();