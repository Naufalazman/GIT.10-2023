import MainPage from "../../support/MainPage"
import RegisterPage from "../../support/RegisterPage"

function randomFirstName(){
    const randomString = Math.random().toString(10).substring(2, 10)
    const Firstname = "User" + randomString
    return Firstname
}

function randomLastName(){
    const randomString = Math.random().toString(10).substring(2, 10)
    const Lastname = randomString
    return Lastname
}

function randomEmail(){
    const randomString = Math.random().toString(10).substring(2, 10)
    const email = randomString + "@gmail.com"
    return email
}

describe('Softwaretestingboard.com Testing', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com')    
    })
    //Positif Test
    it('Registrasi Akun', () => {
        cy.get(MainPage.BtnRegister).click()
        cy.url().should('include', 'customer/account/create/')
        cy.get(RegisterPage.FirstName).type(randomFirstName())
        cy.get(RegisterPage.LastName).type(randomLastName())
        cy.get(RegisterPage.Email).type(randomEmail())
        cy.get(RegisterPage.Pass).type('@wow123QAbootcamp')
        cy.get(RegisterPage.confirmPass).type('@wow123QAbootcamp')
        cy.get(RegisterPage.crtAccBtn).click()
    })
 })
