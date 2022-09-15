import React, { useCallback } from 'react'
import { Button, Col, Input, Row, Select, Tag } from 'antd'

const mockedLanguages = {
  "JavaScript": 141144,
  "TypeScript": 33928,
  "CSS": 9944,
  "HTML": 7884,
  "SCSS": 1029,
  "Shell": 79
}

const RepoDetail = (props) => {
  const [state, setState] = React.useState(false)
  const memoizedLanguages = React.useMemo(
    () => {
      console.log('use memo')
      const total = Object.values(mockedLanguages).reduce(
        (acc, curr) => {
          return acc + curr
        },
        0
      )
      const parsedLanguages = Object.entries(mockedLanguages).map(([key, value]) => {
        return {
          name: key,
          percentage: value / total * 100
        }
      })
      return parsedLanguages
    },
    [mockedLanguages, state]
  )

  React.useEffect(() => {
    console.log('use effect')
  }, [props.onClickTag])
  
  console.log('render')
  
  return (
    <div>
      {memoizedLanguages?.map((language) => (
        <div key={language.name}>{language.name} - {language.percentage.toFixed(2)}%</div>
      ))}
      <button onClick={() => setState(!state)}>toggle</button>
    </div>
  )
}

export default RepoDetail
