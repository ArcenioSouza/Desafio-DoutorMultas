import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import Navbar from "../../components/navbar/Navbar";
import ImageTitle from "../../components/title-with-image/ImageTitle";
import ManufacturersList from "../../components/manufacturers-list/ManufacturersList";
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
         <Navbar src='https://doutormultas.com.br/wp-content/uploads/2018/02/doutor-multas-logotipo.png' />
         <ImageTitle 
            img={GustavoFonseca} 
            titleLineOne={"Pesquise aqui o"}
            titleLineTwo={"seu veículo"}/>
         <ManufacturersList carros={carros} motos={motos} caminhoes={caminhoes}/>
      </>
   );
};

export default Home;
