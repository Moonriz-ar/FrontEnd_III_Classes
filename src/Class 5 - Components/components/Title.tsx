import React from 'react'
import './Title.css'

interface IProps {
  children: React.ReactNode
  name: string
}

const Title: React.FC<IProps> = (props) => {
  return <h1>{props.children}</h1>
}

export default Title
