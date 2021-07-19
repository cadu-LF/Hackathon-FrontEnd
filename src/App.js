import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {AppProvider} from './hooks'
import {Login} from './pages/Login'
import {Register} from './pages/Register'
import {Page404} from './pages/Page404'
import {Success} from './pages/Success'
import {MainMenu} from './pages/MainMenu'
import {Categories} from './pages/Categories'
import {Occorences} from './pages/Occorences'
import {OccorenceDetail} from './pages/OccorenceDetail'
import { ForgotPassword } from './pages/ForgotPassword';
import { NewPassword } from './pages/NewPassword';

import {GlobalStyle} from './ui/GlobalStyle'

function App() {
  return (
    <>
      <GlobalStyle />
      <AppProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Login />
            </Route>
            <Route path='/cadastro'>
              <Register/>
            </Route>
            <Route path='/sucesso'>
              <Success/>
            </Route>
            <Route path='/menu-principal'>
              <MainMenu />
            </Route>
            <Route exact path='/categorias'>
              <Categories />
            </Route>
            <Route exact path='/categorias/:catId/:occorenceType'>
              <Occorences />
            </Route>
            <Route exact path='/categorias/:catId/:occorenceType/:id'>
              <OccorenceDetail />
            </Route>
            <Route exact path='/esqueceu-senha'>
              <ForgotPassword />
            </Route>
            <Route exact path='/esqueceu-senha/trocar'>
              <NewPassword />
            </Route>

            <Route>
              <Page404/>
            </Route>
          </Switch>  
        </BrowserRouter>
      </AppProvider>  
    </>
  );
}

export default App;
