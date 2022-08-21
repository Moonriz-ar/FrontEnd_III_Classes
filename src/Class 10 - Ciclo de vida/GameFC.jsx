import React from 'react'
import styled from 'styled-components'

const FlexSection = styled.div`
  display: flex;
  gap: 20px;
`

const GameFC = (props) => {
  const [comprado, setComprado] = React.useState(false)

  const handleComprado = () => {
    setComprado(true)
    props.onComprar()
  }
  return (
    <FlexSection>
      <div>{props.game.name}</div>
      <div>Precio: {props.game.price}</div>
      {comprado ? <div>Lo tienes!!!</div> : <button onClick={handleComprado}>COMPRAR!!!</button>}
    </FlexSection>
  )
}

export default GameFC;
