import React from 'react'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Routes as routes } from './config'
import Authorized from '@/components/Authorized'
import { RouteConfig } from '@/models/index'

const AppRouter: React.FC = (props) => {
  // 路由遍历递归渲染
  const renderRoute = (routes: RouteConfig[]) => {
    return routes ? (
      <Switch>
        {routes.map((route: RouteConfig) => {
          const { path, exact, redirect, children } = route
          if (redirect) {
            return (
              <Redirect
                key={path}
                from={path}
                to={redirect}
                exact={exact || false}
              ></Redirect>
            )
          }
          return (
            <Route
              key={path}
              path={path}
              exact={exact || false}
              render={(props: any) => {
                // 嵌套路由
                if (children) {
                  return (
                    <Authorized {...route} {...props}>{renderRoute(children)}</Authorized>
                  )
                }
                return <Authorized {...route} {...props}></Authorized>
              }}
            ></Route>
          )
        })}
      </Switch>
    ) : null
  }

  console.log('route', renderRoute(routes))

  return (
    <Router>
      {renderRoute(routes)}
    </Router>
  )
}

export default AppRouter
