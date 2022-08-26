import React from 'react'
import styled from 'styled-components'
import Button from '../ui/Button'
import Card from '../ui/Card'

const StyledGame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h3 {
    font-size: 32px;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`

const Game = (props) => {
  return (
    <Card
      title={props.game.name}
      footer={
        <Button styleType='primary' onClick={props.onEdit}>
          Editar
        </Button>
      }
    >
      <img width="100%" src={props.game.image} alt={props.game.name} />
      <div>$USD {props.game.price?.toFixed(2)}</div>
    </Card>
  )
}

export default Game
