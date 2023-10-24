import { useState } from "react";

const TodoCreate = ({createTodo}) => {

    const [title, setTitle] = useState('')

    const handleSubmitAddTodo = (e) => {
        e.preventDefault()
        if(!title) return
        createTodo(title)
        setTitle('')
    }

    return (
        <form className='flex gap-4 items-center bg-white overflow-hidden rounded-md py-4 px-4 my-8' onSubmit={handleSubmitAddTodo}>
                <span className='rounded-full border-2 h-3 w-3 inline-block'></span>
                <input className='w-full border-none outline-none text-gray-400' value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Create new todo' />
        </form>
    )
};

export default TodoCreate;
