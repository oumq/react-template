import React from 'react'
import { inject, observer } from 'mobx-react'
import { Redirect } from 'react-router-dom'

import AsyncComponent from '@/components/AsyncComponent'
// import { RouteConfig } from '@/models/index'
import systemConfig from '@/config'

import { UserModel } from '@/store/UserStore'

interface InjectedProps {
  userStore: UserModel
}

/**
 * 全局路由拦截、鉴权
 * @param props
 */
const Authorized: React.FC = (props: any) => {
  const whiteList: Array<string> = systemConfig.whiteList

  // console.log('Authorized', props)

  const { path, name, children, component, authority } = props

  const injected = () => {
    return props as InjectedProps
  }

  const {
    userStore: { token, flatRoutes },
  } = injected()

  // 权限校验
  const checkAuthority = (name: string): boolean => {
    if (flatRoutes.includes(name)) {
      return true
    }
    return false
  }

  const componentWrapper = (children: any, component: any) => {
    return children ? (
      component ? (
        <AsyncComponent componentPath={component}>{children}</AsyncComponent>
      ) : (
        <>{children}</>
      )
    ) : (
      <AsyncComponent componentPath={component}></AsyncComponent>
    )
  }

  // 白名单放行
  if (whiteList.includes(path ? path : '')) {
    if (path.indexOf('login') > -1 && token && token !== '') {
      return <Redirect key={path} to="/" />
    }
    return componentWrapper(children, component)
  }

  // 是否登录校验, 在进行路由权限验证
  if (token && token !== '') {
    if (authority) {
      if (checkAuthority(name)) {
        return componentWrapper(children, component)
      } else {
        return componentWrapper(undefined, '/pages/Exception/403')
      }
    }
    return componentWrapper(children, component)
  } else {
    return <Redirect key={path} to="/login" />
  }
}

export default inject('userStore')(observer(Authorized))
