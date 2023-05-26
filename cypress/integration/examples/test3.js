describe('My Third Test Suite', function () {
    it('My Third Test Case', function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //verificação de checkboxes e assertion(should)        
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        //verificação de todods os checkboxes ao mesmo tempo
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])

        //verificação de dropdowns estaticos
        cy.get('select').select('option2').should('have.value', 'option2')

        //verificação de dropdowns dinamico
        cy.get("#autocomplete").type('ind')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if ($el.text() === "India") {
                $el.click()
            }
        })
        //autocomplete
        cy.get('#autocomplete').should('have.value', 'India')

        //verificação de objeto escondido
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        //verificação de radio
        cy.get('[value="radio2"').check().should('be.checked')

    })
})
