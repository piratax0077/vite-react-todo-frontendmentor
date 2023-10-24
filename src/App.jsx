import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import TodoComputed from './components/TodoComputed'
import TodoCreate from './components/TodoCreate'
import TodoFilter from './components/TodoFilter'
import TodoList from './components/TodoList'

const initialStateTodo = [
  {id:0, title:'Complete Online Curse Js', completed: true},
  {id:1, title:'Go to the school', completed: false},
  {id:2, title:'Go to the gym', completed: true},
  {id:3, title:'Go to the market', completed: false},
]

function App() {

  const [todos, setTodos] = useState(initialStateTodo)

  const createTodo = (title) => {
    const newTodo = {
      id: todos.length,
      title,
      completed: false
    }

    setTodos([...todos, newTodo])
  }

  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const totalTodos = todos.length

  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain min-h-screen bg-gray-300">
      <Header />
      
      <main className='container mx-auto mt-8 px-4'>
        <TodoCreate createTodo={createTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} />
        <TodoComputed totalTodos={totalTodos} />
        <TodoFilter />
      </main>
      
      <Footer />
    </div>
    
  )
}

export default App
