import React from 'react'
import Button from '../ui/Button'
import Card from '../ui/Card'

const EditGameForm = (props) => {
  const [formValues, setFormValues] = React.useState({
    name: props.game ? props.game.name : '' ,
    price: props.game ? props.game.price : '',
  })

  /** Si NO forzamos un reseteo a traves de la key,
   * necesitamos escuchar el cambio de props,
   * para resetear nuestro form
   * */
  // React.useEffect(() => {
  //   setFormValues({
  //     name: props.game ? props.game.name : '',
  //     price: props.game ? props.game.price : '',
  //   })
  // }, [props.game])

  const onInputChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    props.onSubmit(formValues)
    setFormValues()
  }

  return (
    <Card title={`Edit game ${props.game ? props.game.name : ''}`}>
      {formValues ? (
        <form id="create-form" className='flex flex-col' onSubmit={onSubmit}>
          <label>
            Name: <input name='name' type='text' value={formValues.name} onChange={onInputChange} />
          </label>
          <label>
            Price: <input name='price' type='number' value={formValues.price} onChange={onInputChange} />
          </label>
          <div>*Vapor se queda con el 30% de las regalias ($USD {((formValues.price || 0) * 0.3).toFixed(2)})</div>
          <Button styleType="primary" type='submit'>Edit</Button>
        </form>
      ) : 'Select a game to edit'}
    </Card>
  )
}

export default EditGameForm
