// A component is a funtion with a capital first letter that encapsulates a reusable UI element of the page.

import { useState } from "react"
import { NewTodoForm } from "./NewTodoForm"
import { Todolist } from "./Todolist"

export default function App(){ // you can only return 1 element in a Component
  const [todos, setTodos]= useState([])

  function addTodo(title){
    setTodos(currentTodos=>{
      return [
        ...currentTodos,
        {id: crypto.randomUUID(), title, completed: false},
      ]
    })
  }
  
  function toggleTodo(id, completed){
    setTodos(currentTodos=>{
      return currentTodos.map(todo=>{
        if(todo.id===id){
          return {...todo, completed}
        }
        return todo
      })
    })
  }

  function deleteTodo(id){
    setTodos(currentTodos=>{
      return currentTodos.filter(todo=> todo.id !== id)
    })
  }
  return (
  <>
  <NewTodoForm  onSubmit={addTodo}  />
  <h1 className="header">ToDo List</h1>
  <Todolist todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
  </>
  )
}