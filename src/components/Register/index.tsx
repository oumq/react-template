import React from 'react'

import style from './index.module.scss'

interface IProps {
  styleProp: any;
  stateProp: string
}

const RegisterWrapper: React.FC<IProps> = (props: IProps) => {

  const { styleProp, stateProp } = props

  return (
    <div
      className={`${style.registerContent} ${
        stateProp === 'register' ? styleProp.myAnimation2 : null
      } ${stateProp === 'login' ? styleProp.myAnimation1 : null}`}
    >
      <h3 className={style.registerLabel}>注册</h3>
    </div>
  )
}

export default RegisterWrapper
