import React from 'react'
import { Layout } from 'antd'
import Header from './Header'
import Content from './Content'
import Sider from './Sider'
import Footer from './Footer'

const MyLayout: React.FC = (props) => {
  console.log('layout', props)
  const style: any = {
    minHeight: '100vh',
  }
  const { children } = props
  return (
    <Layout style={style}>
      <Sider>{children}</Sider>
      <Layout>
        <Header></Header>
        <Content>{children}</Content>
        <Footer></Footer>
      </Layout>
    </Layout>
  )
}

export default MyLayout
