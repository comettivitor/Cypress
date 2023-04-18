describe('My Second Test Suite', function () {
    it('My Second Test Case', function () {
        //test case
        //testa acesso a URL
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

        //testa campo de busca, informando um valor dentro do campo de pesquisa
        cy.get('.search-keyword').type('ca')

        //espera o tempo de busca da pesquisa
        cy.wait(2000)

        //Aliasing -> adiciona um objeto css a uma variavel para reuso
        cy.get('.products').as('productLocator')

        //percorre array para encontrar objeto
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const textVeng = $el.find('.product-name').text()
            if (textVeng.includes('Cashews')) {
                cy.wrap($el).find('button').click()
            }
        })

        cy.get('.cart-icon > img').click()

        cy.contains('PROCEED TO CHECKOUT').click()

        cy.get(':nth-child(14)').click()

        

    })
})