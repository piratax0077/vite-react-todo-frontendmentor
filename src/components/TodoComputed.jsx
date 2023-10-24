const TodoComputed = ({totalTodos}) => {
    return (
        <section className='py-4 flex justify-between bg-white'>
            <span className='text-gray-400'>{totalTodos} items left</span>
            <button className=''>Clear Completed</button>
        </section>
    )
}

export default TodoComputed