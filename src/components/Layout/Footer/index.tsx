import React from 'react'
import { Layout } from 'antd'
import style from './index.module.scss'

const { Footer } = Layout

const MyFooter: React.FC = props => {
  return <Footer className={style.content}>Ant Design ©2020 Created by Ant UED</Footer>
}

export default MyFooter
