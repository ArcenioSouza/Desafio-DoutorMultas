import React from "react";
import Accordion from "./acordion/Accordion";
import * as Styled from "./StyledSectionListas";


const SectionListas = ({carros, motos, caminhoes}) => {
   

   return (
      <Styled.Container>         
         <Accordion carros={carros} motos={motos} caminhoes={caminhoes} />         
      </Styled.Container>
   );
};

export default SectionListas;
