/* eslint-disable */
import React from 'react'
import { GameI } from '../App'
import Game from './Game'
import styles from './List.module.css'

interface IListWithProps {
  elements: GameI[]
}

export const ListWithProps: React.FC<IListWithProps> = (props) => {
  return (
    <ul className={styles.list}>
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
    <ul className={styles.list}>
      {props.children}
    </ul>
  )
}
