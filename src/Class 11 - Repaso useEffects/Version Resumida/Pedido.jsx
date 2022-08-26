import React from 'react'

const Pedido = (props) => {
  const [pedidoReady, setPedidoReady] = React.useState(false)

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setPedidoReady(true)
    }, 2000)

    return () => {
      //si cancelan el pedido antes de que este listo, se debe cancelar
      clearTimeout(timeout)
    }
  }, [])

  React.useEffect(() => {
    return () => {
      //no usamos el alert porque bloquea el flujo de la aplicacion
      //no es buena practica intentar mostrar cosas en el unmount
      console.log('Pedido cancelado')
    }
  }, [])

  React.useEffect(() => {
    console.log('Pedido listo')
  }, [pedidoReady])

  return (
    <div>
      {pedidoReady ? 'Tu pedido se esta preparando' : 'Procesando Pedido'}&nbsp;
      <button onClick={props.onCancel}>Cancelar Pedido</button>
    </div>
  )
}

export default Pedido
