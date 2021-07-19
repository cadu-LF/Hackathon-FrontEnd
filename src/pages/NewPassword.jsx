import React from 'react';
import { Link } from 'react-router-dom'

import {
  LabelTitle,
  Field,
  Button
} from '../ui'

export const NewPassword = () => {
  return (
    <>
      <form id='centralize-container'>
        <LabelTitle className='title-forgot_pass'>Informe sua Nova Senha</LabelTitle><br></br>
        <Field type='password'></Field><br></br>
        <LabelTitle>Confirme sua Nova Senha</LabelTitle><br></br>
        <Field type='password'></Field><br></br>
        <Link to='/'>
          <Button>Enviar</Button>
        </Link>
      </form>
    </>
  )
}