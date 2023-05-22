/// <reference types="cypress" />
var quantidade = 3

describe('Funcionalidade página de produtos', () => {
    beforeEach(() => {
        cy.visit('produtos/')
    });

    it('Deve selecionar um produto da página', () => {
        cy.get(' .product-block').first().click()
    });

    it('Deve adicionar um produto ao carrinho', () => {
        cy.get(' .product-block').eq(0).click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').click().clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)

    });
});