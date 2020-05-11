import React from 'react'

import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { login } from '@/api/modules/user'

import style from './index.module.scss'

// declare const ValidateStatuses: [
//   'success',
//   'warning',
//   'error',
//   'validating',
//   ''
// ]
// declare type ValidateStatus = typeof ValidateStatuses[number]

interface IProps {
  styleProp: any
  stateProp: string
}

const LoginWrapper: React.FC<IProps> = (props) => {
  const onFinishLogin = (values: any) => {
    login(values).then((res: any) => {
      console.log(res)
    })
  }

  const { styleProp, stateProp } = props

  return (
    <div
      className={` ${style.loginContent} ${
        stateProp === 'register' ? styleProp.myAnimation1 : null
      } ${stateProp === 'login' ? styleProp.myAnimation2 : null}`}
    >
      <h2 className={style.loginLabel}>登录</h2>
      <Form className={style.loginForm} size="large" onFinish={onFinishLogin}>
        <Form.Item name="userName" className={style.formItem} hasFeedback>
          <Input
            prefix={<UserOutlined />}
            className={style.inputWrap}
            placeholder="请输入账号"
          />
        </Form.Item>
        <Form.Item name="password" className={style.formItem}>
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

export default LoginWrapper
