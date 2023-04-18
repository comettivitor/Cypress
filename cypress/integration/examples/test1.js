//Cypress - Spec

describe('My First Test Suite', function () {
    it('My First Test Case', function () {
        //test case
        //testa acesso a URL
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

        //testa campo de busca, informando um valor dentro do campo de pesquisa
        cy.get('.search-keyword').type('ca')

        //espera o tempo de busca da pesquisa
        cy.wait(2000)

        //testa retorno da pesquisa, mostrando apenas elementos visiveis e confere quantidade
        cy.get('.product:visible').should('have.length', 4)

        //Aliasing -> adiciona um objeto css a uma variavel para reuso
        cy.get('.products').as('productLocator')

        //Parent Child Chaining >> Eliminando invisible fog
        cy.get('@productLocator').find('.product').should('have.length', 4)

        //click em botão de ADD
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function(){
            console.log('teste de print em console')
        })

        //percorre array para encontrar objeto
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const textVeng = $el.find('.product-name').text()
            if (textVeng.includes('Cauliflower')) {
                cy.wrap($el).find('button').click()
            }
        })

        //Confere se logo esta com texto correto
        cy.get('.brand').should('have.text', 'GREENKART')

        //log mostra resultado no painel de testes do cypress
        cy.get('.brand').then(function(logoElement){
            cy.log(logoElement.text())
        })

        

        //fixture

    })
})