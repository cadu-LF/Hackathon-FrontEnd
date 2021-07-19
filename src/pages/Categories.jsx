import React, {useEffect, useState} from 'react';
import {Header} from '../components/Header'

import {filter} from '../services/api'

import { useOccurrences } from '../hooks/Occurrences'
import {NavegationBox, Box, NumberOccorences} from '../ui'

export const Categories = () => {
  const { occorences, loadOccurrences } = useOccurrences();

  const [trash, setTrash] = useState([])
  const [abandon, setAbandon] = useState([])
  const [mistreat, setMistreat] = useState([])
  const [irregularSubdivision, setIrregularSubdivision] = useState([])
  const [badUsage, setBadUsage] = useState([])
  const [deforestation, setDeforestation] = useState([])

  //pega ocorrencias do BD
  useEffect(() =>{
    loadOccurrences();
  }, [loadOccurrences])

  // filtrar a ocorrencia de acordo com a categoria
  useEffect(() =>{
    const filtered = filter(occorences, 1)
    setTrash(filtered)
  }, [occorences])
  
  useEffect(() =>{
    const filtered = filter(occorences, 2)

    setAbandon(filtered)
  }, [occorences])

  useEffect(() =>{
    const filtered = filter(occorences, 3)

    setMistreat(filtered)
  }, [occorences])

  useEffect(() =>{
    const filtered = filter(occorences, 4)

    setIrregularSubdivision(filtered)
  }, [occorences])

  useEffect(() =>{
    const filtered = filter(occorences, 5)

    setBadUsage(filtered)
  }, [occorences])

  useEffect(() =>{
    const filtered = filter(occorences, 6)

    setDeforestation(filtered)
  }, [occorences])

  
  // mostra a quantidade de ocorrencias de determinado tipo
  useEffect(() =>{
    document.getElementById('trash').innerHTML = trash.length
  }, [trash]) 
  
  useEffect(() =>{
    document.getElementById('ab').innerHTML = abandon.length
  }, [abandon]) 
  
  useEffect(() =>{
    document.getElementById('mistreat').innerHTML = mistreat.length
  }, [mistreat]) 
  
  useEffect(() =>{
    document.getElementById('irregular-subdivision').innerHTML = irregularSubdivision.length
  }, [irregularSubdivision]) 
  
  useEffect(() =>{
    document.getElementById('bad-usage').innerHTML = badUsage.length
  }, [badUsage]) 
  
  useEffect(() =>{
    document.getElementById('deforestation').innerHTML = deforestation.length
  }, [deforestation]) 
  
  return(
    <>
      <Header canGoBack={true} path='/menu-principal' canSave={false}/>
      <Box>              
        {/* Passar os ocorrências desse tipo para a próxima página */}
        <NavegationBox to='/categorias/1/Descarte-Irregular-de-Residuos'>
          Descarte Irregular de Resíduos
        </NavegationBox>
        <NumberOccorences id='trash'></NumberOccorences>
      </Box>      
      <Box>
          <NavegationBox to='/categorias/2/Abandono-de-Animais'>
            Abandono de Animais
          </NavegationBox>
        <NumberOccorences id='ab'></NumberOccorences>
      </Box>
      <Box>        
          <NavegationBox to='/categorias/3/Maus-Tratos-Contra-Animais'>
            Maus Tratos Contra Animais
          </NavegationBox>        
        <NumberOccorences id='mistreat'></NumberOccorences>
      </Box>
      <Box>
          <NavegationBox to='/categorias/4/Loteamento-Irregular'>
            Loteamento Irregular
          </NavegationBox>
        <NumberOccorences id='irregular-subdivision'></NumberOccorences>
      </Box>
      <Box>
          <NavegationBox to='/categorias/5/Uso-Indevido-de-Area-Pública'>
            Uso Indevido de Área Pública
          </NavegationBox>
        <NumberOccorences id='bad-usage'></NumberOccorences>
      </Box>
      <div className="last">
        <Box>
            <NavegationBox to='/categorias/6/Desmatamento'>
              Desmatamento
            </NavegationBox>
          <NumberOccorences id='deforestation'></NumberOccorences>
        </Box>
      </div>      
    </>
  )
}