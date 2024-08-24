import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("")

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(value)
    setValue(" ")
    
  }

  return (
    <div>
      <form className='todo-form' onSubmit={handleSubmit}>
        <input type="text" className='todo-input' value={value} placeholder='Add a new todo'
        onChange={(e) => setValue(e.target.value)} />
        <button  type='submit' className='todo-btn'>Add</button>
      </form>
    </div>
  )
}

export default TodoForm
