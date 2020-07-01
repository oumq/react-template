import { RouteConfig } from '@/models'

export const Routes: RouteConfig[] = [
  {
    name: 'login',
    title: '登陆',
    path: '/login',
    exact: true,
    hide: true,
    component: '/pages/Login',
  },
  {
    name: '403',
    title: '你没有此页面的访问权限',
    path: '/exception/403',
    exact: true,
    hide: true,
    component: '/pages/Exception/403',
  },
  {
    name: '404',
    title: '此页面未找到',
    path: '/exception/404',
    exact: true,
    hide: true,
    component: '/pages/Exception/404',
  },
  {
    name: '500',
    title: '服务器发生了错误',
    path: '/exception/500',
    exact: true,
    hide: true,
    component: '/pages/Exception/500',
  },
  {
    path: '/',
    name: 'layout',
    component: '/components/Layout',
    hide: true,
    children: [
      {
        path: '/',
        exact: true,
        redirect: '/dashboard',
        hide: true,
      },
      {
        name: 'dashboard',
        path: '/dashboard',
        exact: true,
        icon: 'DashboardOutlined',
        component: '/pages/Dashboard',
        authority: true,
      },
      {
        name: 'components',
        path: '/components',
        icon: 'FolderOutlined',
        children: [
          {
            name: 'icon',
            path: '/components/icon',
            exact: true,
            icon: 'PictureOutlined',
            component: '/pages/Icon',
            authority: true,
          },
          {
            name: 'table',
            title: '表格',
            path: '/components/table',
            exact: true,
            icon: 'TableOutlined',
            component: '/pages/Table',
            authority: true,
          },
        ],
      },
      {
        name: 'notFound',
        title: 'notFound',
        path: '*',
        hide: true,
        component: '/pages/Exception/404',
      }
    ],
  },
]
