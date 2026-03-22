
import {createHashRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom';
import Layout from './layout/layout';
import Login from './components/login';
import SignUp from './components/SignUp';
import Home from './components/Home'; 
import Container from './components/Container';

const route=createHashRouter(createRoutesFromElements(
  <Route path='' element={<Layout/>}>
    <Route index  element={<Container />} />
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
