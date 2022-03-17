import React from 'react'
import * as Styled from './StyledSectionImage.jsx'
import GustavoFonseca from '../../../assets/img/gustavoFonseca.png'

const SectionImage = () => {
  return (
    <Styled.Container>
       <img src={GustavoFonseca} alt="Foto do proprietario da empresa Doutor Multas apontando para a frase pesquise aqui o seu veículo" />
       <div className="pageTitle">
         <h3>Pesquise aqui o</h3>
         <h2>seu veículo</h2>
       </div>
    </Styled.Container>
  )
}

export default SectionImage;