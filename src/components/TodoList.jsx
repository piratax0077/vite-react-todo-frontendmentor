import TodoItem from "./TodoItem";


const TodoList = ({todos, deleteTodo}) => {
    return (
        <div className='bg-white rounded-md px-4 [&>article]:px-4 [&>article]:gap-4'>
          {
            todos.map(todo => (
              <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
            ))
          }
          
        </div>
    );
}

export default TodoList;