/* eslint-disable */

import React from 'react'
import { GameI } from '../App'
import { ListWithChildren, ListWithProps } from './List'
import Title from './Title'

interface ITitledListWithProps {
  title: string
  elements: GameI[]
}

export const TitledListWithProps: React.FC<ITitledListWithProps> = (props) => {
  return (
    <div>
      <Title>{props.title}</Title>
      <ListWithProps elements={props.elements} />
    </div>
  )
}



interface ITitledListWithChildren {
  title: string
  children: React.ReactNode
}

export const TitledListWithChildren: React.FC<ITitledListWithChildren> = (props) => {
  return (
    <>
      <Title>{props.title}</Title>
      <ListWithChildren>
        {props.children}
      </ListWithChildren>
    </>
  )
}
