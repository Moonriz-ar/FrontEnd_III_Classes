import React from 'react'
import Game from './Game'
import Grid from '../ui/Grid'
import { useApi } from '../../Api/games'
import GameFilterForm from './GameFilterForm'
import { useSearchParams } from 'react-router-dom'

const GameList = (props) => {
  const { filteredGames, refetch } = useApi()
  let [searchParams] = useSearchParams();

  React.useEffect(() => {
    const genre = searchParams.get('genre')
    if (genre) {
      refetch(genre)
    }
  }, [refetch, searchParams])

  return (
    <>
      <h1>Biblioteca</h1>
      <hr />
      <GameFilterForm />
      <hr />
      <Grid>
        {filteredGames.map((item) => (
          <Game key={item.id} onEdit={() => props.onEdit(item)} game={item} />
        ))}
      </Grid>
    </>
  )
}

export default GameList
