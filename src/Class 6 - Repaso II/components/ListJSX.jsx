/* eslint-disable */
import React from 'react'
import { GameI } from '../App'
import Game from './Game'
import './List.css'





export const ListWithProps = (props) => {
  return (
    <ul>
      {props.elements.map((element) => (
        <Game key={element.id} game={element} />)
      )}
    </ul>
  )
}







export const ListWithChildren = (props) => {
  return (
    <ul>
      {props.children}
    </ul>
  )
}
