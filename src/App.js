import React from 'react'
import Form from './components/Form'
import TodoItem from './components/TodoItem'
import User from './components/User'
import Posts from './components/Posts'
import { useSelector } from 'react-redux'

function App() {
  const todos = useSelector((state) => state.todo.todos);

  return (
    <div className='min-h-screen h-full w-screen bg-indigo-400'>
      <div className='container mx-auto px-4'>
        <header className='flex gap-20 '>
          <div className='w-1/3'>
            <h2 className='font-bold my-5'>Redux Toolkit State Change</h2>
            <User />
          </div>
          <div className='w-1/3'>
            <h2 className='font-bold my-5'>Redux Toolkit Todo App</h2>
            <Form />
            { todos.length > 0 ? 
              todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                />
              )) : <p className='text-center my-5 font-medium'>Пусто :(</p>
            }
          </div>
          <div className='w-1/3'>
            <h2 className='font-bold my-5'>Redux Toolkit Async Thunk</h2>
            <Posts />
          </div>
        </header>
      </div>
    </div>
  )
}

export default App
