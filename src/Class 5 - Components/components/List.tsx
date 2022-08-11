import React from 'react'
import { GameI } from '../../Api/api'
import Game from './Game'
import './List.css'

type IProps = {
  elements: GameI[]
}

const List: React.FC<IProps> = (props) => {
  return (
    <ul>
      {props.elements.map((element) => (<Game key={element.id} game={element} />))}
    </ul>
  )
}

export default List
