import React from 'react'
import { getFavGames, getGames } from '../Api/api'
import Game from './components/Game'
// import List from './components/List'
// import Title from './components/Title'
import TitledList from './components/TitledList'

const Class5: React.FunctionComponent = () => {
  const favGames = getFavGames()
  const games = getGames()
  return (
    <>
      <TitledList title="Juegos Favoritos" elements={favGames}>
        {favGames.map((element) => (
          <Game key={element.id} game={element} />
        ))}
      </TitledList>
      <hr />
      <TitledList title="Tu Biblioteca" elements={games}>
        {games.map((element) => (
          <Game key={element.id} game={element} />
        ))}
      </TitledList>
    </>
  )
}

export default Class5
