
describe('Testing Todo add and clear function',() => {
    
    //runs only the block of code inside it.only
    // it.only('should add a new task',()=>{
    //     cy.visit('http://todomvc-app-for-testing.surge.sh/')
    
    //     cy.get('.new-todo',{timeout : 6000}).type('Task Number 1{enter}')
    
    //     cy.get('label').should('have.text','Task Number 1')
    
    // })

    beforeEach(()=>{
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
    
        cy.get('.new-todo',{timeout : 6000}).type('Task Number 1{enter}')
    }) 
        

    it('should add a new task',()=>{
       
    
        cy.get('label').should('have.text','Task Number 1')
    
    })
    
    it('should mark a todo as completed',()=>{
        cy.get('.toggle').should('not.be.checked')
    
        cy.get('.toggle').click()
    
    })
    
    it('should clear completed task',()=>{
        cy.contains('Clear').click()
    
        cy.get('.todo-list').should('not.have.descendants','li')
    })
})
