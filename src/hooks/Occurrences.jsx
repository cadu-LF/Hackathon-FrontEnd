import React, { createContext, useCallback, useContext, useState } from 'react'
import { api } from '../services/api'

const OccurrencesContext = createContext({})

export const OccurrencesProvider = ({ children }) => {
  // state q pega TODAS as ocorrências do banco
  const [occorences, setOccorences] = useState([{
    local: 'abcd',
    occorenceNumber: 1,
    category: 1,
    situation: 'não procede',
    name: 'Cadu',
    phone: '(16) 9 9999-9999',
    obs: 'bla bla bla, bla bla bla, bla',
    date: "22/02/2021",
    viewed: true
  }, {
    local: 'Santo Agostinho',
    occorenceNumber: 2,
    category: 5,
    situation: 'não procede',
    name: 'Cadu',
    phone: '(16) 9 9999-9999',
    obs: 'bla bla bla, bla bla bla, bla',
    date: "22/02/2021",
    viewed: false
  }, {
    local: 'Centro',
    occorenceNumber: 3,
    category: 2,
    situation: 'não procede',
    name: 'Cadu',
    phone: '(16) 9 9999-9999',
    obs: 'bla bla bla, bla bla bla, bla',
    date: "22/02/2021",
    viewed: true
  }, {
    local: 'Centro',
    occorenceNumber: 4,
    category: 1,
    situation: 'não procede',
    name: 'Cadu',
    phone: '(16) 9 9999-9999',
    obs: 'bla bla bla, bla bla bla, bla',
    date: "22/02/2021",
    viewed: false
  }, {
    local: 'Centro',
    occorenceNumber: 5,
    category: 3,
    situation: 'não procede',
    name: 'Cadu',
    phone: '(16) 9 9999-9999',
    obs: 'bla bla bla, bla bla bla, bla',
    date: "22/02/2021",
    viewed: false
  }, {
    local: 'Centro',
    occorenceNumber: 6,
    category: 5,
    situation: 'não procede',
    name: 'Cadu',
    phone: '(16) 9 9999-9999',
    obs: 'bla bla bla, bla bla bla, bla',
    date: "22/02/2021",
    viewed: true
  }, {
    local: 'Centro',
    occorenceNumber: 7,
    category: 5,
    situation: 'não procede',
    name: 'Cadu',
    phone: '(16) 9 9999-9999',
    obs: 'bla bla bla, bla bla bla, bla',
    date: "22/02/2021",
    viewed: false
  }, {
    local: 'Centro',
    occorenceNumber: 8,
    category: 5,
    situation: 'não procede',
    name: 'Cadu',
    phone: '(16) 9 9999-9999',
    obs: 'bla bla bla, bla bla bla, bla',
    date: "22/02/2021",
    viewed: false
  }])

  const loadOccurrences = useCallback(async () => {
    // FUNÇÃO QUE, QUANDO EXECUTADA, BUSCA AS OCORRÊNCIAS CADASTRADA NO BACK-END
    // E ATUALIZA O ESTADO QUE ARMAZENA AS OCORRÊNCIAS ATUAIS
    const resp = await api.get('/occurrence')

    setOccorences(resp)
  }, [])

  return (
    <OccurrencesContext.Provider
      value={{ occorences, loadOccurrences }}
    >
      {children}
    </OccurrencesContext.Provider>
  )
}

export function useOccurrences() {
  const context = useContext(OccurrencesContext)

  return context
}