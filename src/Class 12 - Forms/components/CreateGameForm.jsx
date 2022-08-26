import React from 'react'
import Button from '../ui/Button'
import Card from '../ui/Card'

// const obj = {
//   a: "abc",
//   b: "bcd",
//   c: "cde",
// }

// const obj2 = {
//   ...obj,
// }

// console.log(obj2)      // {a: "abc", b: "bcd", c: "cde"}
// console.log(obj2.a)    // "abc"
// console.log(obj2["a"]) // "abc"
// console.log(obj2["b"]) // "bcd"
// const foo = "a"
// console.log(arr[foo])  // "abc"

// obj2 = {
//   ...obj,
//   [foo]: "efg",
// },
// console.log(obj2)      // {a: "efg", b: "bcd", c: "cde"}

const initialValues = {
  name: '',
  price: '',
}

const CreateGameForm = (props) => {
  const [name, setName] = React.useState('') // puedo mantener los valores individualmente
  const [price, setPrice] = React.useState('')
  //o puedo mantener todos los valores del form juntos
  const [formValues, setFormValues] = React.useState(initialValues)

  const handleSubmit = (e) => {
    e.preventDefault() //evita que se recargue la pagina
    props.onSubmit(formValues)
    setFormValues(initialValues) //resetear el form
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handlePriceChange = (e) => {
    if (e.target.value.length < 4) {
      setPrice(e.target.value)
    }
  }

  const handleValueChange = (e) => {
    // leer arriba para entender el uso de spread operator y demas

    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Card title="Create game">
      <form id="create-game-form" className='flex flex-col gap-10' onSubmit={handleSubmit}>
        <label> Name: <input name="name" type='text' value={formValues.name} onChange={handleValueChange} /> </label>
        <label> Precio: <input name="price" type='number' value={formValues.price} onChange={handleValueChange} /> </label>
        <div>*Vapor se queda con el 30% de las regalias ($USD {((formValues.price || 0) * 0.3).toFixed(2)})</div>
        <button type='submit' form='create-game-form'>Agregar</button>
      </form>
    </Card>
  )
}

export default CreateGameForm
