import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid white;
  border-radius: 10px;
  background-color: #222;
  > * {
    padding: 10px;
  }
  > .title {
    background-color: #333;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom: 1px solid white;
  }
  > .footer {
    border-top: 1px solid white;
  }
`

const Card = (props) => {
  return (
    <StyledCard className={props.className}>
      {props.title ? <div className='title'>{props.title}</div> : undefined}
      <div className="body">{props.children}</div>
      {props.footer ? <div className='footer'>{props.footer}</div> : undefined}
    </StyledCard>
  )
}

export default Card
