module.exports = {

    loginCredential:{
        email: 'michael_user@test.com',
        password: '12345678'
    },

    registration:{
        email: 'user.' + Math.floor(Math.random() * 1000) +  Math.random().toString(36).slice(2) + '@test.com',
        firstName: 'Paul ',
        secondName: 'Smith',
        password: '12345678',
        days: '15',
        months: '4',
        years: '1992',
        company: 'Company',
        address1: 'Beacon Street',
        address2: 'Bennington Street',
        city: 'Boston',
        state: 'Massachusetts',
        postcode: '02116',
        additionInformation: 'House',
        phone: '+351 643 674 79',
        mobile: '+0998 3346 231',
        alias: '540 Brookline Avenue'
    }
}