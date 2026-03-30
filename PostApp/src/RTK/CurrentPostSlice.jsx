import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    title:"",
    slug:"",
    content:""
};

export const CurrentPostSlice = createSlice({
  name: 'CurrentPost',
  initialState,
  reducers: {
   
    addValues: (state,action)=>{
      state.title=action.payload.title;
      state.slug=action.payload.slug;
      state.content=action.payload.content;
    }
  },
});

// Export the actions to use in your components
export const { addValues}=CurrentPostSlice.actions;

// Export the reducer to add to the store
export default CurrentPostSlice.reducer;