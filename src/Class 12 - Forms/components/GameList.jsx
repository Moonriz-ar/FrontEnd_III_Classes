import React from 'react'
import Game from './Game'
import Grid from '../ui/Grid'
const GameList = (props) => {
  return (
    <Grid>
      {props.items.map((item) => (
        <Game key={item.id} onEdit={() => props.onEdit(item)} game={item} />
      ))}
    </Grid>
  )
}

export default GameList
