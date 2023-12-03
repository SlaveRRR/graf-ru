import { FC } from 'react'



import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Error from './pages/Error';
import LayoutPage from './pages/Layout';
import HomePage from './pages/Home';
import Profile from './pages/Profile';
import CatalogPage from './pages/Catalog';
import BlogPage from './pages/Blog';
import ProfileAuthor from './pages/Author';




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
    {
      path:'/author',
      element:<ProfileAuthor/>
    },
    {
      path:'/catalog',
      element:<CatalogPage/>
    },
    {
      path:'/blog',
      element:<BlogPage/>
    },
  ]
}])



const App : FC = () =>{
  return (
    <>
    <RouterProvider   router={router}/>
    </>
    

    
  )
}

export default App;

