describe('My Fourth Test Suite', function () {
    it('My Fourth Test Case', function () {
        cy.visit("https://rahulshettyacademy.com/practice.php/")

        //verificação de pop-ups
        cy.get('#name').type('Vitor')
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()
        
        //verifica valor de um alerta
        cy.on('window:alert', (str) => {
            //Mocha
            expect(str).to.equal('Hello Vitor, share this practice page and share your knowledge')

        })

        cy.on('window:confirm', (str) => {
            //Mocha
            expect(str).to.equal('Hello Vitor, Are you sure you want to confirma?')

        })

        //abrir pagina que seria aberta em nova aba, na mesma aba
        cy.get('#opentab').invoke('removeAttr', 'target').click()

        //verifica url que está no momento
        cy.url().should('include', 'qaclickacademy')

        //retornar à pagina anterior, usando navegador
        cy.go(back)
    })
})