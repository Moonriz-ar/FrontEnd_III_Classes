import { Select } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { useSearchParams } from 'react-router-dom'

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  .ant-select {
    flex-grow: 1;
  }

`

const GameFilterForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleChange = (value) => {
    setSearchParams({ genre: value, price: 123 })
  }

  return (
    <Wrapper>
      <span>Filter by genre:</span>
      <Select
        defaultValue={searchParams.get("genre")}
        onChange={handleChange}
      >
        <Select.Option value='Roguelike'>Roguelike</Select.Option>
        <Select.Option value='Platformer'>Platformer</Select.Option>
        <Select.Option value='Metroidvania'>Metroidvania</Select.Option>
        <Select.Option value='Precision'>Precision</Select.Option>
      </Select>
    </Wrapper>
  )
}

export default GameFilterForm
