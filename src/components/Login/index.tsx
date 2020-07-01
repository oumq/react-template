import React from 'react'
import { inject, observer } from 'mobx-react'
import { useHistory } from 'react-router-dom'

import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

import style from './index.module.scss'

// declare const ValidateStatuses: [
//   'success',
//   'warning',
//   'error',
//   'validating',
//   ''
// ]
// declare type ValidateStatus = typeof ValidateStatuses[number]

interface LoginWrapperProps {
  styleProp: any
  stateProp: string
}

const LoginWrapper: React.FC<LoginWrapperProps> = (props: any) => {
  const history = useHistory()

  const onFinishLogin = (values: any) => {
    userLogin(values)
      .then((res: any) => {
        if (res) {
          history.push('/')
        }
      })
      .catch((err: any) => {
        console.log(err)
      })
  }

  // 用户名校验规则
  const userNameRules = [{ required: true, message: '请输入用户名' }]

  // 密码校验规则
  const pwdRules = [{ required: true, message: '请输入密码' }]

  const injected = () => {
    return props as LoginWrapperProps
  }

  const { styleProp, stateProp } = injected()

  const { userLogin } = props.userStore

  return (
    <div
      className={` ${style.loginContent} ${
        stateProp === 'register' ? styleProp.myAnimation1 : null
      } ${stateProp === 'login' ? styleProp.myAnimation2 : null}`}
    >
      <h2 className={style.loginLabel}>登录</h2>
      <Form className={style.loginForm} size="large" onFinish={onFinishLogin}>
        <Form.Item
          name="userName"
          className={style.formItem}
          hasFeedback
          rules={userNameRules}
        >
          <Input
            prefix={<UserOutlined />}
            className={style.inputWrap}
            placeholder="请输入账号"
          />
        </Form.Item>
        <Form.Item name="password" className={style.formItem} rules={pwdRules}>
          <Input
            type="password"
            className={style.inputWrap}
            prefix={<LockOutlined />}
            placeholder="请输入密码"
          />
        </Form.Item>
        <Form.Item className={style.formItem} style={{ padding: '0 10px' }}>
          <Checkbox>记住密码</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className={style.buttonWrap}>
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default inject('userStore')(observer(LoginWrapper))
