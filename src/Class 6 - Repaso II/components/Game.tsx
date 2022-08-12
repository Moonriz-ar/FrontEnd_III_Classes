import React from 'react'
import { GameI } from '../Class6'
import './Game.css'

interface IProps {
  game: GameI
}

const Game: React.FC<IProps> = (props) => {
  return (
    <div className='game'>
      <div className='title' title={props.game.name}>
        {props.game.name}
      </div>
      <img src={props.game.image} alt={props.game.name} />
    </div>
  )
}

export default Game
