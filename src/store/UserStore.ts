import { observable, action, configure, computed, runInAction } from 'mobx'
import { login } from '@/api/modules/user'

export interface UserModel {
  // 用户token 登录凭证
  token: string
  // 权限路由、后端返回路由信息
  authRoutes: any[]
  // 路由扁平化
  flatRoutes: any[]
  userLogin(loginInfo: any): Promise<any>
}

configure({ enforceActions: 'observed' })
class UserStore implements UserModel {
  @observable token: string = ''

  @observable authRoutes: any[] = [
    {
      id: '1',
      name: 'dashboard',
    },
    {
      id: '2',
      name: 'components',
      children: [
        {
          id: '3',
          name: 'icon',
        },
      ],
    },
  ]

  @computed get flatRoutes() {
    const arr: string[] = []
    this.authRoutes.forEach((i: any) => {
      if (i.children) {
        i.children.forEach((j: any) => {
          arr.push(j.name)
        })
      } else {
        arr.push(i.name)
      }
    })
    return arr
  }

  @action userLogin = (loginInfo: any): Promise<any> => {
    // console.log(loginInfo)
    return new Promise<boolean>((resolve, reject) => {
      login({
        userName: loginInfo.userName,
        password: loginInfo.password,
      })
        .then((res) => {
          console.log(res)
          const { code, data } = res.data
          runInAction(() => {
            if (code === 200) {
              this.token = data.access_token
              this.authRoutes = data.authRoutes
              console.log(this.token, this.authRoutes)
              resolve(true)
            } else {
              resolve(false)
            }
          })
        })
        .catch((err) => {
          console.log(err)
          reject(false)
        })
    })
  }
}

export default UserStore
