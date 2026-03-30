import { configureStore } from '@reduxjs/toolkit';
import userSlice from './UserSlice';
import { CurrentUserPostSlice } from './CurrentUserPostSlice';
import { CurrentPostSlice } from './CurrentPostSlice';

const store = configureStore({
  reducer: {
    user:userSlice,
    posts:CurrentUserPostSlice,
    CurrentPost:CurrentPostSlice
  },
});

export default store