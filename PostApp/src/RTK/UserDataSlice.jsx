import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const UserDataSlice = createSlice({
  name: 'UserData',
  initialState,
  reducers: {
   
    updateData: (state,action)=>{
      return action.payload;
    }
  },
});

// Export the actions to use in your components
export const { updateData } = UserDataSlice.actions;

// Export the reducer to add to the store
export default UserDataSlice.reducer;