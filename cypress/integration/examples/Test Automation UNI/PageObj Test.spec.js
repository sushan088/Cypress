///<reference types="cypress" />

import { TodoPage } from "../../../Page Objects/todo-pageObject";

describe('filtering',()=>{
    const todoPage = new TodoPage()


    beforeEach(()=>{
        todoPage.navigate()
        todoPage.addTodo('Task 1')
        todoPage.addTodo('Task 2')
        
        
    })

    it.only('should toggle Active task',()=>{
        todoPage.togggleActiveTask(1)
        
    })

    it('should toggle Completed task',()=>{
        todoPage.toggleCompletedTask(1)
    })

    it('should validate todos',()=>{
        todoPage.validateTodoTxt(1, 'Task 1')
        todoPage.validateTodoTxt(0,'Task 2')
    })

    it('should show active todo list',()=>{
        todoPage.viewActiveList()
    })

    it('should show completed todo list',()=>{
        todoPage.viewCompletedList()
    })

    it('should show All todo list',()=>{
        todoPage.viewAllList()
    })

    
})