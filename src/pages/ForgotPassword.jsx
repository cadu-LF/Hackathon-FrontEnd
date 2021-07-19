import React from 'react';
import { Link } from 'react-router-dom'

import {
  Title,
  Field,
  Button,
  VerticalFlexContainer
} from '../ui'

import '../Assets/styles.css'

export const ForgotPassword = () => {
  return (
    <VerticalFlexContainer id='centralize-container'>
      <Title className='title-forgot_pass'>Esqueceu sua Senha?</Title>
      <p className="text-forgot_pass">
        Informe seu email no campo abaixo.
        <br></br><br></br>
        Enviaremos um email para que possa alterar sua senha
      </p>
      <Field placeholder='Informe seu Email' id='input-forgot_pass'></Field>
      <Link to='/esqueceu-senha/trocar'>
        <Button>Enviar</Button>
      </Link>
    </VerticalFlexContainer>
  )
}