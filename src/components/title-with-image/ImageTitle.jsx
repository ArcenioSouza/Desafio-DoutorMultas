import React from 'react'
import * as Styled from './StyledImageTitle.jsx'

const ImageTitle = (props) => {
  return (
    <Styled.Container>
       <img src={props.img} alt="Foto do proprietario da empresa Doutor Multas apontando para a frase pesquise aqui o seu veículo" />
       <div className="pageTitle">
         <h3>{props.titleLineOne}</h3>
         <h2>{props.titleLineTwo}</h2>
       </div>
    </Styled.Container>
  )
}

export default ImageTitle;