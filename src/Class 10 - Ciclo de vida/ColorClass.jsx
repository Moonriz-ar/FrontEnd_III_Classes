import React from 'react'
import styled from 'styled-components'

const FlexSection = styled.div`
  display: flex;
  gap: 20px;
`

class ColorFC extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: false,
      prevColor: '',
    }

    this.setSelected = this.setSelected.bind(this)
  }

  componentDidMount() {
    console.log('mount', this.props)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.children !== this.props.children) {
      this.setState({
        prevColor: prevProps.children
      })
    }
    console.log('update', { props: this.props, state: this.state, prevProps, prevState })
  }

  componentWillUnmount() {
    console.log('unmount', this.props)
  }

  setSelected() {
    this.setState({
      selected: true
    })
  }

  render() {
    console.log('render', this.props)
    return (
      <FlexSection>
        <div>{this.state.prevColor} -&gt; {this.props.children}</div>
        <button onClick={this.setSelected}>Seleccionar</button>
        {this.state.selected ? <div>SELECCIONADO!</div> : undefined}
      </FlexSection>
    )
  }
}

export default ColorFC;
