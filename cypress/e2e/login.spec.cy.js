/// <reference types="cypress" />

const perfil = require('../fixtures/perfil.json')

context('Funcionalidade Login', () =>{

  beforeEach(() => {
    cy.visit ('minha-conta/')
  });
  
  

    it('Deve Fazer login com sucesso' ,  () => {
        
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should('contain', 'Minha conta')
    })

    it('Deve Fazer login com sucesso - usando arquivo de dados' ,  () => {
        
      cy.get('#username').type(perfil.usuario)
      cy.get('#password').type(perfil.senha)
      cy.get('.woocommerce-form > .button').click()
      cy.get('.page-title').should('contain', 'Minha conta')
  })


    it('Login negado, senha errada' ,  () => {
        
        
    
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@test.com')
        cy.get('.woocommerce-form > .button').click()  
        cy.get('.woocommerce-error > li').should('contain', 'Erro')
    })

    it('Login negado, email errado' ,  () => {
        
        
    
        cy.get('#username').type('alun_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()  
        cy.get('.woocommerce-error > li').should('contain', 'desconhecido')
    })
})

