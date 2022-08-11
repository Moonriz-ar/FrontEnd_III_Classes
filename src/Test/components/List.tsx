import React from 'react'
import { GameI } from '../../Api/api'
import Game from './Game'

interface IProps {
  items: Array<GameI>
}

const List: React.FC<IProps> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>
          <Game game={item} />
        </li>
      ))}
    </ul>
  )
}

export default List
