import React from 'react'
import styled from 'styled-components'

const FlexSection = styled.div`
  display: flex;
  gap: 20px;
`

const NameFC = (props) => {
  const [active, setActive] = React.useState(false)
  const [prevValue, setPrevValue] = React.useState(props.children)

  React.useEffect(() => {
    //after first render (mount)
    return () => {
      //before dissapear (unmount)
    }
  }, [])

  React.useEffect(() => {
    //after every new render
    return () => {
      //before new render (except first)
    }
  })

  React.useEffect(() => {
    //after props change
    return () => {
      //before props change
    }
  }, [props])

  const activate = () => {
    setActive(true)
  }

  return (
    <FlexSection>
      <div>{prevValue} -&gt; {props.children}</div>
      <button onClick={activate}>Activate</button>
      {active && <div>ACTIVADO!</div>}
    </FlexSection>
  )
}

export default NameFC;
