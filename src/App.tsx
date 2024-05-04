import { FC } from 'react'



import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import ErrorPage from './pages/Error';
import LayoutPage from './pages/Layout';
import HomePage from './pages/Home';
import Profile from './pages/Profile';
import CatalogPage from './pages/Catalog';
import BlogPage from './pages/Blog';
import ProfileAuthor from './pages/Author';
import ComicsPage from './pages/ComicsPage';
import AuthorSupportPage from './pages/AuthorSupport';
import AuthorSupportFishPage from './pages/AuthorSupportFish';




const router = createBrowserRouter([{
  path:'/',
  element:<LayoutPage/>,
  errorElement:<ErrorPage/>,
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
    {
      path:'/preview',
      element:<ComicsPage/>
    },
    {
      path:'/authorsupport',
      element:<AuthorSupportPage/>
    },
    {
      path:'/authorsupportfish',
      element:<AuthorSupportFishPage/>
    },
  ]
}])



const App : FC = () =>{
  return <RouterProvider router={router} />
  
}

export default App;

