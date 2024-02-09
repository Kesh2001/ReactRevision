// A component is a funtion with a capital first letter that encapsulates a reusable UI element of the page.

import { useState } from "react"

export default function App(){ // you can only return 1 element in a Component
  const [newItem, setNewItem]=useState("")//whenever state changes, it updates the entire component
  const [todos, setTodos]= useState([])


  function handleSubmit(e){
    e.preventDefault()
    setTodos((currentTodos)=>{
      return [
        ...currentTodos,
        {id:crypto.randomUUID(), title: newItem, completed: false},
      ]
    })
    setNewItem("")
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
  <form onSubmit={handleSubmit} className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input value={newItem} onChange={e=>setNewItem(e.target.value)} type="text" id="item"/>
    </div>
    <button className="btn">Add</button>
  </form>

  <h1 className="header">ToDo List</h1>
  <ul className="list">
    {todos.length===0 && "No Todos"} {/*his is how to comment in front of lines that are javascripts. This lines format is called short-circuiting where the next thing after && renders*/}
    {todos.map(todo=>{ 
      return <li key={todo.id}>
      <label>
        <input type="checkbox" checked={todo.completed} onChange={e=>toggleTodo(todo.id,e.target.checked)}/>
        {todo.title}
      </label>
      <button onClick={()=>deleteTodo(todo.id)} className="btn btn-danger">Delete</button>
    </li>
    })} 
  </ul>
  </>
  )
}