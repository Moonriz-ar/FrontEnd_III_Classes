import React from 'react'
import { GameI } from '../../Api/games'
import Game from './Game'
import styles from './gameList.module.css'

interface IProps {
  items: Array<GameI>
}

const GameList: React.FC<IProps> = (props) => {
  return (
    <ul className={styles.list}>
      {props.items.map((item) => (
        <li key={item.id}>
          <Game game={item} />
        </li>
      ))}
    </ul>
  )
}

export default GameList
