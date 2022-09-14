import React from 'react';
import styled from 'styled-components'
import { Message, PrimaryMessage, SuccessMessage, WarningMessage, ErrorMessage } from './uikit/Message'
import { Button } from './uikit/Button'
import { Input, Select } from './uikit/FormItems'
import { Grid } from './uikit/Grid'

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  > img {
    width: 32px;
    height: 32px;
  }

  > span {
    color: green;
  }
`

const App = () => {
  return (
    <div>
      <h1>Estilos</h1>
      <div>
        <Logo>
          <img src={`${process.env.PUBLIC_URL}/images/vapor.png`} alt='Vapor' />
          <span>Vapor</span>
        </Logo>
        <hr />
        <div>
          <Message>common message</Message>
          <PrimaryMessage>primary message</PrimaryMessage>
          <SuccessMessage>success message</SuccessMessage>
          <WarningMessage>warning message</WarningMessage>
          <ErrorMessage>error message</ErrorMessage>
        </div>
        <hr />
        <div>
          <Button>default button</Button>
          <Button styleType="primary">primary button</Button>
          <Button styleType="danger">danger button</Button>
        </div>
        <hr />
        <div>
          <Input className="text" type="text" placeholder='input text' />
          <Input type="number" placeholder='input number' />
          <Select>
            <option>option 1</option>
            <option>option 2</option>
            <option>option 3</option>
          </Select>
        </div>
        <hr />
        <Grid>
          {Array(100).fill(0).map((_, i) => (
            <div key={i}>
              Block
            </div>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default App;
