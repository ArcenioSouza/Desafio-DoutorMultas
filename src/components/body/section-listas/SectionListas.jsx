import React from "react";
import Accordion from "./acordion/Accordion";
import * as Styled from "./StyledSectionListas"

const SectionListas = () => {
   const lista = ["Prisma", "Corsa", "Honda Civic", "HB20"]
   return (
      <Styled.Container>
         <Accordion />
      </Styled.Container>
   );
};

export default SectionListas;
