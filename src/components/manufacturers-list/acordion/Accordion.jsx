import React from "react";
import Loading from "../../loading/Loading";
import { Link } from "react-router-dom"

const Accordion = ({ carros, motos, caminhoes }) => {

   return (
      <>
         {carros.length === 0 ? (
            <Loading type={"Spin"} color={"#0000"} />
         ) : (
            <div className="accordion" id="accordionExample">
               <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                     <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                     >
                        Carros
                     </button>
                  </h2>
                  <div
                     id="collapseOne"
                     className="accordion-collapse collapse"
                     aria-labelledby="headingOne"
                     data-bs-parent="#accordionExample"
                  >
                     <div className="accordion-body">
                        <ul className="listaVeiculos">
                           {carros.map((carro, index) => {
                              return (
                                 <Link to={`/veiculos/carros/${carro.codigo}`}>
                                    <li key={index}>
                                       {carro.nome}
                                    </li>
                                 </Link>
                              );
                           })}
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                     <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                     >
                        Motos
                     </button>
                  </h2>
                  <div
                     id="collapseTwo"
                     className="accordion-collapse collapse"
                     aria-labelledby="headingTwo"
                     data-bs-parent="#accordionExample"
                  >
                     <div className="accordion-body">
                        <ul className="listaVeiculos">
                           {motos.map((moto, index) => {
                              return (
                                 <Link to={`/veiculos/motos/${moto.codigo}`}>
                                    <li key={index}>
                                       {moto.nome}
                                    </li>
                                 </Link>
                              );
                           })}
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                     <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                     >
                        Caminhões
                     </button>
                  </h2>
                  <div
                     id="collapseThree"
                     className="accordion-collapse collapse"
                     aria-labelledby="headingThree"
                     data-bs-parent="#accordionExample"
                  >
                     <div className="accordion-body">
                        <ul className="listaVeiculos">
                           {caminhoes.map((caminhao, index) => {
                              return (
                                 <Link to={`/veiculos/caminhoes/${caminhao.codigo}`}>
                                    <li key={index}>
                                       {caminhao.nome}
                                    </li>
                                 </Link>
                              );
                           })}
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </>
   );
};

export default Accordion;
