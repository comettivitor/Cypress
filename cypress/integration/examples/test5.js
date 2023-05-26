describe('My Fifth Test Suite', function () {
    it('My Fifth Test Case', function () {
        cy.visit("https://rahulshettyacademy.com/practice.php/")

        //Selecionar item de tabela
        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
            const text = $el.text()
            if (text.includes('Python')) {
                cy.get('tr td:nth-child(2)').eq(index).next().then(function (price) {
                    const priceText = price.text()
                    expect(priceText).to.equal('25')
                })
            }
        }
        )
    })
})