import React from 'react'
import Button from '../ui/Button'
import Card from '../ui/Card'

const initialValue = {
  name: '',
  price: 0,
  genre: 'Metroidvania',
}

const CreateGameForm = (props) => {
  const [formValues, setFormValues] = React.useState(initialValue)

  const onInputChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }
  const onSubmit = (e) => {
    e.preventDefault()
    props.onSubmit(formValues)
    setFormValues(initialValue)
  }
  return (
    <Card title="Create game">
      <form id="create-form" className='flex flex-col' onSubmit={onSubmit}>
        <label>
          Name: <input name='name' type='text' value={formValues.name} onChange={onInputChange} />
        </label>
        <label>
          Price: <input name='price' type='number' value={formValues.price} onChange={onInputChange} />
        </label>
        <label>
          Genre:{' '}
          <select name='genre' value={formValues.genre} onChange={onInputChange}>
            <option value='Roguelike'>Roguelike</option>
            <option value='RPG'>RPG</option>
            <option value='Narrative'>Narrative</option>
            <option value='Metroidvania'>Metroidvania</option>
          </select>
        </label>
        <div>*Vapor se queda con el 30% de las regalias ($USD {((formValues.price || 0) * 0.3).toFixed(2)})</div>
        <Button styleType="primary" type='submit'>Add</Button>
      </form>
    </Card>
  )
}

export default CreateGameForm
