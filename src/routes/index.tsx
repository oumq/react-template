import React from 'react'
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { staticRoute as routes } from './config'
import AsyncComponent from '@/components/AsyncComponent'
import { RouteConfig } from '@/models/index'

const AppRouter: React.FC = (props) => {
  return (
    <Router>
      <Switch>
        {routes.map((route: RouteConfig) => {
          const { name, path, component, exact, redirect } = route
          if (redirect) {
            return (
              <Redirect
                key={name}
                from={path}
                to={redirect}
                exact={exact}
              ></Redirect>
            )
          }
          return (
            <Route
              key={name}
              path={path}
              exact={exact}
              render={(props: any) => (
                <AsyncComponent componentPath={component}></AsyncComponent>
              )}
            ></Route>
          )
        })}
      </Switch>
    </Router>
  )
}

export default AppRouter
