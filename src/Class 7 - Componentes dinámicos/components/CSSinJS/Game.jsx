import React from 'react'
import styled from 'styled-components'

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

const Game = (props) => {
  const [playing, setPlaying] = React.useState(false)
  return (
    <StyledGame>
      <h3 title={props.game.name}>
        {props.game.name}
      </h3>
      <img src={props.game.image} alt={props.game.name} />
      <button onClick={() => setPlaying(!playing)}>{playing ? 'Parar' : 'Jugar'}</button>
    </StyledGame>
  )
}

export default Game
