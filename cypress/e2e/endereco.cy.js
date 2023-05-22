/// <reference types="cypress" />

const perfil = require('../fixtures/perfil.json')

describe('Funcionalidade Endereços', () => {

    beforeEach(() => {
        cy.visit ('minha-conta/')
       
        cy.login (perfil.usuario, perfil.senha )
    });
    
    
      it('Deve fazer cadastro de faturamento', () => {
        //login
        //cadastro de endereço
    });
});
