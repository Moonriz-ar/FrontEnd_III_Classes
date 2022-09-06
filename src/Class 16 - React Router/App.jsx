import React from 'react'
import { Routes, Route } from 'react-router-dom'
import GameList from './components/GameList'
import GameDetail from './components/GameDetail'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<GameList />} />
      <Route path='/game/:gameId' element={<GameDetail />} />
    </Routes>
  )
}

export default App
