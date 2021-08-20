/// <reference types="cypress" />
import LandingPage from '../../support/pageObjects/LandingPage'
describe('Home page test ',function(){

    before(function(){

        cy.visit('http://advantageonlineshopping.com/#/')

    })
    it('check login',function(){
        const landing=new LandingPage()
        cy.title().should('include','Advantage Shopping')
        landing.clickLoginHeader().click()
        landing.enterUsername().type("testuser1")
        landing.enterPassword().type("qwertY1")
        landing.clickSignIn().click()
    })
})