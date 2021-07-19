import React from 'react';
import { Link } from 'react-router-dom'

import { LabelTitle, Field, Button } from '../ui'

export const LoginForm = () => {
  return (
    <form>
      <LabelTitle>Email</LabelTitle><br></br>
      <Field /><br></br>
      <LabelTitle>Senha</LabelTitle><br></br>
      <Field /><br></br>
      <Link to='/menu-principal'>
        <Button>Entrar</Button>
      </Link>
    </form>
  )
}