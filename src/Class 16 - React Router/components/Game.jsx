import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'
import Card from '../ui/Card'
import Tag from '../ui/Tag'

const Game = (props) => {
  return (
    <Card
      title={props.game.name}
      footer={
        <Button styleType='primary'>
          <Link to={`game/${props.game.id}`}>Details</Link>
        </Button>
      }
    >
      <div className='flex flex-col gap-10'>
        <img width='100%' src={props.game.image} alt={props.game.name} />
        <div className='flex gap-10 flex-wrap'>
          {props.game.tags?.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>
    </Card>
  )
}

export default Game
