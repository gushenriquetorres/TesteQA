Feature: Formulário de Contato

Scenario: Preencher todos os campos e enviar o formulário
Given eu estou na página inicial
When eu clico no botão "Contact" para abrir o modal do formulário
And eu preencho o campo "Contact Email" com "gustavohenrique@pactosolucoes.com.br"
And eu preencho o campo "Contato Name" com "Gustavo Henrique"
And eu preencho o campo "Message" com "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
And eu clico no botão "Send message"
Then eu devo ver um alerta com a mensagem "Thanks for the message!!"