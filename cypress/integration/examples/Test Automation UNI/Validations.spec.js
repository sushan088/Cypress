it('should be able to add a new todo to the list', () =>{

    //Visit the site
    cy.visit('http://todomvc-app-for-testing.surge.sh/')

    cy.get('.new-todo',{timeout : 6000}).type('Task Number 1{enter}')

    cy.get('label').should('have.text','Task Number 1')
    //1st arguement of should : what to test
    //2nd argueement of should : value of what to test

    cy.get('.toggle').should('not.be.checked')

    cy.get('.toggle').click()

    cy.get('label').should('have.css','text-decoration-line','line-through')

    cy.contains('Clear').click()

    cy.get('.todo-list').should('not.have.descendants','li')

})