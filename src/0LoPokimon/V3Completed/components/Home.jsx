import React, { Component } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { message } from 'antd'

const urlPokemons = 'https://pokeapi.co/api/v2/pokemon?limit=150'

export default function Home() {
  const [pokemons, setPokemons] = React.useState([])
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    async function getPokemons() {
      setLoading(true)
      try {
        const { data } = await axios.get(urlPokemons)
        setPokemons(data.results)
      } catch (error) {
        message.error(error.message)
        setLoading(false)
      }
    }
    getPokemons()
  }, [])

  if (!loading) return <p>Cargando datos</p>
  return (
    <div className={styles.container}>
      <h1>
        Bienvenido a <span className={styles.dh}>Digital</span>&nbsp;
        <span className={styles.pk}>Poke</span>&nbsp;
        <span className={styles.dh}>House</span>
      </h1>
      <div className='w-full'>
        <h4>Elige un pokemon para ver sus datos</h4>
        <div className={styles.list}>
          {pokemons.map((pokemon, index) => (
            /**
             * estamos en pokemon/V3/home 
             * queremos ir a pokemon/V3/pokemon/:id
             * tenemos que hacer algo comp
             * cd ../pokemon/:pokemonId
             * lo mismo podemos hacer en reacrt router
             */
            <Link key={index} to={`../pokemon/${index + 1}`}>
              {pokemon.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
