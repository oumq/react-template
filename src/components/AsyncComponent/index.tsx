import React from 'react'

interface IProps {
  componentPath: any
}

interface IState {
  component: any
}

class AsyncComponent extends React.Component<IProps, IState> {
  state = {
    component: null
  }

  async componentDidMount() {
    const { componentPath } = this.props
    const { default: component } = await import(`../../../src${componentPath}`)
    this.setState({
      component: component
    })
  }

  render() {
    const C: any = this.state.component
    return C ? <C {...this.props} /> : null
  }
}

export default AsyncComponent
