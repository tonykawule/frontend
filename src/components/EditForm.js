import React, {useState} from 'react'

const EditForm = ({editTodo, task}) => {
  const [value, setValue] = useState(task.task)

  const handleSubmit = e => {
    e.preventDefault();
    editTodo(value, task.id)
    setValue(" ")
    
  }

  return (
    <div>
      <form className='todo-form' onSubmit={handleSubmit}>
        <input type="text" className='todo-input' value={value} placeholder='Update task'
        onChange={(e) => setValue(e.target.value)} />
        <button type='submit' className='todo-btn'>Update</button>
      </form>
    </div>
  )
}

export default EditForm
