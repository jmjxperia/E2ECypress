/// <reference types="cypress" />
import LandingPage from '../../support/pageObjects/LandingPage'

describe('Home page test ',function(){
    const landing=new LandingPage()
    this.beforeEach(function(){

        cy.visit(Cypress.env('url'))
        cy.fixture('loadData').then(function(data){
            this.data=data
        
        })
    })
    
    it('check login',function(){

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

    it('check contact us',function(){
        landing.clickContactUs().click()
        landing.selectCategory().select('Speakers')
        landing.selectProduct().select('Bose SoundLink Wireless Speaker')
        landing.enterEmail().type(this.data.email)
        landing.enterSubject().type(this.data.subject)
        landing.clickSend().click()
        cy.get('.roboto-regular.successMessage.ng-binding').should('include.text','Thank you for contacting')
        cy.contains(' CONTINUE SHOPPING ').click()

    })
})