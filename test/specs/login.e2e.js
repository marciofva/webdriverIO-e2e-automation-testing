import loginPage from '../pageobjects/login.page'
import AccountPage from '../pageobjects/account.page'
import * as dataHelper from '../../lib/data-helper'
import * as URL_suffix from '../../lib/url-path-suffix'
import {expect} from 'chai'

describe('Login Scenario', () => {
    beforeEach('Launch the authentication page', ()=>{
        loginPage.open(URL_suffix.account)

        expect(loginPage.getTitle).to.equal(browser.getTitle())
    })

    it('Should login successfully', () => {
        loginPage.submitLogin(dataHelper.loginCredential.email, 
                              dataHelper.loginCredential.password)

        expect(AccountPage.getTitle).to.equal(browser.getTitle())
        expect(AccountPage.isVisible()).to.be.true
    })
})