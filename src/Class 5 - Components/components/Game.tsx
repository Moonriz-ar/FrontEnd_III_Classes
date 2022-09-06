import React from 'react'
import { GameI } from '../../Api/games'
import styles from './List.module.css'

interface IProps {
  game: GameI
}

const Game: React.FC<IProps> = (props) => {
  return (
    <li className={styles['list-item']} key={props.game.id} id={props.game.id}>
      {props.game.name}
    </li>
  )
}

export default Game
