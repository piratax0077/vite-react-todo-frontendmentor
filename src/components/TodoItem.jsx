import CrossIcon from "./icons/IconCross";
import IconCheck from "./icons/IconCheck";

const TodoItem = ({todo, deleteTodo}) => {

    const {id, title, completed} = todo

    const removeTodo = (id) => {
        deleteTodo(id)
    }

    return (
        <article className='flex py-4 border-b-2'>
            <button className={`rounded-full border-2 h-5 w-5 flex-none ${
                completed ? "flex justify-center place-items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" : "inline-block "}`}>
                {
                    completed && <IconCheck />
                }
                
            </button>
            <p className={`grow text-gray-300 ${completed && "line-through"}`} >{title}</p>
            <button className='flex-none' onClick={() => removeTodo(id)}><CrossIcon /></button>
        </article>
    );
}

export default TodoItem;