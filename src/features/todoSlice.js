import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: []
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.unshift(action.payload)
    },
    toggleCompletedTodo: (state, action) => {
      const currentTodo = state.todos.find((todo) => todo.id === action.payload);
      currentTodo.completed = !currentTodo.completed;
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    }
  }
})

export const { addTodo, toggleCompletedTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;