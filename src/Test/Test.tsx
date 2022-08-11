import React from 'react'
import { getFavGames, getGames } from '../Api/api'
import TitledList from './components/TitledList'
import './test.css'

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
  return (
    <>
      <header>
        <img src={`${process.env.PUBLIC_URL}/images/vapor.png`} alt="Vapor" />
        Vapor
      </header>
      <div className='page-body'>
        <TitledList title="Juegos Favoritos" items={favGames} />
        <hr />
        <TitledList title="Tu Biblioteca" items={games} />
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
