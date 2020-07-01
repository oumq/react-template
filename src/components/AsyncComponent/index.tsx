import React from 'react'

import { RouteConfig } from '@/models/index'

interface IProps {
  route: RouteConfig
}

interface IState {
  _component: any
}

class AsyncComponent extends React.Component<IProps, IState> {
  state = {
    _component: null
  }

  async componentDidMount() {
    const { component } = this.props.route
    const { default: __component } = await import(`../../../src${component}`)
    this.setState({
      _component: __component
    })
  }

  render() {
    const C: any = this.state._component
    return C ? <C {...this.props} /> : null
  }
}

export default AsyncComponent
