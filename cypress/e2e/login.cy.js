import {inventoryPage} from "../domain/page/InventoryPage";
import {loginSteps} from "../domain/steps/LoginSteps";
import {inventorySteps} from "../domain/steps/InventorySteps";
import {loginValidator} from "../domain/validation/LoginValidator";
import {inventoryValidator} from "../domain/validation/InventoryValidator";
import validUsers from '../fixtures/valid-users.json'
import invalidUsers from '../fixtures/invalid-users.json'

describe('Login test verification', () => {

    context('Querying', () => {
        beforeEach(() => {
            cy.visit('https://www.saucedemo.com/');
        });

        it('Verify login elements', () => {
            loginValidator.verifyLoginElementsVisibility();
        });

        validUsers.forEach((user) => {
            it(`As a ${user.username} user I should be able to login and to add an item to shopping cart`, () => {
                loginSteps.login(user.username, user.password)
                inventoryValidator.verifyInventoryElementsVisibility();
                inventoryValidator.verifyHeaderText();
                inventoryValidator.verifyProductItemsCount(6);
                inventoryPage.clickAddItemToCartBtn("Sauce Labs Backpack");
                inventoryValidator.verifyShoppingCartBadgeText(1)
                // inventoryPage.clickShoppingCartLink();
            });
        });

        invalidUsers.forEach((user) => {
            it(`As a ${user.username} locked user I should see correct error message`, () => {
                loginSteps.login(user.username, user.password);
                loginValidator.verifyErrorMessageVisibility();
                loginValidator.verifyErrorMessageText("Epic sadface: Sorry, this user has been locked out.");
            });
        });
    });
});