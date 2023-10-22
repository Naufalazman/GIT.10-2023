describe('WEB UI Magento', () => {
    beforeEach ('Registrasi Akun', () => {
      cy.visit('https://magento.softwaretestingboard.com')
      cy.wait(5000)
    })
    it('Registrasi Akun', () => {
        cy.get('.panel > .header > :nth-child(3) > a').click()
        cy.url().should('include', 'customer/account/create')
        cy.get('#firstname').type('Ega')
        cy.get('#lastname').type('safa')
        cy.get('#email_address').type('xxx@gmail.com')
        cy.get('#password').type('xx123@')
        cy.get('#password-confirmation').type('xx123@')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
        cy.url().should('include', 'customer/account/')
    })
    //Negatif test
    it('Registrasi Akun - First Name  Null', () => {
        cy.get('.panel > .header > :nth-child(3) > a').click()
        cy.url().should('include', 'customer/account/create')
        cy.get('#firstname').type('')
        cy.get('#lastname').type('safa')
        cy.get('#email_address').type('xxx@gmail.com')
        cy.get('#password').type('xx123@')
        cy.get('#password-confirmation').type('xx123@')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
        cy.url().should('include', 'customer/account/create')
    })
    //Login test
    it('Positif Login - Test', () => {
        cy.get('.panel > .header > :nth-child(3) > a').click()
        cy.url().should('include', 'customer/account/create')
        cy.get('#firstname').type('')
        cy.get('#lastname').type('safa')
        cy.get('#email_address').type('xxx@gmail.com')
        cy.get('#password').type('xx123@')
        cy.get('#password-confirmation').type('xx123@')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
        cy.url().should('include', 'customer/account/create')
    })
})


