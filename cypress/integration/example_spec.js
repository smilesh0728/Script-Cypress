describe('My First Test',function(){
    it ('Does not do much', function() {
        expect(true).to.equal(true)
    })
    it ('Visits the kitchen sink', function() {
        cy.visit('https://example.cypress.io')
    })
    it ('Finds an element', function() {
        cy.contains('type').click()
    })
    it ('Makes an assertion', function() {
        cy.url()
            .should('include','/commands/actions')
    })
    it ('Gets, types and asserts', function() {
        cy.get('.action-email')
            .type('fake@email.com')
            .should('have.value',)
    
    })
    
})