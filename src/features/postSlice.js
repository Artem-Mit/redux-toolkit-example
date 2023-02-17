import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: []
};

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async (_, {dispatch}) => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    dispatch(setPosts(res.data.slice(0,10)));
  }
)

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload)
    }
  },
});

export const { setPosts, deletePost } = postsSlice.actions;
export default postsSlice.reducer;