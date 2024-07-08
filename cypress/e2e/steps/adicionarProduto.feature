Feature: Adicionar e Remover Produtos

Scenario: Adicionar os produtos ao carrinho
Given eu estou na página inicial
When eu seleciono o produto "Nokia lumia 1520"
And eu verifico se estou na página do produto
Then eu o adiciono ao carrinho e volto a Home

When eu seleciono o produto "Samsung galaxy s6"
And eu confirmo se estou na página do produto
Then eu o adiciono ao carrinho e volto a Home

When eu seleciono o botão "Cart"
When eu consulto quantos produtos tenho no carrinho
And eu clico no botão "delete" de um dos produtos
Then eu confirmo se o produto foi removido
