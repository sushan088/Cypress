///<reference types = 'cypress' />

export class TodoPage{
    navigate(){
        cy.visit('http://todomvc-app-for-testing.surge.sh/')

    }

    addTodo(todoText){
        cy.get('.new-todo').type(todoText+"{enter}")
    }

    togggleActiveTask(TaskIndex){
        this.viewActiveList()
        while(TaskIndex != 0){
            cy.get(`:nth-child(${TaskIndex}) > .view > .toggle`,{timeout:5000}).click()
            TaskIndex = TaskIndex - 1
        }
                
    }

    toggleCompletedTask(TaskIndex){
        this.viewCompletedList()
        while(TaskIndex != 0){
            cy.get(`:nth-child(${TaskIndex}) > .view > .toggle`, {timeout : 600000}).click()

        }
    }

    validateTodoTxt(todoIndex, expectedText){
        cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`).should('have.text', expectedText)
    }

    viewActiveList(){        
        cy.contains('Active').click()
    }

    viewCompletedList(){
        //cy.contains('Completed').click()
        cy.get(':nth-child(3) > a').click()
    }

    viewAllList(){
        cy.contains('All').click()
    }

}
