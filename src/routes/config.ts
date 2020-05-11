import { RouteConfig } from '@/models'

export const staticRoute: RouteConfig[] = [
  {
    name: 'layout',
    title: 'layout',
    path: '/',
    exact: true,
    component: '/components/Layout',
    children: [
      {
        path: '/',
        exact: true,
        redirect: '/dashboard',
        hide: true
      },
      {
        name: 'dashboard',
        title: 'dashboard',
        path: '/dashboard',
        exact: true,
        icon: 'DashboardOutlined',
        component: '/pages/Dashboard'
      },
      {
        name: 'components',
        title: '组件',
        path: '/components',
        icon: 'FolderOutlined',
        children: [
          {
            name: 'icon',
            title: '图标',
            path: '/components/icon',
            exact: true,
            icon: 'PictureOutlined',
            component: '/pages/Icon'
          },
          {
            name: 'table',
            title: '表格',
            path: '/components/table',
            exact: true,
            icon: 'TableOutlined',
            component: '/pages/Table'
          }
        ]
      }
    ]
  },
  {
    name: 'login',
    title: '登陆',
    path: '/login',
    exact: true,
    component: '/pages/Login'
  },
  {
    name: '403',
    title: '你没有此页面的访问权限',
    path: '/exception/403',
    exact: true,
    component: '/pages/Exception/403'
  },
  {
    name: '404',
    title: '此页面未找到',
    path: '/exception/404',
    exact: true,
    component: '/pages/Exception/404'
  },
  {
    name: '500',
    title: '服务器发生了错误',
    path: '/exception/500',
    exact: true,
    component: '/pages/Exception/500'
  },
  {
    name: 'notFound',
    title: 'notFound',
    path: '*',
    component: '/pages/Exception/404'
  }
]

export const dynamicRoute: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    redirect: '/dashboard'
  },
  {
    name: 'dashboard',
    title: 'dashboard',
    path: '/dashboard',
    icon: 'DashboardOutlined',
    component: '/pages/Dashboard'
  },
  {
    name: 'components',
    title: '组件',
    path: '/components',
    icon: 'FolderOutlined',
    children: [
      {
        name: 'icon',
        title: '图标',
        path: '/components/icon',
        icon: 'PictureOutlined',
        component: '/pages/Icon'
      },
      {
        name: 'table',
        title: '表格',
        path: '/components/table',
        icon: 'TableOutlined',
        component: '/pages/Table'
      }
    ]
  }
]
