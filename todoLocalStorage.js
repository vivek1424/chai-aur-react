import { useEffect, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import Parent from './components/Parent/Parent'
import HeavyMemo from './components/HeavyMemo'
import { useToggle } from './components/CustomHooks/useToggle'
import { nanoid } from 'nanoid'

function App() {
  const [todo, setTodo] = useState(()=>{ 
    const saved= localStorage.getItem('todos')
    return saved? JSON.parse(saved) : []
  })
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmedText = text.trim()
    if (!trimmedText) return
    const newTodo = {
      content: trimmedText,
      id: nanoid()
    }
    setTodo([...todo, newTodo])
    setText('')
  }
  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todo))
  }, [todo])
  const handleDelete = (id) => {
    const newTodo = todo.filter((t) => t.id !== id)
    setTodo(newTodo)
  }

  return (
    <>
      <h2>Todo List:</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Enter task:</label>
          <input
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder='enter task'
            type="text" />
          <button>Add</button>
        </form>
      </div>
      {todo.length !== 0 &&

        todo.map((t) => (
          <>
            <div>
              <li key={t.id}>{t.content}</li>
              <button onClick={()=>{handleDelete(t.id)}}>Delete</button>
            </div>
          </>
        ))
      }
    </>
  )
}

export default App




