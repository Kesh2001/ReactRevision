// A component is a funtion with a capital first letter that encapsulates a reusable UI element of the page.

import { useEffect, useState } from "react"
import { NewTodoForm } from "./NewTodoForm"
import { Todolist } from "./Todolist"

export default function App(){ // you can only return 1 element in a Component
  
  const [todos, setTodos]= useState(()=>{
    const localValue= localStorage.getItem("ITEMS")
    if(localValue==null) return []
    return JSON.parse(localValue)
  })
  
  // dont run hooks conditionally or they will make the page not render if the condition is not satisfied
  
  useEffect(()=>{
    localStorage.setItem("ITEMS", JSON.stringify(todos)) //stores info to localstorage
  },[todos])// run this funtion every time the second property changes

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