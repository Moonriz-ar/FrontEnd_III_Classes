import React from 'react'
import { GameI } from '../App'

interface IProps {
  game: GameI
}

const Game: React.FC<IProps> = (props) => {
  return (
    <div>
      <div title={props.game.name}>
        {props.game.name}
      </div>
      <img src={props.game.image} alt={props.game.name} />
    </div>
  )
}

export default Game
