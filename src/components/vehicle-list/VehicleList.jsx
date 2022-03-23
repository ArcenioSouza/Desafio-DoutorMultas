import React from "react";
import { Link } from "react-router-dom";
import Loading from "../loading/Loading";
import * as Styled from './StyledVehicleList'

const VehicleList = ({veiculos}) => {

   return (
      <Styled.Container>
         <h3>Veiculos do Fabricante</h3>
         <div class="list-group">
            {veiculos.length === 0 ?
               <Loading />
            :
               veiculos.map((veiculo, index) => {
                  return (
                     <button
                        type="button"
                        class="list-group-item list-group-item-action"
                        aria-current="true"
                        id={veiculo.codigo}
                     >
                        {veiculo.nome}
                     </button>
                  )
               })
            }            
         </div>
         <Link to="/"><button type="button" class="btn btn-primary">Voltar</button></Link>
      </Styled.Container>
   );
};

export default VehicleList;
