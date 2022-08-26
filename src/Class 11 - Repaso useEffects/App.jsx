import React from 'react'
import Pedido from './Pedido'
import { getUniqueId } from './utils'
import Timer from './Timer'

const menu = ['pizzas', 'hamburguesas', 'ensaladas', 'empanadas']

const App = () => {
  /**
   * -- para los typescripteros --
   * 
   * interface Pedido {
   *   id: number
   *   comida: string
   * }
   * React.useState<Pedido[]>([])
   */
  const [pedidos, setPedidos] = React.useState([])


  const handleMakePedido = (item) => {
    const newPedidos = pedidos.slice()
    newPedidos.push({
      id: getUniqueId(), //cualquier otro componente que necesite ids, puede usar este metodo y no colisionan
      comida: item,
    })
    //the code above is the same as
    //[...pedidos, item, "hamburgesa"]
    setPedidos(newPedidos)
  }

  const handleCancelPedido = (item) => {
    //console.log(item, pedidos.filter((pedido) => pedido !== item))
    setPedidos(pedidos.filter((pedido) => pedido.id !== item.id))
  }

  return (
    <div className='container'>
      <h1>Peditres ya</h1>
      <hr></hr>
      {menu.map((item) => (
        <button key={item} onClick={() => handleMakePedido(item)}>Pedir {item}</button>
      ))}
      <hr></hr>
      {pedidos.length ? pedidos.map((pedido) => (
        //la key debe ser unica, pero tambien INTRINSECA al elemento
        //tienen que representarlo univocamente entre sus hermanos
        //la key no debe cambiar independientemente de como se altere al arreglo
        <Pedido key={pedido.id} onCancel={handleCancelPedido} pedido={pedido} />
      )) : 'No hay pedidos'}
      <hr></hr>
      <div>Hora:</div>
      <Timer />
    </div>
  )
}

export default App
