import React from 'react'
//import {fontAwesomeIcon} from '@fortawesome/react-fontawesome'
//import {faPenToSquare} from '@fortawesome/fontawesome-svg-core'
//import {faTrash} from '@fortawesome/fontawesome-svg-core'

const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div>
      <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed': ""}`}>{task.task}</p>

      <div className='todo-list-item'>
        <button onClick={() => editTodo(task.id)}>edit</button>
        <button onClick={() => deleteTodo(task.id)}>X</button>
      </div>
      
    </div>
  )
}

export default Todo
