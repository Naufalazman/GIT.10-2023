import LoginPage from "../../support/LoginPage"
import MainPage from "../../support/MainPage"
import RegisterPage from "../../support/RegisterPage"
const userData = require('../../fixtures/User.json')

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
        cy.wait(2000)
    })
    //Positif Test Registrasi Akun
    it('Registrasi Akun', () => {
        cy.get(MainPage.BtnRegister).click()
        cy.get(RegisterPage.FirstName).type(randomFirstName())
        cy.get(RegisterPage.LastName).type(randomLastName())
        cy.get(RegisterPage.Email).type(randomEmail())
        cy.get(RegisterPage.Pass).type(userData.Valid_Password)
        cy.get(RegisterPage.confirmPass).type(userData.Valid_Password)
        cy.get(RegisterPage.crtAccBtn).click()
    })
    //Negatif Test Registrasi Akun
    it('Registrasi Akun - NULL Password', () => {
        cy.get(MainPage.BtnRegister).click()
        cy.get(RegisterPage.FirstName).type(randomFirstName())
        cy.get(RegisterPage.LastName).type(randomLastName())
        cy.get(RegisterPage.Email).type(randomEmail())
        cy.get(RegisterPage.crtAccBtn).click()
        cy.get(RegisterPage.passNULL).should('contain.text', RegisterPage.NullError)
    })
    it('Registrasi Akun - NULL Email', () => {
        cy.get(MainPage.BtnRegister).click()
        cy.get(RegisterPage.FirstName).type(randomFirstName())
        cy.get(RegisterPage.LastName).type(randomLastName())
        cy.get(RegisterPage.Pass).type(userData.Valid_Password)
        cy.get(RegisterPage.confirmPass).type(userData.Valid_Password)
        cy.get(RegisterPage.crtAccBtn).click()
        cy.get(RegisterPage.emailNULL).should('contain.text', RegisterPage.NullError)
    })
    it('Registrasi Akun - NULL Name', () => {
        cy.get(MainPage.BtnRegister).click()
        cy.get(RegisterPage.Email).type(randomEmail())
        cy.get(RegisterPage.Pass).type(userData.Valid_Password)
        cy.get(RegisterPage.confirmPass).type(userData.Valid_Password)
        cy.get(RegisterPage.crtAccBtn).click()
        cy.get(RegisterPage.FirstNameNULL).should('contain.text', RegisterPage.NullError)
        cy.get(RegisterPage.LastNameNULL).should('contain.text', RegisterPage.NullError)
    })
    //POSITIF TEST LOGIN
    it('Login Akun', () => {
        cy.get(MainPage.BtnLogin).click()
        cy.get(LoginPage.Email).type(userData.Valid_User)
        cy.get(LoginPage.Password).type(userData.Valid_Password)
        cy.get(LoginPage.BtnSignin).click()
    })
    //NEGATIF TEST LOGIN
    it('Login Akun - Invalid Username/Password', () => {
        cy.get(MainPage.BtnLogin).click()
        cy.get(LoginPage.Email).type(userData.Invalid_User)
        cy.get(LoginPage.Password).type(userData.invalid_Password)
        cy.get(LoginPage.BtnSignin).click()
        cy.get(LoginPage.ErrorMsg).should('contain.text', LoginPage.ErrorInvalid)
    })
    it.only('Login Akun - Null Email/Password', () => {
        cy.get(MainPage.BtnLogin).click()
        cy.get(LoginPage.Email).type(userData.Invalid_User)
        cy.get(LoginPage.BtnSignin).click()
        cy.wait(5000)
        cy.get(LoginPage.ErrorMsg).should('contain.text', LoginPage.ErrorNullField)
    })
 })
