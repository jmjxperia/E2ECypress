/// <reference types="cypress" />
import LandingPage from '../../support/pageObjects/LandingPage'
import ProductPage from '../../support/pageObjects/ProductPage'

describe('Home page test ',function(){
    const landing=new LandingPage()
    const product=new ProductPage()

    this.beforeEach(function(){

        cy.visit(Cypress.env('url'))
        cy.fixture('loadData').then(function(data){
            this.data=data
        
        })
    })

    it('check total amount from checkout',function(){
        landing.clickSpeakers().click()
        cy.url().should('include', 'Speakers')
        cy.get("li[ng-repeat*='product in']").should('have.length',7)
        cy.get(".productName.ng-binding").each(($el,index,$list)=>{
            if($el.text().includes('HP Roar Wireless Speaker'))
            {
                cy.get("li[ng-repeat*='product in']").eq(index).click()
            }
        })
        for(var i=0;i<2;i++)
        {
            product.clickIncrement().click()
        }
        product.quantity().should('have.value',3)
        product.clickAddToCart().click()
        product.clickMenuCart().invoke('show')
        product.clickCheckout().click()

    })
})