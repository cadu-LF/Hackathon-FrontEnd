import React from 'react';
import {Link} from 'react-router-dom'

import {
  ContainerFlex,
  LoginIcon,
  VerticalFlexContainer
} from '../ui'
import { LoginForm } from '../components/LoginForm'

import '../Assets/styles.css'
import styled from 'styled-components'

const ContainerLogin = styled(ContainerFlex)`
  width: 1081px;
  margin-top: 119px;
`
const VerticalLogin = styled(VerticalFlexContainer)`
  margin-top: 33px;
  width: 500px;
`

export const Login = () => {
  return(
    <ContainerLogin>
      <LoginIcon src='http://1.bp.blogspot.com/-uhYyFPqwVcw/TmdhnboxVxI/AAAAAAAABqs/rnburoqihn8/s1600/Bras%25C3%25A3o+da+GCM+de+Franca.jpg'/>
      <VerticalLogin>
        <LoginForm />
        <Link to='/esqueceu-senha' className='link-forgot_pass'>
          Recuperar senha
        </Link>
      </VerticalLogin>
    </ContainerLogin>
  )
}