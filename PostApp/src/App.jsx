
import Layout from './layout/layout';
import {createHashRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom';
import Login from './components/login';
import SignUp from './components/SignUp';
import Home from './components/Home'; 
import Container from './components/Container';
import ForgetPasswordPage from './components/ForgetPasswordPage';
import ResetPasswordPage from './components/ResetPasswordPage';

const route=createHashRouter(createRoutesFromElements(
  <Route path='' element={<Layout/>}>
    <Route index path='container'  element={<Container />} />
    <Route path='forget' element={<ForgetPasswordPage/>} />
    <Route path='reset'  element={<ResetPasswordPage/>} />
    <Route path='login' element={<Login/>}/>
    <Route path='signin' element={<SignUp/>}/>
    <Route path='home'  element={<Home/>} />
  </Route>
));

function App() {
 
  return (
    <RouterProvider router={route}/>
  )
}

export default App
