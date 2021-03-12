import Page from '../pageobjects/page'

const title = 'My account - My Store'

class AccountPage extends Page {

    get getTitle() { return title}
    get headingTitle() { return $('h1.page-heading') }

    isVisible () {
        return super.isVisible(this.headingTitle)
    }
}

export default new AccountPage()
