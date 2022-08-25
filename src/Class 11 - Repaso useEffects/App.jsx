import React from 'react'
import Pedido from './Pedido'
import { getUniqueId } from './utils'

const menu = ['pizzas', 'hamburguesas', 'ensaladas', 'empanadas']

const App = () => {
  const [pedidos, setPedidos] = React.useState([])
  /**
   * 
   * {
   *   id: 
   *   comida
   * }
   */
  const handleMakePedido = (item) => {
    const newPedidos = pedidos.slice()
    newPedidos.push({
      id: getUniqueId(),
      comida: item
    })
    //the code above is the same as
    //[...pedidos, item, "hamburgesa"]
    setPedidos(newPedidos)
  }

  const handleCancelPedido = (item) => {
    //console.log(item, pedidos.filter((pedido) => pedido !== item))
    setPedidos(pedidos.filter((pedido) => pedido.id !== item.id))
  }

  console.log(pedidos)

  return (
    <div className='container'>
      <h1>Peditres ya</h1>
      <hr></hr>
      {menu.map((item) => (
        <button key={item} onClick={() => handleMakePedido(item)}>Pedir {item}</button>
      ))}
      <hr></hr>
      {pedidos.length ? pedidos.map((pedido, index) => (
        <Pedido id={pedido.id} key={pedido.id} onCancel={handleCancelPedido} comida={pedido} />
      )) : 'No hay pedidos'}
      <hr></hr>
    </div>
  )
}

export default App
