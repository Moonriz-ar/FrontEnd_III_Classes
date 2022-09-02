import React from 'react'
import axios from 'axios'

const baseUrl = 'https://ctd-todo-api.herokuapp.com/v1'

export function useTaskApi() {
  const [user, setUser] = React.useState()

  const getUser = async (email, password) => {
    try {
      const responseLogin = await axios.post(`${baseUrl}/users/login`, {
        email: email,
        password: password,
      })

      const responseGetMe = await axios.get(`${baseUrl}/users/getMe`, {
        headers: {
          Authorization: responseLogin.data.jwt,
        },
      })

      console.log(responseGetMe)

      setUser(responseGetMe.data)
    } catch (error) {
      console.error('error', error.response.data)
    }
  }

  const logOut = () => {
    setUser()
  }

  return {
    user: user,
    getUser: getUser,
    logOut: logOut,
  }
}
