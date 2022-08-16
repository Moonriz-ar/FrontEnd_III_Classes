import React from 'react'
import { GameI } from '../../Api/games'

interface IProps {
  game: GameI
}

const Game: React.FC<IProps> = (props) => {
  return (
    <li key={props.game.id} id={props.game.id}>
      {props.game.name}
    </li>
  )
}

export default Game
