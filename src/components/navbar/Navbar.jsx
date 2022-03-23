import React from 'react';
import * as Styled from "./StyledNavbar.jsx"

const Navbar = (props) => {
  return (
   <Styled.Container>
      <img src={props.src} alt="Logotipo da empresa, está escrito doutor multas em letras minúsculas e na cor azul claro" />
   </Styled.Container>
  )
}

export default Navbar