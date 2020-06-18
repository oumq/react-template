import React from 'react'
import { Layout } from 'antd'
import style from './index.module.scss'


const { Content } = Layout

const MyContent: React.FC = props => {
  console.log('content', props)
  const { children } = props
  return (
    <Content
      className={style.background}
    >
      {children}
    </Content>
  )
}

export default MyContent