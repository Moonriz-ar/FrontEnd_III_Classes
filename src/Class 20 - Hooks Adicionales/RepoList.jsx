import React from 'react'
import Axios from 'axios'

const mockedUser = 'gabymorgi'
const baseUrl = 'https://api.github.com'

const useApiGithub = () => {
  const [data, setData] = React.useState([])

  const getData = React.useCallback(async (filters) => {
    const response = await Axios.get(`${baseUrl}/users/${mockedUser}/repos`, {
      params: filters ? {
        sort: filters.sort,
        direction: 'asc',
      } : undefined
    })
    setData(response.data)
  }, [])

  return {
    data,
    getData,
  }
}

const RepoList = () => {
  const [selected, setSelected] = React.useState()
  const { data, getData } = useApiGithub()

  React.useEffect(() => {
    getData()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    getData({ sort: selected })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select value={selected} onChange={(e) => setSelected(e.target.value)}>
          <option>created</option>
          <option>updated</option>
          <option>pushed</option>
          <option>full_name</option>
        </select>
        <button type="submit">submit</button>
      </form>
      {data.map((repo) => (
        <div key={repo.id}>{repo.name}</div>
      ))}
    </div>
  )
}

export default RepoList
