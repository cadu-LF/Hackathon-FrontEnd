import React from 'react';
import {Link} from 'react-router-dom'

import {Header} from '../components/Header'

import {NavegationBox, Box} from '../ui'

export const MainMenu = () => {
  return(
    <>
      <Header canGoBack={false} path='' canSave={false}/>
      <Box>
        <NavegationBox >Análise de Dados </NavegationBox>        
      </Box>
      <Box>
        <NavegationBox to='/categorias'>Categorias </NavegationBox>
      </Box>
    </>
  )
}