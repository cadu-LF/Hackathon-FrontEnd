import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { changeBar } from '../services/api';
import { useOccurrences } from '../hooks/Occurrences'
import { filter } from '../services/api'

import { Header } from '../components/Header'

import { Title, BorderBox, Ball, TitleSmall, SmallMap } from '../ui'

export const Occorences = () => {

  const { occorences, loadOccurrences } = useOccurrences();
  const [filtered, setFiltered] = useState([])
  let { occorenceType } = useParams();
  let { catId } = useParams();

  useEffect(() => {
    loadOccurrences();
    console.log(occorences)
  }, [loadOccurrences])

  useEffect(async () => {
    console.log(filtered)
    setFiltered(await filter(occorences, catId))
    console.log(filtered)
  }, [])

  function isEmpty() {
    if (filtered.length == 0) {
      return (
        <Title>
          Não há ocorrências dessa categoria
        </Title>
      )
    }
  }

  return (
    <>
      <Header canGoBack={true} path='/categorias' canSave={false} />
      <Title className='category-occorences'>{changeBar(occorenceType)}</Title>

      <div>
        {
          isEmpty()
        }
        {filtered.map(occorence => {
          if (occorence.viewed) {
            return (
              <BorderBox to={`/categorias/${catId}/${occorenceType}/${occorence.occorenceNumber}`}>
                <SmallMap src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.4226499496335!2d-47.40930368545719!3d-20.529880962543356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b0a64a7ecf7d2d%3A0xa44298d71a67d587!2sR.%20Dr.%20Armando%20De%20Salles%20Oliveira%2C%201%20-%20Estacao%2C%20Franca%20-%20SP%2C%2014405-094!5e0!3m2!1spt-BR!2sbr!4v1626545709501!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy"></SmallMap>
                <TitleSmall className='location-small-title'>{occorence.local}</TitleSmall>
              </BorderBox>)
          }
          else {
            return (
              <BorderBox to={`/categorias/${catId}/${occorenceType}/${occorence.occorenceNumber}`}>
                <SmallMap src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.4226499496335!2d-47.40930368545719!3d-20.529880962543356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b0a64a7ecf7d2d%3A0xa44298d71a67d587!2sR.%20Dr.%20Armando%20De%20Salles%20Oliveira%2C%201%20-%20Estacao%2C%20Franca%20-%20SP%2C%2014405-094!5e0!3m2!1spt-BR!2sbr!4v1626545709501!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy"></SmallMap>
                <TitleSmall className='location-small-title'>{occorence.local}</TitleSmall>
                <Ball />
              </BorderBox>)

          }
        })}
      </div>
    </>
  )
}