import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: false, 
  obj:{}
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
   
    updateStatus: (state,action)=>{
      state.status=action.payload;
    },
    addObj: (state,action)=>{
      state.obj=action.payload
    }
  },
});

// Export the actions to use in your components
export const { updateStatus , addObj} = userSlice.actions;

// Export the reducer to add to the store
export default userSlice.reducer;