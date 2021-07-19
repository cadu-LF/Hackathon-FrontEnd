import React from 'react';

import { TextBody, Title } from '../ui'

import '../Assets/styles.css'

export const Page404 = () => {
  return(
    <div className="div-404">
      <Title className="tittle-404">Erro 404!</Title>
      <img 
        src='https://i.pinimg.com/736x/15/59/45/155945ba56eee7a95e7c464f434a91f1.jpg'
        className='img-404'
      />
      <TextBody>A página que tentou acessar não existe!</TextBody>
    </div>
  )
}