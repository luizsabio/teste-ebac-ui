/// <reference types="cypress" />

context('Funcionalidade Login', () =>{

  beforeEach(() => {
    cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
  });
  
  

    it('Deve Fazer login com sucesso' ,  () => {
        
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should('contain', 'Minha conta')
    })

    it('Login negado, senha errada' ,  () => {
        
        
    
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@test.com')
        cy.get('.woocommerce-form > .button').click()  
        cy.get('.woocommerce-error > li').should('contain', 'Erro')
    })

    it.only('Login negado, email errado' ,  () => {
        
        
    
        cy.get('#username').type('alun_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()  
        cy.get('.woocommerce-error > li').should('contain', 'desconhecido')
    })
})

