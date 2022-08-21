import React from 'react'

const CicloFC = (props) => {
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
    //after some value in dependency array change
    return () => {
      //before some value in dependency array change
    }
  }, [props]) //<-- dependency array

  return (
    <div>
      render :D
    </div>
  )
}

export default CicloFC;
