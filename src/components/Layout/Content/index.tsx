import React from 'react'
import { Layout } from 'antd'
import style from './index.module.scss'


const { Content } = Layout

const MyContent: React.FC = props => {
  return (
    <Content
      className={style.background}
    ></Content>
  )
}

export default MyContent