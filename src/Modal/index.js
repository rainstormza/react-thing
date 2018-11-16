import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Modal from './Modal'

const GlobalStyle = createGlobalStyle`
  #modal-root {
    position: relative;
    z-index: 999;
  }
`

const ModalStyle = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const AppContainer = styled.div`
  height: 10em;
  width: 10em;
  background: lightblue;
  overflow: hidden;
`

function ModalContainer() {
  const [modal, setModal] = useState(false)
  const renderModal = modal ? (
    <Modal>
      <ModalStyle>
        <div>
          With a portal, we can render content into a different part of the DOM, as if it were any
          other React child.
        </div>
        This is being rendered inside the #modal-container div.
        <button onClick={() => setModal(false)}>Hide modal</button>
      </ModalStyle>
    </Modal>
  ) : null
  return (
    <AppContainer>
      <GlobalStyle />
      This div has overflow: hidden.
      <button onClick={() => setModal(true)}>Show modal</button>
      {renderModal}
    </AppContainer>
  )
}

export default ModalContainer
