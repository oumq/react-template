import React from 'react'

import { Result, Button } from 'antd'

const Exception_403: React.FC = () => {

  return (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={<Button type="primary">Back Home</Button>}
    />
  )
}

export default Exception_403
