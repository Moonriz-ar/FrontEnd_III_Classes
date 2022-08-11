import React from 'react'
import { GameI } from '../../Api/api'
import List from './List'

interface IProps {
  title: string
  items: Array<GameI>
}

const TitledList: React.FC<IProps> = (props) => {
  return (
    <>
      <h2>{props.title}</h2>
      <List items={props.items} />
    </>
  )
}

export default TitledList
