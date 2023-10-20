import { FC } from 'react'
import Header from './components/layout/header';
import Registration from './components/Registration';

// const routes = [
//   {
//     path:'/',
//     element:<Registration/>
//   }
// ]


const App : FC = () =>{
  return (
    <>
    <Header/>
    <Registration/>
    </>
    
  )
}

export default App;

