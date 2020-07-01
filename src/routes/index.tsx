import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { Routes as routes } from './config'
// import Authorized from '@/components/Authorized'
// import AsyncComponent from '@/components/AsyncComponent'
// import { RouteConfig } from '@/models/index'
import RenderRoutes from '@/components/RenderRoutes'

const AppRouter: React.FC = (props) => {
  // 路由遍历递归渲染
  // const renderRoute = (routes: RouteConfig[]) => {
  //   return routes ? (
  //     <Switch>
  //       {routes.map((route: RouteConfig) => {
  //         const { path, exact, redirect } = route
  //         if (redirect) {
  //           return (
  //             <Redirect
  //               key={path}
  //               from={path}
  //               to={redirect}
  //               exact={exact || false}
  //             ></Redirect>
  //           )
  //         }
  //         return (
  //           <Route
  //             key={path}
  //             path={path}
  //             exact={exact || false}
  //             render={(props: any) => {
  //               // 嵌套路由
  //               // if (children) {
  //               //   return (
  //               //     <AsyncComponent {...route} {...props}>{renderRoute(children)}</AsyncComponent>
  //               //   )
  //               // }
  //               return <AsyncComponent route={route} ></AsyncComponent>
  //             }}
  //           ></Route>
  //         )
  //       })}
  //     </Switch>
  //   ) : null
  // }

  console.log('route', RenderRoutes(routes))

  return (
    <Router>
      {RenderRoutes(routes)}
    </Router>
  )
}

export default AppRouter
