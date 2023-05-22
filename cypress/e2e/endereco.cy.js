/// <reference types="cypress" />
import enderecoPage from '../support/page-objects/endereco.page';
const perfil = require('../fixtures/perfil.json')
const endereco = require('../fixtures/endereco.json')

describe('Funcionalidade Endereços', () => {

    beforeEach(() => {
        cy.visit ('minha-conta/')
       
        cy.login (perfil.usuario, perfil.senha )
    });
    
    
      it.only('Deve fazer cadastro de faturamento', () => {
        
        enderecoPage.editarEnderecofaturamento(endereco.nome, endereco.sobrenome, endereco.empresa, endereco.pais, endereco.rua, endereco.numero, endereco.cidade, endereco.estado, endereco.cep, endereco.celular, endereco.email)
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });
});
