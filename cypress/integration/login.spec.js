/// <reference types="cypress" />

  describe('Automation', () => {
    before(() => {
      cy.visit("https://automationexercise.com/login");
    });

    beforeEach('Sign Up', () => {
      cy.signUp("Sonia", "sania@mailinator.com");
    });

    it('Login', () => {

    })
  
  });