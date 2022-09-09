import React, { Component } from 'react'
import axios from 'axios'
import styles from '../styles/Pokemon.module.css'
import { message } from 'antd'

export default function Pokemon() {
  const [pokemon, setPokemon] = React.useState(null)
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    async function getPokemon() {
      setLoading(true)
      try {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/001`) /*AQUI VA EL PARAMETRO de la URL*/
        setPokemon(data)
      } catch (error) {
        message.error(error.message)
      }
      setLoading(false)
    }
    getPokemon()
  }, [])

  if (loading) return <p>Cargando datos</p>
  if (!pokemon) return <p>No hay pokidatos</p>
  return (
    <div className={styles.pokemon}>
      <div className={styles.datos}>
        <div className={styles.fila}>
          <h5>Name:</h5>
          <p>{pokemon.name}</p>
        </div>
        <div className={styles.fila}>
          <h5>Height:</h5>
          <p>{`${pokemon.height} Feet`}</p>
        </div>
        <div className={styles.fila}>
          <h5>Weight:</h5>
          <p>{`${pokemon.weight} Kg`}</p>
        </div>
        <div className={styles.fila}>
          <h5>Abilities:</h5>
          {pokemon.abilities.map((ability) => (
            <p id='array' key={ability.ability.name}>
              {ability.ability.name}
            </p>
          ))}
        </div>
        <div className={styles.fila}>
          <h5>Types:</h5>
          {pokemon.types.map((type) => (
            <p id='array' key={type.type.name}>
              {type.type.name}
            </p>
          ))}
        </div>
      </div>
      <div className={styles.image}>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        {/* BONUS EXTRA: Hacer que el boton te lleve a otra pagina con todos los moves del pokemon */}
        <button>Moves</button>
      </div>
    </div>
  )
}
