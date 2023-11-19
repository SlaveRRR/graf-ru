import { FC } from 'react'



import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Error from './pages/Error';
import LayoutPage from './pages/Layout';
import HomePage from './pages/Home';
import Profile from './pages/Profile';



const router = createBrowserRouter([{
  path:'/',
  element:<LayoutPage/>,
  errorElement:<Error/>,
  children:[
    {
      path:'/',
      element:<HomePage/>
    },
    {
      path:'/signup',
      element:<Signup/>
    },
    {
      path:'/signin',
      element:<Signin/>
    },
    {
      path:'/profile',
      element:<Profile/>
    },
  ]
}])



const App : FC = () =>{
  return (
    <RouterProvider  router={router}/>
   
    
  )
}

export default App;

