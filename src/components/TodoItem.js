import { useDispatch } from 'react-redux';
import { toggleCompletedTodo, deleteTodo } from '../features/todoSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const toggleCompletedHandler = (id) => {
    dispatch(toggleCompletedTodo(id))
  };
  const deleteTodoHandler = (id) => {
    dispatch(deleteTodo(id))
  };
  return (
    <div className='flex justify-between items-center my-2'>
      <div 
      className='text-sm px-4 py-2 cursor-pointer bg-lime-300 hover:bg-lime-400'
      onClick={() => toggleCompletedHandler(todo.id)}
      >
        Complete
      </div>
      <div className={`text-sm ${todo.completed ? 'line-through font-medium text-lime-400' : ''}`}>
        {todo.text}
      </div>
      <div 
      className='text-sm px-4 py-2 flex bg-red-400 hover:bg-red-500 transition-all text-white cursor-pointer'
      onClick={() => deleteTodoHandler(todo.id)}
      >
        Delete
      </div>
    </div>
  )
}

export default TodoItem
