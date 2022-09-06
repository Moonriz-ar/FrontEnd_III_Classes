import React from 'react'
import { GameI } from '../../Api/games'
import Game from './Game'
import styles from './List.module.css'

type IProps = {
  elements: GameI[]
}

const List: React.FC<IProps> = (props) => {
  return (
    <ul className={styles.list}>
      {props.elements.map((element) => (
        <Game key={element.id} game={element} />)
      )}
    </ul>
  )
}

export default List
