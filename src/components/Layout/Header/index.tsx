import React from 'react'

import { inject, observer } from 'mobx-react'
import { Layout } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'

import style from './index.module.scss'
import { LayoutModel } from '@/store/LayoutStore'

interface InjectedProps {
  layoutStore: LayoutModel
}

const MyHeader: React.FC = (props) => {
  const { Header } = Layout

  const injected = () => {
    return props as InjectedProps
  }

  const {
    layoutStore: { collapsed, toggle }
  } = injected()

  const iconCollapsed = collapsed ? (
    <MenuUnfoldOutlined
      className={style.trigger}
      onClick={() => {toggle()}}
    ></MenuUnfoldOutlined>
  ) : (
    <MenuFoldOutlined
      className={style.trigger}
      onClick={() => {toggle()}}
    ></MenuFoldOutlined>
  )

  return <Header className={style.background}>{iconCollapsed}</Header>
}

export default inject('layoutStore')(observer(MyHeader))
