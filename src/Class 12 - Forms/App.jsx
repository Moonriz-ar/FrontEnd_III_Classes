import React from 'react'
import GameList from './components/GameList'
import { useApi } from '../Api/games'
import CreateGameForm from './components/CreateGameForm'
import EditGameForm from './components/EditGameForm'
import { Row, Col } from 'antd'

const App = () => {
  const { games, createGame, updateGame } = useApi()
  const [gameEditing, setGameEditing] = React.useState()

  const handleUpdateGame = (game) => {
    updateGame(gameEditing.id, game)
  }

  return (
    <div className='app'>
      <header>
        <img src={`${process.env.PUBLIC_URL}/images/vapor.png`} alt="Vapor" />
        Vapor
      </header>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <CreateGameForm onSubmit={createGame} />
        </Col>
        <Col span={12}>
          {/** Cauando cambia el valor de la key,
           * react desmonta el componente
           * y monta otro con el valor de la nueva key
           * 
           * Lo podemos usar para forzar un reseteo de estados
           * Tecnicamente es mejor practica, pero en la realidad es poco intuitivo, o dificil de rastrear
           * */}
          <EditGameForm key={gameEditing ? gameEditing.id : undefined} game={gameEditing} onSubmit={handleUpdateGame} />
        </Col>
      </Row>
      <div className='page-body'>
        <div className='games-section'>
          <h2>Tu Biblioteca</h2>
          <GameList onEdit={setGameEditing} items={games} />
        </div>
      </div>
    </div>
  )
}

export default App
