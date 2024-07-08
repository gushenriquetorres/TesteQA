Feature: Navegação pela categoria Phones

Scenario: Selecionar produtos na categoria de Phones
Given eu estou na página inicial
When eu clico na categoria "Phones"
And eu dou um scroll na página
And eu seleciono o produto "Iphone 6 32gb"
Then eu verifico que estou na página do produto "Iphone 6 32gb" e volto para a Home

Scenario: Selecionar produtos na categoria de Laptops
Given eu estou na página inicial
When eu clico na categoria "Laptops"
And eu dou um scroll na página
And eu seleciono o produto "MackBook Pro"
Then eu verifico que estou na página do produto "MacBook Pro" e volto para a Home

Scenario: Selecionar produtos na categoria de Monitors
Given eu estou na página inicial
When eu clico na categoria "Monitors"
And eu dou um scroll na página
And eu seleciono o produto "Apple monitor 24"
Then eu verifico que estou na página do produto "Apple monitor 24" e volto para a Home
