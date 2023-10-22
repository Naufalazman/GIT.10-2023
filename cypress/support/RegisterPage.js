class RegisterPage {
    FirstName = '#firstname'
    LastName = '#lastname'
    Email = '#email_address'
    Pass = '#password'
    confirmPass = '#password-confirmation'
    crtAccBtn = '#form-validate > .actions-toolbar > div.primary > .action > span'
    passNULL = '#password-confirmation-error'
    emailNULL = '#email_address-error'
    FirstNameNULL = '#firstname-error'
    LastNameNULL = '#lastname-error'
    NullError = 'This is a required field.'
}

export default new RegisterPage()