import React from 'react';
import { Link } from 'react-router-dom'

import { LabelTitle, Field, Button, ContainerFlex, VerticalFlexContainer } from '../ui'
import styled from 'styled-components'

const ContainerForm = styled(ContainerFlex)`
  justify-content: space-around;
`

const VerticalForm = styled(VerticalFlexContainer)`
  width: 500px;
  margin-left: 0;
`

export const RegisterForm = () => {
  return (
    <form>
      <ContainerForm>
        <VerticalForm>
          <LabelTitle>Nome</LabelTitle><br></br>
          <Field /><br></br>
        </VerticalForm>
        <VerticalForm>
          <LabelTitle>Sobrenome</LabelTitle><br></br>
          <Field /><br></br>
        </VerticalForm>
      </ContainerForm>
      <ContainerForm>
        <VerticalForm>
          <LabelTitle>Email</LabelTitle><br></br>
          <Field /><br></br>
        </VerticalForm>
        <VerticalForm>
          <LabelTitle>Numero de Chapa</LabelTitle><br></br>
          <Field /><br></br>
        </VerticalForm>
      </ContainerForm>
      <ContainerForm>
        <VerticalForm>
          <LabelTitle>Senha</LabelTitle><br></br>
          <Field /><br></br>
        </VerticalForm>
        <VerticalForm>
          <LabelTitle>Confirmar Senha</LabelTitle><br></br>
          <Field /><br></br>
        </VerticalForm>
      </ContainerForm>
      <ContainerForm>
        <Link to='/sucesso'>
          <Button>Finalizar Cadastro</Button>
        </Link>
      </ContainerForm>
    </form>
  )
}