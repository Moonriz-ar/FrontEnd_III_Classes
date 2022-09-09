import React, { Component } from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Pokemon from './components/Pokemon'
import About from './components/About'

export default function App() {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route index element={<div>Holi</div>} />
        <Route path='/home' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path="pokemon/:pokemonId" element={<Pokemon />} />
      </Route>
      {/* <Pokemon /> Esta ruta no va funcionar ya que recibe un parametro como props */}
    </Routes>

    /* AREA DE TRABAJO
    En este punto deberan utilizar react router dom
    Arriba tenemos los componentes a utilizar, los mismos deben estar envueltos
    en los componentes de react router dom. Si no se acuerdan como era la estructura,
    miren el material previo o la documentacion de react router dom
    */
  )
}


