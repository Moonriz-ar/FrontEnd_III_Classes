import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import Timer from './Timer'

const StyledGame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h3 {
    font-size: 32px;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`

class Game extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      playing: false
    }

    this.toggleJugar = this.toggleJugar.bind(this)
  }

  toggleJugar() {
    console.log(this)
    this.setState({ playing: !this.state.playing })
  }

  render() {
    return (
      <StyledGame>
        <h3 title={this.props.game.name}>
          {this.props.game.name}
        </h3>
        <img src={this.props.game.image} alt={this.props.game.name} />
        <Button playing={this.state.playing} onClick={this.toggleJugar}>
          {this.state.playing ? 'Parar' : 'Jugar'}
        </Button>
        {this.state.playing ? <Timer /> : undefined}
      </StyledGame>
    )
  }
}

export default Game
