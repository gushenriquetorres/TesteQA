import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('eu estou na página inicial', () => {
  cy.visit('https://www.demoblaze.com/index.html')
})

When('eu clico no botão "Contact" para abrir o modal do formulário', () => {
  cy.get('[data-target="#exampleModal"]')
    .click()
  cy.wait(1000)
})

When('eu preencho o campo "Contact Email" com "gustavohenrique@pactosolucoes.com.br"', () => {
  cy.get("#recipient-email")
    .should('be.visible')
    .type('gustavohenrique@pactosolucoes.com.br')
})

When('eu preencho o campo "Contato Name" com "Gustavo Henrique"', () => {
  cy.get('#recipient-name')
    .should('be.visible')
    .type('Gustavo Henrique')
})

When('eu preencho o campo "Message" com "Lorem Ipsum is simply dummy text of the printing and typesetting industry."', () => {
  cy.get('#message-text')
  .should('be.visible')
  .type('Lorem Ipsum is simply dummy text of the printing and typesetting industry.')
})

When('eu clico no botão "Send message"', () => {
  cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
  .should('be.visible')
  .click()
})

Then('eu devo ver um alerta com a mensagem "Thanks for the message!!"', () => {
  cy.on('window:alert', (str) => {
    expect(str).to.equal('Thanks for the message!!');
  })
})