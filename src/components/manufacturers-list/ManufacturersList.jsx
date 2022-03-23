import React from "react";
import Accordion from "./acordion/Accordion";
import * as Styled from "./StyledManufacturersList";


const ManufacturersList = ({carros, motos, caminhoes}) => {
   

   return (
      <Styled.Container>         
         <Accordion carros={carros} motos={motos} caminhoes={caminhoes} />         
      </Styled.Container>
   );
};

export default ManufacturersList;
