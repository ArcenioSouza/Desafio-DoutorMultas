import React, { useEffect, useState } from "react";
import { api } from "../../../services/api";
import Accordion from "./acordion/Accordion";
import * as Styled from "./StyledSectionListas"

const SectionListas = () => {
   const [carros, setCarros] = useState([])
   const [motos, setMotos] = useState([])
   const [caminhoes, setCaminhoes] = useState([])

   useEffect(() => {
      api.get('/carros/marcas').then(response => setCarros(response.data))
      api.get('/motos/marcas').then(response => setMotos(response.data))
      api.get('/caminhoes/marcas').then(response => setCaminhoes(response.data))
   }, [])

   return (
      <Styled.Container>
         { carros === undefined ?
            <div>Aguarde um momento</div>
            :
            <Accordion 
               carros={carros}
               motos={motos}
               caminhoes={caminhoes}
            />
         }         
      </Styled.Container>
   );
};

export default SectionListas;
