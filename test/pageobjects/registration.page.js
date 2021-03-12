import Page from '../pageobjects/page'

class RegistrationPage extends Page {

    get inputFirstName () { return $('#customer_firstname') }
    get inputSecondName () { return $('#customer_lastname') }
    get inputPassword () { return $('#passwd') }
    get inputDays () { return $('#days') }
    get inputMonths () { return $('#months') }
    get inputYears () { return $('#years') }
    get inputCompany () { return $('#company') }
    get inputAddress1 () { return $('#address1') }
    get inputAddress2 () { return $('#address2') }
    get inputCity() { return $('#city') }
    get inputState() { return $('#id_state') }
    get inputPostcode() { return $('#postcode') }
    get inputAdditonInformation() { return $('#other') }
    get inputPhone() { return $('#phone') }
    get inputMobile() { return $('#phone_mobile') }
    get inputAlias() { return $('#alias') }
    get btnSubmit () { return $('#submitAccount') }

    register (data) {
        this.inputFirstName.setValue(data.firstName)
        this.inputSecondName.setValue(data.secondName)
        this.inputPassword.setValue(data.password)
        this.inputDays.selectByAttribute('value',data.days)
        this.inputMonths.selectByAttribute('value',data.months)
        this.inputYears.selectByAttribute('value', data.years)
        this.inputCompany.setValue(data.company)
        this.inputAddress1.setValue(data.address1)
        this.inputAddress2.setValue(data.address2)
        this.inputCity.setValue(data.city)
        this.inputState.selectByVisibleText(data.state)
        this.inputPostcode.setValue(data.postcode)
        this.inputAdditonInformation.setValue(data.additionInformation)
        this.inputPhone.setValue(data.phone)
        this.inputMobile.setValue(data.mobile)
        this.inputAlias.setValue(data.alias)
        this.btnSubmit.click()
    }

    open (path) {
        return super.open(path)
    }
}

export default new RegistrationPage()
