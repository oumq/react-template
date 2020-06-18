import server from '@/api/server'

export interface LoginParamsType {
  userName: string,
  password: string
}

// 用户登录接口
export const login = (params: LoginParamsType) => {
  return server.post('/user/login', params)
}