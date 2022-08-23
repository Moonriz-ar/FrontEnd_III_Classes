import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  .content {
    background-color: #333;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const Modal = (props) => {
  return (
    <StyledModal onClick={props.onHide}>
      <Card
        title={props.title}
        extra={<div onClick={props.onHide}>x</div>}
        footer={props.footer}
      >
        {props.children}
      </Card>
    </StyledModal>
  )
}

export default Modal
