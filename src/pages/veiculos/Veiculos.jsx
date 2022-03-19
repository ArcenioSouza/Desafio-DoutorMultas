import ListaVeiculos from '../../components/body/list-group/ListaVeiculos';
import Title from '../../components/body/title/Title';
import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import Header from "../../components/header/Header";

const Veiculos = () => {

   const [veiculos, setVeiculos] = useState([]);

   useEffect(() => {
      api.get("/carros/marcas/59/modelos").then((response) => {
         const veiculos = response.data.modelos;
         const veiculosOrdemInversa = veiculos.reverse()
         setVeiculos(veiculosOrdemInversa);
      })
   }, []);

  return (
    <>
      <Header />
      <Title />
      <ListaVeiculos veiculos={veiculos}/>
    </>
  )
}

export default Veiculos