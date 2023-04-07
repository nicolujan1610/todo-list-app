import { useState } from "react";
import './TodoItem.css';

export function TodoItem ({todo, todos, setTodos}) { 
  const [todoOpen, setTodoOpen] = useState(false);
  const [checked, setTodoChecked] = useState(todo.todoComplete);
  
  const handleShowDescription = () => {
    setTodoOpen(!todoOpen)
  }

  const handleEliminateTodo = (id) => {
    let newTodos = todos.filter(todo => todo.todoId != id)
    setTodos(newTodos)
  }

  const handleTodoChecked = (id) => {
    let index = todos.findIndex(todo => todo.todoId == id);
    console.log(index);
    let newTodos = todos;
    newTodos[index].todoComplete = !checked;
    setTodoChecked(!checked);
    setTodos(newTodos);
  }


  return (
    <div>
      <div className="todo-item" style={todoOpen?{borderRadius: '8px 8px 0 0'}:{borderRadius:'8px'}}>
        <div className="todo-name-container">
          {
            todo.todoDescription.length > 0 &&
            <button onClick={handleShowDescription}>🔽</button>
          }
          <p style={todo.todoComplete?{textDecoration:'line-through'}:{textDecoration:'none'}}>{todo.todoName}</p>
          
        </div>
        <div className="todo-eliminate">
          <input 
            type="checkbox"
            defaultChecked={todo.todoComplete}
            onClick={()=>handleTodoChecked(todo.todoId)}
          />
          <button onClick={()=>handleEliminateTodo(todo.todoId)}>X</button>
        </div>
      </div>
      {
        todoOpen&&
        <div className="todo-open">
          <i>{todo.todoDescription}</i>
        </div>
      }
    </div>
  )



}