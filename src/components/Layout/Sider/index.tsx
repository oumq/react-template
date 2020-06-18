import React from 'react'
import { inject, observer } from 'mobx-react'
import { Layout, Menu } from 'antd'
import style from './index.module.scss'
import { LayoutModel } from '@/store/LayoutStore'

interface InjectedProps {
  layoutStore: LayoutModel
}

const MySider: React.FC = (props) => {
  const { SubMenu } = Menu
  const { Sider } = Layout

  const injected = () => {
    return props as InjectedProps
  }

  const {
    layoutStore: { collapsed },
  } = injected()

  const { children } = props

  console.log('sider', children)

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className={style.logo}></div>
      <Menu theme="dark" mode="inline">
        <SubMenu title="aaa">
          <Menu.Item>aaa-1</Menu.Item>
          <Menu.Item>aaa-2</Menu.Item>
          <Menu.Item>aaa-3</Menu.Item>
        </SubMenu>
        <SubMenu title="bbb">
          <Menu.Item>bbb-1</Menu.Item>
          <Menu.Item>bbb-2</Menu.Item>
          <Menu.Item>bbb-3</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  )
}

export default inject('layoutStore')(observer(MySider))
