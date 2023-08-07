import {inventoryPage} from "../page/InventoryPage";

export class InventoryValidator {

    verifyInventoryElementsVisibility () {
        inventoryPage.getHamburgerMenu().should("be.visible");
        inventoryPage.getBagBtn().should("be.visible");
    }

    verifyHeaderText() {
        inventoryPage.getHeaderText().should("have.text", "Swag Labs");
    }

    verifyProductItemsCount(productAmount) {
        inventoryPage.getInventoryItems().should("have.length", productAmount);
    }

    verifyShoppingCartBadgeText(expectedProductCount) {
        inventoryPage.getShoppingCartBadge().should("have.text", expectedProductCount);
    }

    verifyAddItemBtnVisibility(itemName) {
        inventoryPage.getAddItemCartBtn(itemName).should("be.visible");
    }
}

export const inventoryValidator = new InventoryValidator();