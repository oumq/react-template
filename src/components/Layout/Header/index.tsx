import React from 'react'
import { inject, observer } from 'mobx-react'
import { Layout } from 'antd'
import style from './index.module.scss'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { LayoutModel } from '@/store/LayoutStore'

interface InjectedProps {
  layoutStore: LayoutModel
}

const MyHeader: React.FC = (props) => {
  const { Header } = Layout

  const injected = () => {
    return props as InjectedProps
  }

  console.log(injected())

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
