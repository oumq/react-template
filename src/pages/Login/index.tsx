import React, { useState } from 'react'

import { SyncOutlined } from '@ant-design/icons'
import { Debounce } from '@/utils'

import LoginWrapper from '@/components/Login'
import RegisterWrapper from '@/components/Register'

import style from './index.module.scss'
import work2 from '@/assets/svg/work2.svg'

const Login: React.FC = (props) => {

  const [state, setState] = useState('')

  console.log(props)

  const toggle = (): void => {
    if (state === '') {
      setState('register')
    } else if (state === 'register') {
      setState('login')
    } else {
      setState('register')
    }
  }

  return (
    <div className={style.content}>
      <div className={style.loginWrap}>
        <div className={style.imgContent}>
          <img className={style.imgBackground} src={work2} alt="img"></img>
        </div>
        <div className={style.realContent}>
          <SyncOutlined className={style.toggle} onClick={Debounce(() => {toggle()}, 500, true)} />
          <LoginWrapper styleProp={style} stateProp={state}></LoginWrapper>
          <RegisterWrapper styleProp={style} stateProp={state}></RegisterWrapper>
        </div>
      </div>
    </div>
  )
}

export default Login
