import React, { useCallback } from 'react'
import Axios from 'axios'
import { Col, message, Row } from 'antd'

const mockedLanguages = {
  FrontEnd_III_Classes: {
    "JavaScript": 141144,
    "TypeScript": 33928,
    "CSS": 9944,
    "HTML": 7884,
    "SCSS": 1029,
    "Shell": 79
  },
  games: {
    "TypeScript": 131666,
    "HTML": 3457,
    "JavaScript": 1021
  },
  jsproject: {
    "JavaScript": 2671,
    "CSS": 1846,
    "HTML": 1293
  }
}

const useApiGithub = () => {
  const [data, setData] = React.useState({})
  const [repo, setRepo] = React.useState("FrontEnd_III_Classes")

  const parseRepo = (param) => {
    return param.replace(/ /g, "_")
  }
  
  const getData = React.useCallback(
    async () => {
      console.log('repo', repo)
      /*
        no necesitamos agregar parseRepo a las dependencias
        ya que la funcion recibe todo lo que necesita como parametro
        (probar que pasa si parseRepo en lugar de udar el param, usa el estado 'repo')
      */
      const newRepo = parseRepo(repo) //esta linea es solo de test
      await new Promise(r => setTimeout(r, 200)); //sleep
      const response = { ...mockedLanguages[repo] }
      setData(response)
    },
    [repo] //si no agregamos repo, la funcion se ejecuta con el snapshot inicial de repo
  )

  React.useEffect(() => {
    /*
      get data depende del estado, por lo que debemos agregarlo a las dependencias
    */
    getData()
  }, [getData])

  return {
    data,
    setRepo,
  }
}

const RepoDetail = (props) => {
  const { data, setRepo } = useApiGithub()
  const [text, setText] = React.useState("")
  /*
    una ref no es un estado
    no dispara un rerender si cambia
    podemos utilizarlo para actualizar valores que no nos importe mostrar en el dom,
    pero que sean importantes para alguna funcion
    una ref tiene una estructura tal que:
    {
      current: valor
    }
  */
  const inputRef = React.useRef(null)

  console.log(inputRef)

  const handleChange = (e) => {
    setRepo(e.target.value)
  }

  /**
   * memoizamos calculos complejos para que no se vuelvan a ejecutar
   * ante cualquier cambio de state o props
   * solo miramos el arreglo de dependencia
   */
  const memoizedLanguages = React.useMemo(
    () => {
      const total = Object.values(data).reduce(
        (acc, curr) => {
          return acc + curr
        },
        0
      )
      const parsedLanguages = Object.entries(data).map(([key, value]) => {
        return {
          name: key,
          percentage: value / total * 100
        }
      })
      return parsedLanguages
    },
    [data]
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text) {
      message.error('Please enter something')
      inputRef.current.focus()
      return false
    }
    console.log('submited', text)
  }
  
  return (
    <div>
      <select onChange={handleChange}>
        <option value="FrontEnd_III_Classes">FrontEnd_III_Classes</option>
        <option value="games">games</option>
        <option value="jsproject">jsproject</option>
      </select>
      {memoizedLanguages?.map((language) => (
        <div key={language.name}>{language.name} - {language.percentage.toFixed(2)}%</div>
      ))}
      <form onSubmit={handleSubmit}>
        {/**
         * el ref se puede utilizar en cualquier elemento NATIVO
         * no se puede utilizar en componentes personalizados
         */}
        <input ref={inputRef} value={text} onChange={(e) => setText(e.target.value)} />
        <Row> {/* filling space */}
          {Array(100).fill(0).map((_, i) => (
            <Col key={i} span={6}>{i}</Col>
          ))}
        </Row>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default RepoDetail
