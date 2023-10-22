describe('Softwaretestingboard.com Testing', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com')
    })
    //Positif Test
    it('Registrasi Akun', () => {
        cy.get('.panel > .header > :nth-child(3) > a').click()
        cy.url().should('include', 'customer/account/create/')
        cy.get('#firstname').type('Naufal')
        cy.get('#lastname').type('Azman')
        cy.get('#email_address').type('abcabc@gmail.com')
        cy.get('#password').type('@wow123QAbootcamp')
        cy.get('#password-confirmation').type('@wow123QAbootcamp')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
        cy.url().should('include', '/customer/account/')
    })
 })
