import loginPage from '../pageobjects/login.page'
import RegistrationPage from '../pageobjects/registration.page'
import AccountPage from '../pageobjects/account.page'
import * as dataHelper from '../../lib/data-helper'
import * as URL_suffix from '../../lib/url-path-suffix'
import {expect} from 'chai'

describe('Registration Scenario', () => {
    beforeEach('Launch the authentication page', ()=>{
        RegistrationPage.open(URL_suffix.account)
        
        expect(loginPage.getTitle).to.equal(browser.getTitle())
    })

    it('Should create a new user account', () => {
        loginPage.registerNewUser(dataHelper.registration.email)
        RegistrationPage.register(dataHelper.registration)
        
        expect(AccountPage.getTitle).to.equal(browser.getTitle())
        expect(AccountPage.isVisible()).to.be.true
    })
})