import Authenication from '../page/login.page'
import Cart from '../page/cart.page'
const {faker} = require('@faker-js/faker');

describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should login with a valid user, add an item to cart and checkout successfully', () => {
    //cy.visit('/')
    Authenication.login('standard_user','secret_sauce')
    cy.get('.inventory_item_name').should('be.visible')
    Cart.addToCart('Sauce Labs Backpack')
    Cart.navigateToCart()

    cy.get(Cart.cartNotification).should('have.text', 1)
    cy.get(Cart.cartQuantity).should('have.text', 1)
    cy.get(Cart.removeSauceLabBackPackBtn).should('be.visible')
    cy.get(Cart.cartItemsName).should('have.text', 'Sauce Labs Backpack')
    Cart.checkoutProcess(faker.name.firstName(),faker.name.lastName(),faker.address.zipCode())
    Cart.checkoutSuccess()
  })

  it('should login with a valid user, add multiple items to cart and checkout successfully', () => {
    //cy.visit('/')
    Authenication.login('standard_user','secret_sauce')
    cy.get('.inventory_item_name').should('be.visible')
    Cart.addToCart('Sauce Labs Backpack')
    Cart.addToCart('Sauce Labs Bike Light')
    Cart.addToCart('Sauce Labs Bolt T-Shirt')
    Cart.navigateToCart()

    cy.get(Cart.cartNotification).should('have.text', 3)
    cy.get(Cart.cartQuantity).should('have.text', 111)
    cy.get(Cart.removeSauceLabBackPackBtn).should('be.visible')
   cy.get('.cart_list>div').should(($lis)=>{
    expect($lis,'3 items').to.have.length(5)
    expect($lis.eq(2), 'first item').to.contain('Sauce Labs Backpack')
    expect($lis.eq(3),'second item').to.contain('Sauce Labs Bike Light')
    expect($lis.eq(4),'third item').to.contain('Sauce Labs Bolt T-Shirt')
   })
    Cart.checkoutProcess(faker.name.firstName(),faker.name.lastName(),faker.address.zipCode())
    Cart.checkoutSuccess()
  })

})