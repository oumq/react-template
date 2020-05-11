import React from 'react'
import { Layout } from 'antd'
import Header from './Header'
import Content from './Content'
import Sider from './Sider'
import Footer from './Footer'

const MyLayout: React.FC = (props) => {
  const style: any = {
    minHeight: '100vh'
  }
  return (
    <Layout style={style}>
      <Sider></Sider>
      <Layout>
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </Layout>
    </Layout>
  )
}

export default MyLayout
