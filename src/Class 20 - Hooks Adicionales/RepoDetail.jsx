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

  const parseRepo = (repo) => {
    return repo.replace(/ /g, "_")
  }
  
  const getData = React.useCallback(
    async () => {
      console.log('repo', repo)
      const newRepo = parseRepo(repo)
      await new Promise(r => setTimeout(r, 200)); //sleep
      const response = { ...mockedLanguages[repo] }
      setData(response)
    },
    [repo]
  )

  React.useEffect(() => {
    console.log(repo)
  }, [repo])

  React.useEffect(() => {
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
  const inputRef = React.useRef(null)

  console.log(inputRef)

  const handleChange = (e) => {
    setRepo(e.target.value)
  }

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
    //inputRef.current.value = "asdf"
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
        <input ref={inputRef} value={text} onChange={(e) => setText(e.target.value)} />
        {Array(100).fill(0).map((_, i) => (
          <Row key={i}>
            <Col span={6}>{i}</Col>
          </Row>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default RepoDetail
