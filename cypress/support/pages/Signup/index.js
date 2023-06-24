/// <reference types="Cypress" />


const elLogin = require('./elements').ELEMENTS


class Signup {
    accessPage() {
        cy.visit("https://automationexercise.com/signup")
    } 

    informationsUser() {
        cy.get('[data-qa="signup-name"]').type('teste')
        cy.get('[data-qa="signup-email"]').type('gabriela.rdpaiva@gmail.com')
    }

    signupButton() {
        cy.get('[data-qa="signup-button"]').click()
    }

    redirectUser() {
        cy.get(':nth-child(1) > b').should('have.text' , 'Enter Account Information')
    }
    checkPage() {
        cy.get('.clearfix > :nth-child(1)')
    }
    formFields() {
        cy.get(elLogin.genderId).click()
        //cy.get(elLogin.nameId).type('test')
        //cy.get(elLogin.emailId).type('gabriela.rdpaiva@gmail.com')
        cy.get(elLogin.passwordId).type('test@123')
        cy.get(elLogin.dayId).select('24')
        cy.get(elLogin.monthId).select('6')
        cy.get(elLogin.yearId).select('2020')
        cy.get(elLogin.firstnameId).type('gabi')
        cy.get(elLogin.lastnameId).type('paiva')
        cy.get(elLogin.companyId).type('quality')
        cy.get(elLogin.addressId).type('five street')
        cy.get(elLogin.countryId).select('Canada')
        cy.get(elLogin.stateId).type('Toronto')
        cy.get(elLogin.cityId).type('Toronto')
        cy.get(elLogin.zipcodeId).type('123456')
        cy.get(elLogin.mobileId).type('11960696144')



        

    }
}
export default new Signup()