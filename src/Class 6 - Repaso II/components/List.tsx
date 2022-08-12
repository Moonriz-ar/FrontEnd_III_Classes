/* eslint-disable */
import React from 'react'
import { GameI } from '../Class6'
import Game from './Game'
import './List.css'

interface IListWithProps {
  elements: GameI[]
}

export const ListWithProps: React.FC<IListWithProps> = (props) => {
  return (
    <ul>
      {props.elements.map((element) => (
        <Game key={element.id} game={element} />)
      )}
    </ul>
  )
}



interface IListWithChildren {
  children: React.ReactNode
}

export const ListWithChildren: React.FC<IListWithChildren> = (props) => {
  return (
    <ul>
      {props.children}
    </ul>
  )
}
