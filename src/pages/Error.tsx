
import React, { FC } from 'react'
import Layout from '@/components/layout'
import ScrollToTop from '@/components/ScrollToTop'



const ErrorPage : FC = () => {
  return (
    <Layout>
      <div className="container" style={{
        paddingTop:'120px'
      }}>
      <h2 style={{color: '#7A5AF8',fontWeight:'600',fontSize:'3.42rem',textAlign:'center',marginBottom:'5px'}}>404</h2>
        <p style={{color:'#7A5AF8',fontWeight:'600',fontSize:'1.42rem',textAlign:'center',lineHeight: '24px'}}>такой страницы не существует :&#40;</p>
      </div>
      <ScrollToTop />
    </Layout>


  )
}

export default ErrorPage


