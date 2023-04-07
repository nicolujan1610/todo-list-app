import { useState } from 'react';
import './App.css'
import { TodoItem } from './components/TodoItem';
import {v4 as uuidv4} from 'uuid';
import { AddTodoModal } from './components/AddTodoModal';
import { useGetTodosFromLS } from './hooks/useGetTodosFromLS';

function App() {
  const {todos, setTodos} = useGetTodosFromLS();
  const [showModal, setShowModal] = useState(false);

  const handleTodoAdded = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let newTodo = {
      todoName: formData.get('todoName'),
      todoDescription: formData.get('todoDescription'),
      todoComplete: false,
      todoId: uuidv4()
    }
    setTodos(prevTodos => [...prevTodos, newTodo]);
    setShowModal(false);
  }

  const handleSaveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  
  return (
    <div className="App">
      <header className='app-header'>
        <h1>ToDo App!</h1>
      </header>
      <main className='main-container'>
        <div className='todo-container'>
          <div className='todo-header'>
            <h2>ToDo List!</h2>
            <div>
              <button onClick={()=>{setShowModal(true)}}>➕</button>  
              <button onClick={handleSaveTodos}>💾</button>  
            </div>
          </div>
          <div className='todo-main'>
            {
              todos.length > 0
              ?
              todos.map(todo => (
                <TodoItem 
                  key={todo.todoId}
                  todo={todo}
                  id={todo.todoId}
                  todos={todos}
                  setTodos={setTodos}
                />
              ))
              :
              <button className='add-first-todo' onClick={() => {setShowModal(true)}}>¡Agrega tu primer Todo!</button>
            }
          </div>
        </div>
      </main>
      {
        showModal&&
        <AddTodoModal
          setShowModal={setShowModal}
          handleTodoAdded={handleTodoAdded}
        />
      }
    </div>
  )
}

export default App
