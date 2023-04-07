import './AddTodoModal.css';

export function AddTodoModal({setShowModal, handleTodoAdded}) {

  const handleOverlayClicked = (e) => {
    let className = e.target.classList[0];
    className == 'add-todo-overlay' ? setShowModal(false) : '';
  }

  return(
    <div className='add-todo-overlay' onClick={handleOverlayClicked}>
      <div className="add-todo-modal">
        <div className='add-todo-header'>
          <h4>¡Agrega un ToDo a tu lista!</h4>
          <button onClick={() => {setShowModal(false)}}>✖️</button>
        </div>
        <form className='add-todo-form' onSubmit={handleTodoAdded}>
          <div>
            <label htmlFor="add--todo-name">Tarea:</label>
            <input type="text" id="todo-name" name='todoName' required/>
          </div>
          <div>
            <label htmlFor="add--todo-description" className='add-todo-description'>Descripción (opcional):</label>
            <textarea id="add-todo-description" name="todoDescription" ></textarea>
          </div>
          <button>Agregar</button>
        </form>
        
      </div> 
    </div>
  )
}