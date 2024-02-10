import { TodoItem } from "./TodoItem"

export function Todolist({todos, toggleTodo, deleteTodo}){
 return (
 <ul className="list">
 {todos.length===0 && "No Todos"} {/*this is how to comment in front of lines that are javascripts. This lines format is called short-circuiting where the next thing after && renders*/}
 {todos.map(todo=>{ 
  return(
   <TodoItem {...todo} 
   key={todo.id} 
   toggleTodo={toggleTodo} 
   deleteTodo={deleteTodo}
   />
  )
 })} 
</ul>
)   
}