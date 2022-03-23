import VehicleList from '../../components/vehicle-list/VehicleList';
import Title from '../../components/title/Title';
import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import Navbar from "../../components/navbar/Navbar";
import { useParams } from 'react-router';

const Vehicles = () => {

   const [veiculos, setVeiculos] = useState([]);

   const {tipo, id} = useParams()

   useEffect(() => {
      api.get(`/${tipo}/marcas/${id}/modelos`).then((response) => {
         const veiculos = response.data.modelos;
         const veiculosOrdemInversa = veiculos.reverse()
         setVeiculos(veiculosOrdemInversa);
      })
   }, []);

  return (
    <>
      <Navbar src='https://doutormultas.com.br/wp-content/uploads/2018/02/doutor-multas-logotipo.png'/>
      <Title 
      titleLineOne={"Encontre aqui, tudo sobre"}
      titleLineTwo={"o seu veículo"}/>
      <VehicleList veiculos={veiculos}/>
    </>
  )
}

export default Vehicles;