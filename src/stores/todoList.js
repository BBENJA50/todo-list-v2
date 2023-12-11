import {defineStore} from "pinia";

export const useTodoListStore = defineStore('todoList',{
    state:() =>({
        todoList:[],
        todoListItem:[],
        id:0
    }),
    actions:{
        addTodo(item){
            this.todoList.push({item:item, id:this.id++, completed:false})
        },
        deleteTodo(itemId){
            this.todoList = this.todoList.filter((object)=>{
                return object.id !==itemId
            })
        },
        toggleCompleted(idToFind){
            const todo = this.todoList.find((obj)=> obj.id === idToFind)
            if (todo){
                todo.completed=!todo.completed
            }
        },
        addTodoItem(item){
            this.todoListItem.push({item:item, id:this.id++, completed:false})
        },
        deleteTodoItem(itemId){
            this.todoListItem = this.todoListItem.filter((object)=>{
                return object.id !==itemId
            })
        },
        toggleCompletedItem(idToFind){
            const todo = this.todoListItem.find((obj)=> obj.id === idToFind)
            if (todo){
                todo.completed=!todo.completed
            }
        }
    }
})
export const useTodoListItemStore = defineStore('todoListItem',{
    state:() =>({
        todoListItem:[],
        id:0
    }),
    actions:{
        addTodoItem(item){
            this.todoListItem.push({item:item, id:this.id++, completed:false})
        },
        deleteTodoItem(itemId){
            this.todoListItem = this.todoListItem.filter((object)=>{
                return object.id !==itemId
            })
        },
        toggleCompletedItem(idToFind){
            const todo = this.todoListItem.find((obj)=> obj.id === idToFind)
            if (todo){
                todo.completed=!todo.completed
            }
        }
    }
})