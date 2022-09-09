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
  console.log(pokemons)
  return (
    <div className={styles.container}>
      <h1>
        Bienvenido a <span className={styles.dh}>Digital</span>&nbsp;
        <span className={styles.pk}>Poke</span>&nbsp;
        <span className={styles.dh}>House</span>
      </h1>
      <div>
        <h4>Elige un pokemon para ver sus datos</h4>
        <div className={styles.list}>
          {pokemons.map((pokemon, index) => (
            // AREA DE TRABAJO
            <a key={index} href={`/${index + 1}`}>
              {pokemon.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
