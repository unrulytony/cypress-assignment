class Authenication {
    get userName() { return ('#user-name')}
    get password() { return ('#password')}
    get loginBtn() { return ('#login-button')}

    login(username, password) {
        cy.get(this.userName).type(username)
        cy.get(this.password).type(password)
        cy.get(this.loginBtn).click()
    }

}

export default new Authenication()