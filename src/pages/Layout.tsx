
import React,{FC} from 'react'
import {Outlet} from 'react-router-dom';
import Layout from '../components/layout';


const LayoutPage : FC = () => {
  return (
    <Layout>
        <Outlet/>
    </Layout>
  )
}

export default LayoutPage