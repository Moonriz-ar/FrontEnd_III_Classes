import React from 'react'
import { getFavGames, getGames } from '../Api/games'
import { getUsers } from '../Api/users'

// import GameList from './components/simple css/GameList'
// import UserList from './components/simple css/UserList'

// import GameList from './components/CSS modules/GameList'
// import UserList from './components/CSS modules/UserList'

// import GameList from './components/SASS/GameList'
// import UserList from './components/SASS/UserList'

import GameList from './components/CSSinJS/GameList'
import UserList from './components/CSSinJS/UserList'

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
