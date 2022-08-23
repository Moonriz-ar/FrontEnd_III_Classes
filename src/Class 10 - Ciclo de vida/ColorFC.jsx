import React from 'react'
import styled from 'styled-components'

const FlexSection = styled.div`
  display: flex;
  gap: 20px;
`

const ColorFC = (props) => {
  const [selected, setSelected] = React.useState(false)
  const [prevColor, setPrevColor] = React.useState()

  const activate = () => {
    setSelected(true)
  }

  React.useEffect(() => {
    console.log('after every render')

    return () => {
      console.log('aqui')
    }
  })

  React.useEffect(() => {
    console.log('mount')
    //login
    //setinterval

    return () => {
      //logout
      //clear interval
      console.log('unmount')
    }
  }, [])

  React.useEffect(() => {
    console.log('use effect')

    return () => {
      setPrevColor(props.children)
      console.log('saneamiento', props.children)
    }
  }, [props.children])

  console.log('render', prevColor)

  return (
    <FlexSection>
      <div>{prevColor} -&gt; {props.children}</div>
      <button onClick={activate}>Seleccionar</button>
      {selected ? <div>SELECCIONADO!</div> : undefined}
    </FlexSection>
  )
}

export default ColorFC;
