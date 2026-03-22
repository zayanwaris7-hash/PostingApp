import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  status: false, 
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Action to add a new post
    addPost: (state, action) => {
      // In RTK, you can "mutate" state directly (it uses Immer under the hood)
      state.items.push(action.payload);
    },
    // Action to delete a post
    deletePost: (state, action) => {
      state.items = state.items.filter(post => post.id !== action.payload);
    },
    // Action to set posts (e.g., after fetching from API)
    setPosts: (state, action) => {
      state.items = action.payload;
    },
    updateStatus: (state,action)=>{
      state.status=action.payload;
    }
  },
});

// Export the actions to use in your components
export const { addPost, deletePost, setPosts,updateStatus } = userSlice.actions;

// Export the reducer to add to the store
export default userSlice.reducer;