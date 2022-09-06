import React from 'react'
import Game from './Game'
import './gameList.css'

const GameList = (props) => {
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

export default GameList
