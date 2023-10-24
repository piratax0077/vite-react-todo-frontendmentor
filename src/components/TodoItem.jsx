import CrossIcon from "./icons/IconCross";
import IconCheck from "./icons/IconCheck";

const TodoItem = ({todo, deleteTodo}) => {

    const removeTodo = (id) => {
        deleteTodo(id)
    }

    return (
        <article className='flex py-4 border-b-2'>
            <button className='flex justify-center items-center rounded-full border-2 h-5 w-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                <IconCheck />
            </button>
            <p className='grow text-gray-300'>{todo.title}</p>
            <button className='flex-none' onClick={() => removeTodo(todo.id)}><CrossIcon /></button>
        </article>
    );
}

export default TodoItem;