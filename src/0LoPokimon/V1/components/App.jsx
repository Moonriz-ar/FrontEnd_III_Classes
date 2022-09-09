import React, { Component } from 'react'
import "../styles/App.css"
import Pokedex from './Pokedex';
import allPokemons from '../pokedex.json'
import Easteregg from './Easteregg'


const App = () => {
  const [selectedPokemon, setSelectedPokemon] = React.useState(allPokemons[0])

  const update = (pokemon) => {
    setSelectedPokemon(pokemon)
  }

  //completa con 0 los ids para acceder a la img url
  const getPokemonURLid = () => {
    return selectedPokemon.id?.toString().padStart(3, "0")
  }

  //stringifica los tipos del pokimon
  const getTypes = () => {
    return selectedPokemon.type.join(" and ")
  }

  return (
    <>
      <div style={{display:"flex"}}>
        <div className="container">
          <img
            id="pokemonImg"
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${getPokemonURLid()}.png`}
            alt={selectedPokemon.name}
          />
          <p id="name">{`${selectedPokemon.name} is a pokemon type ${getTypes()}`}</p>
        </div>
        <Pokedex updateParent={update} pokemons={allPokemons} />
      </div>
      <Easteregg />
    </>
  )
}

export default App
