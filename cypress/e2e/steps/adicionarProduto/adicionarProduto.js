import { Given, When ,Then } from 'cypress-cucumber-preprocessor/steps';

let qtdProdutosCarrinhoInicio = 0;

Given('eu estou na página inicial', () => {
  cy.visit('https://www.demoblaze.com/index.html');
})

When('eu seleciono o produto "Nokia lumia 1520"', () => {
  cy.contains('a', 'Nokia lumia 1520')
    .should('be.visible')
    .click()
})

When('eu verifico se estou na página do produto', () => {
  cy.get('img[src="imgs/Lumia_1520.jpg"]')
    .should('be.visible')
})

Then('eu o adiciono ao carrinho e volto a Home', () => {
  cy.contains('a', 'Add to cart')
    .should('be.visible')
    .click()
  cy.on('window:alert', (str) => {
    expect(str).to.equal('Product added')
  })
  cy.contains('Home')
    .should('be.visible')
    .click()
})

// Adiciona o segundo produto
When('eu seleciono o produto "Samsung galaxy s6"', () => {
  cy.contains('a', 'Samsung galaxy s6')
    .should('be.visible')
    .click()
})

When('eu seleciono o produto "Samsung galaxy s6"', () => {
  cy.contains('a', 'Samsung galaxy s6')
    .should('be.visible')
    click()
})

When('eu confirmo se estou na página do produto', () => {
  cy.get('img[src="imgs/galaxy_s6.jpg"]')
    .should('be.visible')
})

Then('eu o adiciono ao carrinho e volto a Home', () => {
  cy.contains('a', 'Add to cart')
    .should('be.visible')
    .click()
  cy.on('window:alert', (str) => {
    expect(str).to.equal('Product added')
  })
  cy.contains('Home')
    .should('be.visible')
    .click()
})

// Consulta os itens no carrinho
When('eu seleciono o botão "Cart"', () => {
  cy.get('#cartur')
    .should('be.visible')
    .click()
})

When('eu consulto quantos produtos tenho no carrinho', () => {
  cy.contains('a', 'Delete')
    .its('length')
    .then((qtd) => {
    qtdProdutosCarrinhoInicio = qtd
  })
})

When('eu clico no botão "delete" de um dos produtos', () => {
  cy.contains('a', 'Delete')
    .should('be.visible')
    .first()
    .click()
})

Then('eu confirmo se o produto foi removido', () => {
  cy.contains('a', 'Delete')
    .its('length')
    .should('eq', qtdProdutosCarrinhoInicio - 1);
})