import React from 'react'
import styled from 'styled-components'
import { threadId } from 'worker_threads'

const FlexSection = styled.div`
  display: flex;
  gap: 20px;
`

class NameFC extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      prevValue: props.children
    }

    this.activate = this.activate.bind(this)
  }

  activate = () => {
    this.setState({
      active: true
    })
  }

  render() {
    return (
      <FlexSection>
        <div>{this.props.prevValue} -&gt; {this.props.children}</div>
        <button onClick={this.state.activate}>Activate</button>
        {this.state.active && <div>ACTIVADO!</div>}
      </FlexSection>
    )
  }
}

export default NameFC;
