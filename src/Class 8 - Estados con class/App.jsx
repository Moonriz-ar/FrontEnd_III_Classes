import React from 'react'
import { getFavGames, getGames } from '../Api/games'
import { getUsers } from '../Api/users'
import GameList from './components/GameList'
import UserList from './components/UserList'

const App = (props) => {
  const favGames = getFavGames()
  const games = getGames()
  const users = getUsers()
  return (
    <>
      <header>
        <img src={`${process.env.PUBLIC_URL}/images/vapor.png`} alt="Vapor" />
        Vapor
      </header>
      <div className='page-body'>
        <div className='games-section'>
          <h2>Juegos Favoritos</h2>
          <GameList items={favGames} />
          <hr />
          <h2>Tu Biblioteca</h2>
          <GameList items={games} />
        </div>
        <div className='users-section'>
          <h3>Amigos</h3>
          <UserList items={users} />
        </div>
      </div>
    </>
  )
}

export default App
