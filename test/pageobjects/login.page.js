import Page from '../pageobjects/page'

const title = 'Login - My Store'

class LoginPage extends Page {

    get getTitle() { return title}
    get inputUsername () { return $('#email') }
    get inputPassword () { return $('#passwd') }
    get btnSubmitLogin () { return $('#SubmitLogin') }
    get inputRegisterEmail() { return $('#email_create') }
    get btnSubmitRegister () { return $('#SubmitCreate') }

    submitLogin (username, password) {
        this.inputUsername.setValue(username)
        this.inputPassword.setValue(password)
        browser.waitAndClick(this.btnSubmitLogin)
    }

    registerNewUser (email) {
        this.inputRegisterEmail.setValue(email)
        browser.waitAndClick(this.btnSubmitRegister)
    }

    open (path) {
        return super.open(path)
    }
}

export default new LoginPage()
