import React from 'react'
import Pedido from './Pedido'

// Esta es la version solicitada en la practica (un unico pedido)
const App = () => {
  const [isPedido, setIsPedido] = React.useState(false)

  const handleMakePedido = () => {
    setIsPedido(true)
  }

  const handleCancelPedido = () => {
    setIsPedido(false)
  }

  return (
    <div className='container'>
      <h1>Peditres ya</h1>
      <hr></hr>
      {isPedido ? <Pedido onCancel={handleCancelPedido} /> : <button onClick={handleMakePedido}>Pedir</button>}
    </div>
  )
}

export default App
