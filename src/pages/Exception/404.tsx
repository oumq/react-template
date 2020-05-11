import React from 'react'

import { Result, Button } from 'antd'

const Exception_403: React.FC = () => {

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary">Back Home</Button>}
    />
  )
}

export default Exception_403