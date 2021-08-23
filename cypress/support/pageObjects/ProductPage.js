class ProductPage{

    clickAddToCart()
    {
        return cy.get('.fixedBtn')
    }

    clickIncrement()
    {
        return cy.get('.plus')
    }

    quantity()
    {
        return cy.get("input[name='quantity']")
    }

    clickMenuCart()
    {
        return cy.get('#menuCart')
    }

    clickCheckout()
    {
        return cy.get('#checkOutPopUp')
    }

    getCartCount()
    {
        return cy.get('#shoppingCartLink > .cart')
    }

}

export default ProductPage;