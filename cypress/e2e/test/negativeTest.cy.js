import Authenication from '../page/login.page'
import Cart from '../page/cart.page'
const {faker} = require('@faker-js/faker');

describe('Negative Testn', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should login with a valid user, add an item to cart and not checkout missing zip code', () => {
    //cy.visit('/')
    Authenication.login('standard_user','secret_sauce')
    cy.get('.inventory_item_name').should('be.visible')
    Cart.addToCart('Sauce Labs Backpack')
    Cart.navigateToCart()

    cy.get(Cart.cartNotification).should('have.text', 1)
    cy.get(Cart.cartQuantity).should('have.text', 1)
    cy.get(Cart.removeSauceLabBackPackBtn).should('be.visible')
    cy.get(Cart.cartItemsName).should('have.text', 'Sauce Labs Backpack')
    Cart.checkoutProcessNegative(faker.name.firstName(),faker.name.lastName())
    cy.get (Cart.errorMessagePostalCode).should('exist')
    cy.get (Cart.errorMessagePostalCode).should('have.text', 'Error: Postal Code is required')
    //Cart.checkoutSuccess()
  })

})