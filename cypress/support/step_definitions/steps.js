import {Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
import Signup from '../pages/Signup'

Given("I access google page", () => {
    cy.visit("https://www.google.com.br/");
})

When("I search for Grupo Quality", () => {
    cy.get('[title="Pesquisar"]').type('Quality Digital{enter}')
})

//Exercise

Given("I access the homepage", () => {
    cy.visit ("https://automationexercise.com/");
})

When("I click in login option", () => {
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
})

And("I enter username and password wrongs", () => {
    cy.get('[data-qa="login-email"]').type('test@gmail.com')
    cy.get('[data-qa="login-password"]').type('test123')
})

And("I click the login button", () => {
cy.get('[data-qa="login-button"]').click()
})

Then("A error message should be displayed", () => {
    cy.get('.login-form > form > p').should('have.text' , 'Your email or password is incorrect!')
})

//Exercise Signup

Given("I acess Signup page", () => {
   // cy.visit ("https://automationexercise.com/signup")
   Signup.accessPage()
})
When("I insert username and e-mail address", () => {
    //cy.get('[data-qa="signup-name"]').type('teste')
    //cy.get('[data-qa="signup-email"]').type('gabriela.rdpaiva@gmail.com')
    Signup.informationsUser()
})
And("I click Signup button", () => {
    //cy.get('[data-qa="signup-button"]').click()
    Signup.signupButton()
})
Then("I am redirect for other page", () => {
    //cy.get(':nth-child(1) > b').should('have.text' , 'Enter Account Information')
    Signup.redirectUser()
    //Signup.checkPage()
    Signup.formFields()
})
