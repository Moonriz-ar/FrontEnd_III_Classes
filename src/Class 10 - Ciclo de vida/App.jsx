import React from 'react'
import './app.css'
import NameFC from './NameFC'
import GameFc from './GameFC'

const games = [{
  id: 'XO91iBdOY4Xm',
  name: 'Enter the gungeon',
  price: '$4.94',
}, {
  id: 'Ob8qEg1MPx4X',
  name: 'Bug fables',
  price: '$19.99',
}, {
  id: '2XCK5CcSR11R',
  name: 'Undertale',
  price: '$9.99',
}, {
  id: 'gkuulzAgmoe2',
  name: 'Hollow Knight',
  price: '$14.99',
}]

const colors = ["RED", "BLUE", "YELLOW", "GREEN", "ORANGE", "MAGENTA", "BROWN", "LIME"]

const App = () => {
  const [items, setItems] = React.useState(games)
  const [itemComprado, setItemComprado] = React.useState(null)

  const shuffle = () => {
    setItems(items.slice().sort(() => 0.5 - Math.random()));
  };

  const onComprar = (game) => {
    setItemComprado(game)
  }

  return (
    <div className='container'>
      {/* {items.map((item, index) => {
        return <NameFC key={index}>{`${item} ${index}`}</NameFC>
      })} */}
      {items.map((item, index) => {
        //console.log(item.name)
        return <GameFc key={item.id + index} game={item} onComprar={() => onComprar(item)} />
      })}
      <button onClick={shuffle}>Shuffle</button>

      {itemComprado && <div>{itemComprado.name}</div>}
    </div>
  )
}

export default App
