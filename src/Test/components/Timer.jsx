import React from 'react'

class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: 0
    }
    this.tick = this.tick.bind(this)
  }
  tick() {
    this.setState({
      time: this.state.time + 1
    })
  }
  
  componentDidMount() {
    this.interval = setInterval(this.tick, 1000)  
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  render() {
    
    return (
      <div>{this.state.time}</div>
    )
  }
}

export default Timer
