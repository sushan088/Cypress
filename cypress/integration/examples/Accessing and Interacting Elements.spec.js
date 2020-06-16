it('should be able to add a new todo to the list', () =>{

    //Visit the site
    cy.visit('http://todomvc-app-for-testing.surge.sh/')

    //Accessing the element in the site
    cy.get('.new-todo')

    //inserting value to the element selected
    // timeout option will wait for the element to load under the define milisec.
    cy.get('.new-todo',{timeout : 6000}).type('Task Number 1{enter}')

    //Trying click
    cy.get('.toggle').click()

    //cy.get('.clear-completed').click()
    cy.contains('Clear completed').click()

    //For more info on Accessing elements and command
    //GOTO cypress.io and docs and for list of all commands Goto API
})