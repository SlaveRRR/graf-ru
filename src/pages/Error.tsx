
import React, { FC } from 'react'
import Layout from '@/components/layout'
import ScrollToTop from '@/components/ScrollToTop'


const Error: FC = () => {
  return (
    <Layout>
      <div className="container">
        <h2 style={{paddingTop:'2em',fontWeight:'bold',fontSize:'1.5rem',textAlign:'center'}}>Страница не найден</h2>
      </div>

      <ScrollToTop />
    </Layout>


  )
}

export default Error