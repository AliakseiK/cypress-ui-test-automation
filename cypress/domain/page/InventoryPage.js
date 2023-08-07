export class InventoryPage  {

    constructor() {
        this.inventoryContainer = '.inventory_list';
        this.hamburgerMenu = "#react-burger-menu-btn";
        this.headerLabel = ".app_logo";
        this.bagBtn = ".shopping_cart_link";
        this.shoppingCartBadge = '.shopping_cart_badge';
    }

    getHamburgerMenu() {
        return cy.get(this.hamburgerMenu);
    }

    getBagBtn() {
        return cy.get(this.bagBtn);
    }

    getHeaderText() {
        return cy.get(this.headerLabel);
    }

    getInventoryItems() {
        return cy.get(this.inventoryContainer).find('.inventory_item');
    }

    clickAddItemToCartBtn(itemName) {
        this.getAddItemCartBtn(itemName).click();
    }

    getAddItemCartBtn(itemName) {
        return cy.xpath("//*[contains(@class, 'inventory_item')][.//*[contains(text(), '" + itemName + "')]]//*[contains(@class, 'btn_inventory')]");
    }

    getShoppingCartBadge() {
        return cy.get(this.shoppingCartBadge);
    }

    clickShoppingCartLink() {
        cy.get(this.bagBtn).click();
    }

}

export const inventoryPage = new InventoryPage();