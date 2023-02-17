import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
import todoSlice from "../features/todoSlice";
import postSlice from "../features/postSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    todo: todoSlice,
    post: postSlice,
  }
})