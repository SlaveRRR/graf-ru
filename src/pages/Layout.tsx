
import React,{FC} from 'react'
import { useNavigation } from 'react-router-dom'

import {Outlet} from 'react-router-dom';
import Layout from '../components/layout';
import { RouterLoader } from '../components/UI';
import ScrollToTop from '@/components/ScrollToTop';


const LayoutPage : FC = () => {
  const { state } = useNavigation();
  
  return (
      <Layout>
        {state === 'loading' && <RouterLoader/>}
        <Outlet/>
        <ScrollToTop/>
      </Layout>
    
    
  )
}
export default LayoutPage