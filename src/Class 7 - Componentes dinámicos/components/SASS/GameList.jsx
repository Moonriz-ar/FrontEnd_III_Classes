import React from 'react'
import Game from './Game'
import styles from './gameList.module.scss'

const GameList = (props) => {
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
