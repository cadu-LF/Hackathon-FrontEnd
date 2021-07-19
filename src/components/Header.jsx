import React from 'react';
import {Link, useParams} from 'react-router-dom'
import {sendData} from '../services/api'

import {
  ContainerFlex, 
  LoginIcon, 
  NavegationButton,
  HeaderSaveButton
} from '../ui'
import styled from 'styled-components'

import '../Assets/styles.css'

const HeaderColorButton = styled(NavegationButton)`
  background-color: #FFC233;
  color: white;

  &:visited{
    color: white;
  }
`

const HeaderTransparentButton = styled(NavegationButton)`
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 5px;
  color: #fff;

  &:visited{
    color: white;
  }
`

const HeaderContainer = styled(ContainerFlex)`
  margin: 0 0;
  background: #265AB3;
  width: 100%;
  height: 60px;
  align-items: center;
`

const IconHeader = styled(LoginIcon)`
  margin: auto auto;
  width: 50px;
  height: 50px;
`

const InnerContainer = styled(ContainerFlex)`
  width: 377px;
  height: 60px;
  align-items: center;
  justify-content: space-around;
  margin: 0 0;
  background: transparent;
`

export const Header = ( {canGoBack, path, canSave} ) => {
  let { id } = useParams()
  
  function handleGoBack(canGoBack){
    if(canGoBack){
      return( 
        <Link to={path}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16" className='go-back_arrow'>
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
          </svg>        
        </Link>       
      )
    }
  }

  function handleSave(canSave){
    if(canSave){
      let occurenceNumb = document.getElementById('on')
      let situation = document.getElementById('os')

      return(
        <HeaderSaveButton type='button' onClick={sendData(id, occurenceNumb, situation)}>Salvar</HeaderSaveButton>
      )
    }
  }

  return(
    <HeaderContainer>
      <div className='arrow-image'>
        { handleGoBack(canGoBack) } 
      </div>
      <IconHeader src='http://1.bp.blogspot.com/-uhYyFPqwVcw/TmdhnboxVxI/AAAAAAAABqs/rnburoqihn8/s1600/Bras%25C3%25A3o+da+GCM+de+Franca.jpg'/>
        <InnerContainer>    
          <div className='save-button'>          
            {handleSave(canSave)}
          </div>        
          <HeaderColorButton to='/cadastro'>Criar novo usuário</HeaderColorButton>
          <HeaderTransparentButton to='/'>Sair</HeaderTransparentButton>
        </InnerContainer>
    </HeaderContainer>
  )
}