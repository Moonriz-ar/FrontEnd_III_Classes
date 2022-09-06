import React from 'react'

interface IProps {
  children: React.ReactNode
}

const Title: React.FC<IProps> = (props) => {
  return <h1>{props.children}</h1>
}

export default Title
