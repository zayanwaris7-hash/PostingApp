import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: false, 
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
   
    updateStatus: (state,action)=>{
      state.status=action.payload;
    }
  },
});

// Export the actions to use in your components
export const { updateStatus } = userSlice.actions;

// Export the reducer to add to the store
export default userSlice.reducer;