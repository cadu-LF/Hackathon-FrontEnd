import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { useOccurrences } from '../hooks/Occurrences'
import { findOccurenceNumber, api } from '../services/api'

import { Header } from '../components/Header'
import {
  ContainerFlex,
  VerticalFlexContainer,
  Field,
  SelectOption,
  TitleSmall,
  BigMap
} from '../ui'

import styled from 'styled-components'

const ContainerFlexDetail = styled(ContainerFlex)`
  width: 1072px;
  margin-top: 142px;
`



export const OccorenceDetail = () => {
  const { occorences, loadOccurrences } = useOccurrences();
  const [filtered, setFiltered] = useState({})

  let { occorenceType } = useParams()
  let { catId } = useParams()
  let { id } = useParams()

  useEffect(() => {
    loadOccurrences();
    console.log(occorences)
  }, [loadOccurrences])

  useEffect(async () => {
    let result = await findOccurenceNumber(occorences, id)

    setFiltered(result)

    await api.patch(`occurences/${id}`, { viwed: true });
    // baixar imagem
    // setar viewed=true
  }, [])

  return (
    <>
      <Header canGoBack={true} path={`/categorias/${catId}/${occorenceType}`} canSave={true} />
      <ContainerFlexDetail>
        <BigMap src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.4226499496335!2d-47.40930368545719!3d-20.529880962543356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b0a64a7ecf7d2d%3A0xa44298d71a67d587!2sR.%20Dr.%20Armando%20De%20Salles%20Oliveira%2C%201%20-%20Estacao%2C%20Franca%20-%20SP%2C%2014405-094!5e0!3m2!1spt-BR!2sbr!4v1626545709501!5m2!1spt-BR!2sbr"
          allowfullscreen=""
          loading="lazy" />

        <VerticalFlexContainer>
          <h2 className='occorence-location_detail'>{filtered.local}</h2>
          <Field
            placeholder={filtered.occorenceNumber}
            className='input-detail_occorence
            vetical_flex-itens'
            id='on'
          />
          <SelectOption className='vetical_flex-itens' id='os'>
            <option value='Registro do número de ocorrência' selected>Registro do número de ocorrência</option>
            <option value='Registro do número de ocorrência'>Registro do número de ocorrência</option>
            <option value='Encaminhamento do AI à 2ª. Promotoria de Justiça'>Encaminhamento do AI à 2ª. Promotoria de Justiça</option>
            <option value='Encaminhamento do AI à 7ª. Promotoria de Justiça' >{filtered.situation}Encaminhamento do AI à 7ª. Promotoria de Justiça</option>
            <option value='Encaminhamento do AI à Polícia Civil' >Encaminhamento do AI à Polícia Civil</option>
            <option value='Encaminhamento do AI à Polícia Militar Ambiental'>Encaminhamento do AI à Polícia Militar Ambiental</option>
            <option value='Encaminhamento do AI à CETESB'>Encaminhamento do AI à CETESB</option>
            <option value='Não procede'>Não procede</option>
          </SelectOption>
          <TitleSmall className='vetical_flex-itens' id='centralize'>{filtered.name}</TitleSmall>
          <TitleSmall className='vetical_flex-itens' id='centralize'>{filtered.phone}</TitleSmall>
        </VerticalFlexContainer>
      </ContainerFlexDetail>
      <p className='citizen-obs_text'>
        {filtered.obs}
      </p>
      <p className='citizen-obs_date'>
        {filtered.date}
      </p>
    </>
  )
}