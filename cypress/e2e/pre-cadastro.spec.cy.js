/// <reference types="cypress" />
 const { faker } = require('@faker-js/faker'); 
  const randomEmail = faker.internet.email(); 
  const randomfirstName = faker.name.firstName(); 
  const randomlastName = faker.name.lastName();  

describe('Funcionalidade Pré-Cadastro', () => {
    beforeEach(() => {
        cy.visit ('minha-conta/')
      });
    
            it('Deve completar o Pré-cadastro', () => {
                cy.get('#reg_email').type(faker.internet.email())
                cy.get('#reg_password').type('@gmail.com')
                cy.get(':nth-child(4) > .button').click()
                cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
                cy.get('#account_first_name').type(faker.name.firstName())
                cy.get('#account_last_name').type(faker.name.lastName())
                cy.get('.woocommerce-Button').click()
                cy.get('.woocommerce-message').should('contain', 'sucesso')
        
    });



});