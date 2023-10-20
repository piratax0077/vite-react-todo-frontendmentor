import CrossIcon from "./icons/CrossIcon";

const TodoItem = ({todo}) => {
    return (
        <article className='flex py-4 border-b-2'>
            <button className='flex-none'><span className='rounded-full border-2 h-3 w-3 inline-block'></span></button>
            <p className='grow text-gray-300'>{todo.title}</p>
            <button className='flex-none'><CrossIcon /></button>
        </article>
    );
}

export default TodoItem;