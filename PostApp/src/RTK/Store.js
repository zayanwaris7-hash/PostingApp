import { configureStore } from '@reduxjs/toolkit';
import userSlice from './UserSlice';
import  UserDataSlice  from './UserDataSlice';

const store = configureStore({
  reducer: {
    user:userSlice,
    UserData:UserDataSlice
  },
});

export default store