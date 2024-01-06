class ProductPage
{

    getProductPageTitle()
    {
        return cy.get('.title');
    }

    verifyLoginSuccess(expectedPageHeading)
    {
        this.getProductPageTitle().should('have.text', expectedPageHeading);
    }
}

export default ProductPage;