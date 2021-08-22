/// <reference types="cypress" />
import LandingPage from '../../support/pageObjects/LandingPage'

describe('Home page test ',function(){

    before(function(){

        cy.visit(Cypress.env('url'))
        cy.fixture('loadData').then(function(data){
            this.data=data
        
        })
    })
    
    it('check login',function(){
        const landing=new LandingPage()
        cy.title().should('include','Advantage Shopping')
        landing.clickLoginHeader().click()
        landing.enterUsername().type(this.data.username)
        landing.enterPassword().type(this.data.password)
        landing.clickSignIn().click()
        landing.verifyUser().should('have.text',this.data.username)
        landing.clickLoginHeader().click()
        landing.clickSignOut().click()
        landing.verifyUser().should('not.be.visible')

    })
})