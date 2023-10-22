class LoginPage {
    Email = '#email'
    Password = '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass'
    BtnSignin = '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span'
    ErrorMsg = '.message-error'
    ErrorInvalid = 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.'
    ErrorNullField = 'A login and a password are required.'
}

export default new LoginPage()