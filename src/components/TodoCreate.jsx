const TodoCreate = () => {
    return (
        <form className='flex gap-4 items-center bg-white overflow-hidden rounded-md py-4 px-4 my-8' action="">
                <span className='rounded-full border-2 h-3 w-3 inline-block'></span>
                <input className='w-full border-none outline-none text-gray-400'  type="text" placeholder='Create new todo' />
        </form>
    )
};

export default TodoCreate;
