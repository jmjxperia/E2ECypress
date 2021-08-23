class LandingPage{

    clickLoginHeader()
    {
        return cy.get('#menuUser')
    }

    enterUsername()
    {
        return cy.get("input[name='username']")
    }

    enterPassword()
    {
        return cy.get("input[name='password']")
    }

    clickSignIn()
    {
        return cy.get('#sign_in_btnundefined')
    }

    verifyUser()
    {
        return cy.get('.hi-user.containMiniTitle.ng-binding')
    }

    clickSignOut()
    {
        return cy.get('#loginMiniTitle > [translate="Sign_out"]')
    }

    clickContactUs()
    {
        return cy.get("[translate='CONTACT_US']")
    }

    selectCategory()
    {
        return cy.get("select[name='categoryListboxContactUs']")
    }

    selectProduct()
    {
        return cy.get("select[name='productListboxContactUs']")
    }

    enterEmail()
    {
        return cy.get("input[name='emailContactUs']")
    }

    enterSubject()
    {
        return cy.get("textarea[name='subjectTextareaContactUs']")
    }

    clickSend()
    {
        return cy.get('#send_btnundefined')
    }

    clickSpeakers()
    {
        return cy.get('#speakersTxt')
    }

}

export default LandingPage;