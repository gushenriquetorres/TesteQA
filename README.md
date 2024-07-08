# Testes Automatizados para Processo Seletivo da Pacto

Bem-vindo ao repositório de testes automatizados para o processo seletivo da Pacto. Este repositório contém cenários de teste escritos em Cypress e Cucumber para verificar a funcionalidade do site da Pacto.

## Estrutura do Repositório

- **steps/**: Contém os arquivos de features escritos em Gherkin e contém as implementações dos passos em JavaScript que correspondem aos cenários de teste.

## Cenários de Teste

Este repositório inclui diversos cenários de teste que verificam funcionalidades importantes do site estudado (https://www.demoblaze.com/index.html). Aqui estão alguns dos principais cenários incluídos:

1. **Adicionar Produto ao Carrinho**:

   - Verifica se é possível adicionar um produto ao carrinho.
   - Verifica se o número de produtos no carrinho é atualizado corretamente.

2. **Deletar Produto do Carrinho**:

   - Verifica se é possível deletar um produto do carrinho.
   - Verifica se o número de produtos no carrinho diminui corretamente.

3. **Navegação pelas Categorias**:
   - Verifica a navegação entre diferentes categorias de produtos.
   - Verifica se os produtos dentro de cada categoria são carregados corretamente.

## Pré-requisitos

Para executar os testes, você precisará ter o Node.js e o Cypress instalados em sua máquina. Você pode instalar o Cypress seguindo as instruções abaixo.

### Instalação

1. Clone este repositório para sua máquina local.

````bash
 git clone https://github.com/gushenriquetorres/TesteQA.git
 cd TesteQA

2. Instale as dependências do projeto.
```bash
npm install

3. Instale o Cypress.
```bash
npm install cypress --save-dev

4. Instale o Cucumber para Cypress.
```bash
npm install --save-dev cypress-cucumber-preprocessor
````

## Executando os testes

Para executar os testes, use o seguinte comando:

```bash
npx cypress open
```

Isso abrirá a interface do Cypress, onde você poderá selecionar e executar os cenários de teste.
