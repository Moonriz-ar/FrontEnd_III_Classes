import React from 'react'
import { Modal } from 'antd'

const Pedido = (props) => {
  const [pedidoReady, setPedidoReady] = React.useState(false)
  const [isCanceling, setIsCanceling] = React.useState(false)
  const [isBedida, setIsBedida] = React.useState(false)

  React.useEffect(() => {
    console.log('mount', props.comida)
    const timeout = setTimeout(() => {
      setPedidoReady(true)
    }, 2000)

    return () => {
      console.log('unmount', props.comida)
      clearTimeout(timeout)
    }
  }, [])

  React.useEffect(() => {
    //console.log('Pedido listo', props.pedido)
  }, [pedidoReady])

  return (
    <div id={props.comida.id}>
      {pedidoReady ? `Tu pedido (${props.comida.comida}) se esta preparando` : `Procesando Pedido ${props.comida.comida}`}&nbsp;
      {isBedida ? `Bebida incluida` : <button onClick={() => setIsBedida(true)}>Agregar Bebida</button>}&nbsp;
      <button onClick={() => props.onCancel(props.comida)}>Cancelar Pedido</button>
    </div>
  )
}

export default Pedido
