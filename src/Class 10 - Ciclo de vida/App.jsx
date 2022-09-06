import React from 'react'
import ColorFC from './ColorFC'
import ColorClass from './ColorClass'
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
  const [items, setItems] = React.useState(colors)
  const [show, setShow] = React.useState(false)

  const shuffle = () => {
    setItems(items.slice().sort(() => 0.5 - Math.random()));
  };

  const handleShow = () => {
    setShow(!show)
  }

  return (
    <div>
      {/* {items.map((item, index) => {
        return <ColorFC key={index}>{`${item} ${index}`}</ColorFC>
      })} */}
      {show ? <ColorFC>{items[0]}</ColorFC> : undefined}

      <button onClick={handleShow}>{show ? 'hide' : 'Show'}</button>
      <button onClick={shuffle}>Shuffle</button>
    </div>
  )
}

export default App
