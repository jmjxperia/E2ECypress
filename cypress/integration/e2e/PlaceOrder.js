/// <reference types="cypress" />
import LandingPage from '../../support/pageObjects/LandingPage'
import ProductPage from '../../support/pageObjects/ProductPage'
import OrderPage from '../../support/pageObjects/OrderPage'

describe('Place Order test ',function(){
    const landing=new LandingPage()
    const product=new ProductPage()
    const order=new OrderPage()

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
        cy.selectProduct('HP Roar Wireless Speaker')
        for(var i=0;i<2;i++)
        {
            product.clickIncrement().click()
        }
        product.quantity().should('have.value',3)
        product.clickAddToCart().click()
        cy.go('back')
        cy.selectProduct('Logitech X100 Speaker')
        product.quantity().should('have.value',1)
        product.clickAddToCart().click()
        product.getCartCount().then(function(element){
            const c=element.text()
            expect(Number(c)).to.equal(4)
        })
        product.clickMenuCart().invoke('show')
        product.clickCheckout().click()
        var sum=0
        cy.get('td:nth-child(3)').each(($el,index,$list)=>{
            cy.log($el.text()) //to log the prices
            const actualText=$el.text()
            var res=actualText.split("$")
            res=res[1].trim()
            cy.log(res) //to log if $ has gone
            sum=Number(sum)+Number(res)
        }).then(function() {
            cy.log(sum)
        })
        cy.get('.roboto-medium.totalValue.ng-binding').then(function(element) {
            const amount=element.text()
            var res=amount.split("$")
            var total=res[1].trim()
            expect(Number(total)).to.equal(Number(sum))
        })
    })

    it('check placing the order',function(){
        landing.clickSpeakers().click()
        cy.url().should('include', 'Speakers')
        cy.get("li[ng-repeat*='product in']").should('have.length',7)
        cy.selectProduct('HP Roar Wireless Speaker')
        for(var i=0;i<2;i++)
        {
            product.clickIncrement().click()
        }
        product.clickAddToCart().click()
        product.clickMenuCart().invoke('show')
        product.clickCheckout().click()
        order.enterUserName().type(this.data.username)
        order.enterPassword().type(this.data.password)
        order.clickLogin().click()
        order.clickNext().click()
        order.clickPayNow().should('be.disabled')
        order.enterSafePayUsername().type(this.data.safeusername)
        order.enterSafePayPassword().type(this.data.safepassword)
        order.checkboxSafePay().uncheck().should('not.be.checked')
        order.clickPayNow().click()
        order.orderMessage().should('have.text',"Thank you for buying with Advantage")
    })
})