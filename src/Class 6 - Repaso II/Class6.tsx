/* eslint-disable */
import React from 'react'
import { getFavGames, getGames } from '../Api/games'
import Game from './components/Game'
import { ListWithChildren, ListWithProps } from './components/List'
// import List from './components/List'
// import Title from './components/Title'
import { TitledListWithChildren, TitledListWithProps } from './components/TitledList'

export interface GameI {
  id: string
  name: string
  image: string
}

interface ProductI {
  id: string
  name: string
  price: number
}

const Class6: React.FunctionComponent = () => {

  const games = [
    { id: "HUjUCxVUS3NK", name: 'TBOI', image: 'http://placekitten.com/200/200?image=1' },
    { id: "R1HU2CAj7zhk", name: "Iconoclasts", image: 'http://placekitten.com/200/200?image=2' },
    { id: "yz6gT9orPdr2", name: 'Celeste', image: 'http://placekitten.com/200/200?image=3' },
    { id: "M3LJ0HmXpb9H", name: 'Cave Story', image: 'http://placekitten.com/200/200?image=4' },
  ]

  const products = [
    { id: "HUAjUCxVUS3NK", name: 'Shampoo', price: 100 },
    { id: "R1HU2CAAj7zhk", name: "Esponja", price: 200 },
    { id: "yz6AgT9orPdr2", name: 'Jabon', price: 300 },
    { id: "AM3LJ0HmXpb9H", name: 'Toalla', price: 400 },
  ]

  return (
    <>
      <ListWithProps elements={games} />
      <hr />
      <ListWithChildren>
        <Game game={games[0]} />
        <Game game={games[1]} />
        <Game game={games[2]} />
        <Game game={games[3]} />
      </ListWithChildren>
      <hr />
      {/** esto no funciona porque la lista solo sabe renderizar elementos  */}
      {/* <ListWithProps elements={products} /> */}
      <hr />
      <ListWithChildren>
        <Game game={games[0]} />
        <div>
          <div>{products[0].name}</div>
          <div>{products[0].price}</div>
        </div>
        <Game game={games[1]} />
        <div>
          <div>{products[1].name}</div>
          <div>{products[1].price}</div>
        </div>
        <Game game={games[2]} />
        <div>
          <div>{products[2].name}</div>
          <div>{products[2].price}</div>
        </div>
      </ListWithChildren>
    </>
  )
}

export default Class6
