import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import AsyncComponent from '@/components/AsyncComponent'
import { RouteConfig } from '@/models/index'

const renderRoutes = (
  routes: RouteConfig[] | undefined,
  extraProps = {},
  switchProps = {}
) =>
  routes ? (
    <Switch {...switchProps}>
      {routes.map((route: RouteConfig, i) => {
        const { path, exact, redirect, children, component } = route
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
            key={route.path || i}
            path={route.path}
            exact={route.exact}
            render={(props) => {
              console.log(props)
              const childRoute = renderRoutes(children, extraProps, {
                location: props.location
              })
              if (component) {
                return (
                  <AsyncComponent {...props} {...extraProps} route={route}>
                    {childRoute}
                  </AsyncComponent>
                )
              }
              return childRoute
            }}
          />
        )
      })}
    </Switch>
  ) : null

export default renderRoutes
