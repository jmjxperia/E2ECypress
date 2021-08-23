class OrderPage{

    enterUserName()
    {
        return cy.get("input[name='usernameInOrderPayment']")
    }

    enterPassword()
    {
        return cy.get("input[name='passwordInOrderPayment']")
    }

    clickLogin()
    {
        return cy.get('#login_btnundefined')
    }

    clickNext()
    {
        return cy.get('#next_btn')
    }

    enterSafePayUsername()
    {
        return cy.get("input[name='safepay_username']")
    }

    enterSafePayPassword()
    {
        return cy.get("input[name='safepay_password']")
    }

    checkboxSafePay()
    {
        return cy.get("input[name='save_safepay']")
    }

    clickPayNow()
    {
        return cy.get('#pay_now_btn_SAFEPAY')
    }

    orderMessage()
    {
        return cy.get("span[translate*='Thank_you']")
    }
}

export default OrderPage;