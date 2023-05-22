/// <reference types="cypress" />

describe('Funcionalidade Endereços', () => {

    beforeEach(() => {
        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.login ('aluno_ebac@teste.com', 'teste@teste.com' )
    });
    
    
      it('Deve fazer cadastro de faturamento', () => {
        //login
        //cadastro de endereço
    });
});
