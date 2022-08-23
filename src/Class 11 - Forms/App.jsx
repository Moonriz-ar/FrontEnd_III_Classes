import React from 'react'
import GameList from './components/GameList'
import { useApi } from '../Api/games'
import CreateGameForm from './components/CreateGameForm'

const App = () => {
  const { games, createGame } = useApi()

  return (
    <div className='app'>
      <header>
        <img src={`${process.env.PUBLIC_URL}/images/vapor.png`} alt="Vapor" />
        Vapor
      </header>
      <CreateGameForm onSubmit={createGame} />
      <div className='page-body'>
        <div className='games-section'>
          <h2>Tu Biblioteca</h2>
          <GameList items={games} />
        </div>
      </div>
    </div>
  )
}

export default App
