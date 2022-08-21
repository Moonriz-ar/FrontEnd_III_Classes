import React from 'react'

class Timer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      seconds: 0,
    }

    this.incrementarSegundos = this.incrementarSegundos.bind(this)
  }

  componentDidMount() {
    this.contador = setInterval(this.incrementarSegundos, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.contador);
  }

  incrementarSegundos() {
    this.setState({
      seconds: this.state.seconds + 1,
    })
  }

  render() {
    return (
      <div>
        Pasaron {this.state.seconds} segundos
      </div>
    )
  }
}

export default Timer
