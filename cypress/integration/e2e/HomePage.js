/// <reference types="cypress" />

describe('Home page test ',function(){

    before(function(){

        cy.visit('http://advantageonlineshopping.com/#/')

    })
    it('check login',function(){
        cy.title().should('include','Advantage Shopping')
    })
})