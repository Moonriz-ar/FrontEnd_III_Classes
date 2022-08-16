import React from 'react'
import { getFavGames, getGames } from '../Api/games'
import { getUsers } from '../Api/users'
import GameList from './components/GameList'
import UserList from './components/UserList'
import './app.css'

interface IProps {
  elementos: Array<string>
  children: React.ReactNode
}

interface IState {
  bool: boolean
}

const Test: React.FunctionComponent = (props) => {
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

export class TrueClass5 extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    // declare state with a bool
    this.state = {
      bool: false,
    }
  }

  render() {
    console.log(this.state)
    return (
      <div onClick={() => this.setState({ bool: true })}>
        clase 5
      </div>
    )
  }
}

export default Test
