import React from 'react';

import {ContainerFlex, CentralizedContainer, NavegationBox} from '../ui'
import styled from 'styled-components'
import '../Assets/styles.css'

const SuccessButton = styled(NavegationBox)`
  background-color: #FFC233;
  padding: 22px 28px; 
  border-radius: 15px;
  color: white;
  margin: 100px auto;
  width: 290px;
  left: 576px;

  &:visited{
    color: white;
  }
`

const SuccesMessage = styled(ContainerFlex)`
  color: #28A745;
`

export const Success = () => {
  return(
    <CentralizedContainer>
      <SuccesMessage>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="100" height="100" 
          fill="currentColor" 
          class="bi bi-check2-circle" 
          viewBox="0 0 16 16"
          className="success-icon"
          >
          <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
          <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
        </svg>
        <h1 className="success-message">Cadastro realizado com sucesso!</h1>
      </SuccesMessage>    
      <SuccessButton to='/menu-principal'>Voltar para o sistema</SuccessButton>
    </CentralizedContainer>
  )
}