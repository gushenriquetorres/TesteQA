import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

// Testa a navegação na categoria Phones

Given('eu estou na página inicial', () => {
  cy.visit('https://www.demoblaze.com/index.html');
});

When('eu clico na categoria "Phones"', () => {
  cy.contains('Phones')
  .should('be.visible')
})

When('eu dou um scroll na página', () => {
  cy.scrollTo(0, 300);
})

When('eu seleciono o produto "Iphone 6 32gb"', () => {
  cy.contains('Iphone 6 32gb')
  .should('be.visible')
  .click()
})

When('eu verifico que estou na página do produto "Iphone 6 32gb" e volto para a Home', () => {
  cy.get('img[src="imgs/iphone_6.jpg"]')
    .should('be.visible')
  cy.contains('Home')
    .should('be.visible')
    .click()
})

// Testa a navegação na categoria Laptops

Given('eu estou na página inicial', () => {
  cy.visit('https://www.demoblaze.com/index.html');
});

When('eu clico na categoria "Laptops"', () => {
  cy.contains('Laptops')
  .should('be.visible')
  .click()
})

When('eu dou um scroll na página', () => {
  cy.scrollTo(0, 400);
})

When('eu seleciono o produto "MackBook Pro"', () => {
  cy.contains('a', 'MacBook Pro')
  .should('be.visible')
  .click()
})

When('eu verifico que estou na página do produto "MacBook Pro" e volto para a Home', () => {
  cy.get('img[src="imgs/macbook_air.jpg"]')
  .should('be.visible')
cy.contains('Home')
  .should('be.visible')
  .click()
})

// Testa a navegação na categoria Monitors

Given('eu estou na página inicial', () => {
  cy.visit('https://www.demoblaze.com/index.html');
});

When('eu clico na categoria "Monitors"', () => {
  cy.contains('Monitors')
  .should('be.visible')
  .click()
})

When('eu dou um scroll na página', () => {
  cy.scrollTo(0, 400);
})

When('eu seleciono o produto "Apple monitor 24"', () => {
  cy.contains('Apple monitor 24')
  .should('be.visible')
  .click()
})

When('eu verifico que estou na página do produto "Apple monitor 24" e volto para a Home', () => {
  cy.get('img[src="imgs/apple_cinema.jpg"]')
  .should('be.visible')
cy.contains('Home')
  .should('be.visible')
  .click()
})