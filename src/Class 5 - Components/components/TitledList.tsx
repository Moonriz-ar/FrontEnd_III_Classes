import React from 'react'
import { GameI } from '../../Api/api'
import List from './List'
import Title from './Title'

interface IProps {
  title: string
  children: React.ReactNode
  elements: GameI[]
}

const TitledList: React.FC<IProps> = (props) => {
  return (
    <>
      <Title name="titulo"><span>{props.title}</span></Title>
      <List elements={props.elements} />
    </>
  )
}

export default TitledList
