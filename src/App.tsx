import { FC } from 'react'



import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Error from './pages/Error';
import LayoutPage from './pages/Layout';

const router = createBrowserRouter([{
  path:'/',
  element:<LayoutPage/>,
  errorElement:<Error/>,
  children:[
    {
      path:'/',
      element:<Signup/>
    },
    {
      path:'/signin',
      element:<Signin/>
    },
  ]
}])



const App : FC = () =>{
  return (
    <RouterProvider router={router}/>
   
    
  )
}

export default App;

