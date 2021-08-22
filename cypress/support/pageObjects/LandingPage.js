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
}

export default LandingPage;