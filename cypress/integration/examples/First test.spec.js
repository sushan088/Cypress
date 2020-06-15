/// <reference types="cypress" />

it('should navigate to ToDOmvc app', () =>{
    //working
    cy.visit('http://todomvc-app-for-testing.surge.sh/')
    //with error
    cy.visit('http://todomvc-app-for-testing.surge.sh/test.sh')
})