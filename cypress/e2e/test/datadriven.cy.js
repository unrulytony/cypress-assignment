import Authenication from '../page/login.page'
import sauceLabsLoginData from '../data/users.data'
describe('Login', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  //for (const records of sauceLabsLoginData){
    it('should login with a valid user', () => {
    //   cy.visit('/')
      Authenication.login(sauceLabsLoginData.valid.username,sauceLabsLoginData.valid.password)
      cy.get('.inventory_item_name').should('be.visible')
    })
 // }

 it('should not login with a locked out user', () => {
    // cy.visit('/')
    Authenication.login(sauceLabsLoginData.lockedOutUser.username,sauceLabsLoginData.lockedOutUser.password)
    //cy.get('.inventory_item_name').should('be.visible')
    cy.get(`h3[data-test='error']`).should('contain',sauceLabsLoginData.lockedOutUser.errorMsg)
  })

  it('should login with a peformance glitch user', () => {
    // cy.visit('/')
    Authenication.login(sauceLabsLoginData.performanceGlitchUser.username,sauceLabsLoginData.performanceGlitchUser.password)
    cy.get('.inventory_item_name').should('be.visible')
    
  })

  it('should login with a problem user', () => {
    // cy.visit('/')
    Authenication.login(sauceLabsLoginData.problemUser.username,sauceLabsLoginData.problemUser.password)
    cy.get('.inventory_item_name').should('be.visible')
    
  })
})