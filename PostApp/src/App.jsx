import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateStatus } from './RTK/UserSlice'; // Adjust path
import authService from './Appwrite/config'; // Adjust path
import Layout from './layout/layout';
import { createHashRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Login from './components/login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Container from './components/Container';
import ForgetPasswordPage from './components/ForgetPasswordPage';
import ResetPasswordPage from './components/ResetPasswordPage';
import Posts from './components/Posts';
import Profile from './components/Profile';
import { updateData } from './RTK/UserDataSlice';

// 1. Keep the router definition here
const route = createHashRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index={true} element={<Container />} />
    <Route path='forget' element={<ForgetPasswordPage />} />
    <Route path='reset' element={<ResetPasswordPage />} />
    <Route path='login' element={<Login />} />
    <Route path='signin' element={<SignUp />} />
    <Route path='home' element={<Home />} />
    <Route path='posts' element={<Posts />} />
    <Route path='profile' element={<Profile />} />
  </Route>
));

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser().then((data) => {
      if (data) {
        dispatch(updateStatus(true))
        dispatch(updateData(data))
      } else {
        dispatch(updateData({}))
        dispatch(updateStatus(false))
      }
    }
    ).catch(
      dispatch(updateStatus(false)),
      dispatch(updateData({}))
    ).finally(() => {
      setLoading(false)
    })

  }, [dispatch]);

  // 5. If we are still checking the session, show a spinner
  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-slate-50">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-slate-500 font-bold animate-pulse">Syncing Session...</p>
        </div>
      </div>
    );
  }

  return <RouterProvider router={route} />;
}

export default App;