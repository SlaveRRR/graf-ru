import { FC } from 'react'


import Layout from './components/layout';
import Registration from './components/Registration';

// const routes = [
//   {
//     path:'/',
//     element:<Registration/>
//   }
// ]


const App : FC = () =>{
  return (
    <Layout>
      <Registration/>
    </Layout>
    
  )
}

export default App;

