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
        cy.get('.panel > .header > :nth-child(3) > a').click()
        cy.url().should('include', 'customer/account/create/')
        cy.get('#firstname').type(randomFirstName())
        cy.get('#lastname').type(randomLastName())
        cy.get('#email_address').type(randomEmail())
        cy.get('#password').type('@wow123QAbootcamp')
        cy.get('#password-confirmation').type('@wow123QAbootcamp')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
        cy.url().should('include', '/customer/account/')
    })
 })
