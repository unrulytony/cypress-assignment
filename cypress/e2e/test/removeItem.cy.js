import Authenication from '../page/login.page'
import Cart from '../page/cart.page'

describe('Remove Item', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('should login with a valid user, add an item to cart and remove item successfully', () => {
      //cy.visit('/')
      Authenication.login('standard_user','secret_sauce')
      cy.get('.inventory_item_name').should('be.visible')
      Cart.addToCart('Sauce Labs Backpack')
      Cart.navigateToCart()
      cy.get(Cart.cartNotification).should('have.text', 1)
      Cart.removeFromCart('Sauce Labs Backpack')
  
      //cy.get(Cart.cartNotification).should('have.text', 1)
      //cy.get(Cart.cartQuantity).should('have.text', 1)
      cy.get(Cart.removeSauceLabBackPackBtn).should('not.exist')
      cy.get(Cart.cartItemsName).should('not.exist')
      
    })
})  