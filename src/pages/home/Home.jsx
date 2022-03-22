import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import Header from "../../components/header/Header";
import SectionImage from "../../components/body/section-image/SectionImage";
import SectionListas from "../../components/body/section-listas/SectionListas";
import GustavoFonseca from '../../assets/img/gustavoFonseca.png'

const Home = () => {
   const [carros, setCarros] = useState([]);
   const [motos, setMotos] = useState([]);
   const [caminhoes, setCaminhoes] = useState([]);

   useEffect(() => {
      api.get("/carros/marcas").then((response) => setCarros(response.data));
      api.get("/motos/marcas").then((response) => setMotos(response.data));
      api.get("/caminhoes/marcas").then((response) =>
         setCaminhoes(response.data)
      );
   }, []);

   return (
      <>
         <Header />
         <SectionImage 
            img={GustavoFonseca} 
            titleLineOne={"Pesquise aqui o"}
            titleLineTwo={"seu veículo"}/>
         <SectionListas carros={carros} motos={motos} caminhoes={caminhoes}/>
      </>
   );
};

export default Home;
