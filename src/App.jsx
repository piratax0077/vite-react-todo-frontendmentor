import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CrossIcon from './components/icons/CrossIcon'
import MoonIcon from './components/icons/MoonIcon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain min-h-screen bg-gray-300">
      <header className='container mx-auto pt-8 px-4'>
        <div className="flex justify-between">
          <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.5em]">Todo</h1>
          <button><MoonIcon fill="#000" /></button>
        </div>
        
        <form className='flex gap-4 items-center bg-white overflow-hidden rounded-md py-4 px-4 my-8' action="">
          <span className='rounded-full border-2 h-3 w-3 inline-block'></span>
          <input className='w-full border-none outline-none text-gray-400' type="text" placeholder='Create new todo' />
        </form>
      </header>
      <main className='container mx-auto px-4'>
        <div className='bg-white rounded-md px-4 [&>article]:px-4 [&>article]:gap-4'>
          <article className='flex py-4 border-b-2'>
            <button className='flex-none'><span className='rounded-full border-2 h-3 w-3 inline-block'></span></button>
            <p className='grow text-gray-300'>Complete curse javascript</p>
            <button className='flex-none'><CrossIcon /></button>
          </article>
          <article className='flex py-4 border-b-2'>
            <button><span className='rounded-full border-2 h-3 w-3 inline-block'></span></button>
            <p className='grow text-gray-300'>Complete curse javascript</p>
            <button><CrossIcon /></button>
          </article>
          <article className='flex py-4 border-b-2'>
            <button><span className='rounded-full border-2 h-3 w-3 inline-block'></span></button>
            <p className='grow text-gray-300'>Complete curse javascript</p>
            <button><CrossIcon /></button>
          </article>
          <section className='py-4 flex justify-between'>
            <span className='text-gray-400'>5 items left</span>
            <button className=''>Clear Completed</button>
          </section>
        </div>
        
      </main>
      <section className='container mx-auto px-4 mt-8'>
        <div className='bg-white p-4 rounded-md flex justify-center gap-4'>
          <button className='text-blue-600'>All</button>
          <button className="hover:text-blue-600">Active</button>
          <button className="hover:text-blue-600">Completed</button>
        </div>
        
      </section>
      <p className='text-center mt-8'>Drag and Drop</p>
    </div>
    
  )
}

export default App
