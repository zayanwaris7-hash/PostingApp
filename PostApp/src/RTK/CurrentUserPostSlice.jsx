import { createSlice } from '@reduxjs/toolkit';

const initialState = [{}];

export const CurrentUserPostSlice = createSlice({
  name: 'Posts',
  initialState,
  reducers: {
   
    addPosts: (state,action)=>{
      state.push(action.payload)
    }
  },
});

// Export the actions to use in your components
export const { addPosts}=CurrentUserPostSlice.actions;

// Export the reducer to add to the store
export default CurrentUserPostSlice.reducer;