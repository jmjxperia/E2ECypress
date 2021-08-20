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
}

export default LandingPage;