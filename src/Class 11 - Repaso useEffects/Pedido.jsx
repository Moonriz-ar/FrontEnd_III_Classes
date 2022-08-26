import React from 'react'
import { Modal } from 'antd'

const Pedido = (props) => {
  //Evitemos copiar las props directo al estado,
  //mantenerlo actualizado con las props implica logica adicional
  //sujeta a potenciales errores
  const [pedidoReady, setPedidoReady] = React.useState(false)
  const [isCancelingPedido, setIsCancelingPedido] = React.useState(false)

  //esto es un ejemplo, pero manejar un pedido desde 2 lados distintos
  //(la app controla el tipo de pedido, y aca controlamos las bebidas)
  //puede ser un problema a la hora de sincronizar informacion
  const [isBedida, setIsBedida] = React.useState(false)

  React.useEffect(() => {
    //aca simulamos una llamada a la api
    //a futuro esto podria ser
    //const pedido = await api.peditresya.getPedido(props.pedido.id)
    //setPedido(pedido)
    const timeout = setTimeout(() => {
      setPedidoReady(true)
    }, 2000)

    return () => {
      //aca simulamos la cancelacion del pedido
      //a futuro esto podria ser
      //await api.peditresya.cancelarPedido(props.pedido.id)
      clearTimeout(timeout)
    }
  }, [])

  const handleCancelPedido = () => {
    setIsCancelingPedido(false)
    props.onCancel(props.pedido)
  }

  return (
    <div className='flex items-center justify-between gap-10'>
      {pedidoReady ? `Tu pedido (${props.pedido.comida}) se esta preparando` : `Procesando Pedido ${props.pedido.comida}`}
      <div className='flex gap-10'>
        {isBedida ? `Bebida incluida` : <button onClick={() => setIsBedida(true)}>Agregar Bebida</button>}
        <button onClick={() => props.onCancel(props.pedido)}>Cancelar Pedido</button>
      </div>
      {/**
       * Forma friendly de realizar una operacion destructiva
       * No es buena practica intentar mostrar cosas en el unmount de un componente
       * Para mas info de como usar este componente visitar 
       * https://ant.design/components/modal/?theme=dark
       */}
      <Modal
        title="Cancelando pedido"
        visible={isCancelingPedido}
        okButtonProps={{ type: 'danger' }}
        onOk={handleCancelPedido}
        onCancel={() => setIsCancelingPedido(false)}
      >
        Seguro quieres cancelar tu pedido de {props.pedido.nombre}?
      </Modal>
    </div>
  )
}

export default Pedido
