import {inventoryPage} from "../page/InventoryPage";

export class InventorySteps {

    addProductToBag(productName) {
        inventoryPage.addItemToCartBtn(productName);
        inventoryPage.clickShoppingCartLink();
    }
}

export const inventorySteps = new InventorySteps();