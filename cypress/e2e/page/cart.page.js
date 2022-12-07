class Cart{
    get cartIcon() { return ('.shopping_cart_link') }
    get cartNotification() { return ('.shopping_cart_badge') }

    get cartItems() { return ('.cart_item') }
    get cartItemsName() { return ('.inventory_item_name') }
    get cartQuantity() { return ('.cart_quantity') }

    get addToCartBtns() { return ('//button[text()="Add to cart"]') }
    // get addToCartBtns() { return ('.btn_inventory') }

    get removeItemBtns() { return ('//button[text()="Remove"]') }
    // get removeItemBtn() { return ('.cart_button') }
    
    get removeSauceLabBackPackBtn() { return ('#remove-sauce-labs-backpack') }
    get removedCartItem() { return ('.removed_cart_item') }

    get checkOutBtn() { return ('#checkout') }
    
    get firstName() { return ('#first-name') }
    get lastName() { return ('#last-name') }
    get zipCode() { return ('#postal-code') }

    get continueBtn() { return ('#continue') }
    get finishBtn() { return ('#finish') }

    get thankMessage() { return ('.complete-header')}
    get backToHomeBtn() { return('#back-to-products')}
    get errorMessagePostalCode() { return(`h3[data-test='error']`)}
    //#endregion

    //#region Methods
    addToCart(itemName){
        let addToCartBtn = `#add-to-cart-${this.applySelectorFormat(itemName)}`

        cy.get(addToCartBtn).should('be.visible')
        cy.get(addToCartBtn).click()
    }

    removeFromCart(itemName){
        let removeFromCartBtn = `#remove-${this.applySelectorFormat(itemName)}`

        cy.get(removeFromCartBtn).should('be.visible')
        cy.get(removeFromCartBtn).click()
    }

    navigateToCart(){
        cy.get(this.cartIcon).click()
    }

    applySelectorFormat(itemName){
        return itemName.toLowerCase().replaceAll(' ', '-')
    }

    checkoutProcess(firstName, lastName,zipCode){
        cy.get(this.checkOutBtn).click()
        cy.get(this.firstName).type(firstName)
        cy.get(this.lastName).type(lastName)
        cy.get(this.zipCode).type(zipCode)
        cy.get(this.continueBtn).click()
        cy.get(this.finishBtn).click()
        //cy.get(this.thankMessage).should('be visible')
        //cy.get(this.backToHomeBtn).should('be visible')
       // cy.get(this.backToHomeBtn).click()


    }

    checkoutProcessNegative(firstName, lastName){
        cy.get(this.checkOutBtn).click()
        cy.get(this.firstName).type(firstName)
        cy.get(this.lastName).type(lastName)
        cy.get(this.continueBtn).click()
        //cy.get(this.finishBtn).click()
        //cy.get(this.thankMessage).should('be visible')
        //cy.get(this.backToHomeBtn).should('be visible')
       // cy.get(this.backToHomeBtn).click()


    }

    checkoutSuccess(){
        cy.get(this.thankMessage).should('have.text','THANK YOU FOR YOUR ORDER')
        cy.get(this.backToHomeBtn).should('be.visible')
        cy.get(this.backToHomeBtn).click()


    }
}
export default new Cart()