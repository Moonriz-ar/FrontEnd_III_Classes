import React from 'react'
import axios from 'axios'

export function useUsersApi() {
  const [loading, setLoading] = React.useState(false)
  const [users, setUsers] = React.useState([])

  // los metodos asincronicos, como el axios.get, retornan una promesa
  // por lo tanto podemos usar .then para ejecutar codigo luuego de que se resuelva
  // y .catch para ejecutar codigo en caso de que ocurra un error
  //sin embargo, es dificil rastrear el codigo
  const getDataWithThen = () => {
    //esto se ejecuta 1
    setLoading(true)
    const response = axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      console.log('then', response)
      //aca la promesa se resuelve
      //esto se ejecuta 3 condicionalmente si sale todo bien
    }).catch((error) => {
      console.log('catch', error)
      //aca gestionamos errores
      //esto se ejecuta 3 condicionalmente si sale todo mal
    }).finally((prop) => {
      console.log('finally', prop)
      //esto se ejecuta 4
      setLoading(false)
    })
    //esto se ejecuta 2
    console.log('response', response)
  }

  //para evitar esto, podemos usar async await
  // para poder usar await dentro de una funcion, hay que marcar la misma con la palabra async
  const getDataWithAsync = async () => {
    //esto se ejecuta 1
    setLoading(true)
    try {
      //esto se ejecuta 2 hasta el final, o hasta que algo explote
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)

    } catch (error) {
      //esto se ejecuta 3 condicionalmente, si algo explota
      console.error('error', error.message)
    }
    //esto se ejecuta 4
    setLoading(false)
  }

  // React.useEffect(() => {
  //   getDataWithAsync()
  // }, [])

  /*
    retornamos las cosas que vamos a exponer
    por ejemplo, el loading queremos que sea de solo lectura, asi que no exponemos el useLoading
  */
  return {
    loading, //si el nombre de la key y del value son iguales, se puede omitir ': [value]'; esto equivale a 'loading: loading'
    users: users,
    getDataWithAsync: getDataWithAsync,
    getDataWithThen: getDataWithThen,
  }
}