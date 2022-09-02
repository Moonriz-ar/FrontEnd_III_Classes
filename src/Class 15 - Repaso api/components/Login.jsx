import React from 'react'

const initialValues = {
  email: '',
  password: '',
}

const Login = (props) => {
  const [formValues, setFormValues] = React.useState(initialValues)

  const onInputChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const onSubmit = (e) => {
    console.log(formValues)
    e.preventDefault()
    props.onLogin(formValues.email, formValues.password)
    setFormValues(initialValues)
  }

  return (
    <div>
      <form id='create-form' className='flex gap-10 items-center' onSubmit={onSubmit}>
        <label>
          Email: <input name='email' type='text' value={formValues.email} onChange={onInputChange} />
        </label>
        <label>
          Pass: <input name='password' type='password' value={formValues.password} onChange={onInputChange} />
        </label>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login
