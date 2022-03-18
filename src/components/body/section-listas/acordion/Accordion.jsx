import React from "react";

const Accordion = ({ carros, motos, caminhoes }) => {
   return (
      <div className="accordion" id="accordionExample">
         <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
               <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
               >
                  Carros
               </button>
            </h2>
            <div
               id="collapseOne"
               className="accordion-collapse collapse show"
               aria-labelledby="headingOne"
               data-bs-parent="#accordionExample"
            >
               <div className="accordion-body">
                  <ul className="listaVeiculos">
                     {carros.map((carros, index) => {
                        return (
                           <li key={index} id={carros.codigo}>
                              {carros.nome}
                           </li>
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
                     {motos.map((motos, index) => {
                        return (
                           <li key={index} id={motos.codigo}>
                              {motos.nome}
                           </li>
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
                     {caminhoes.map((caminhoes, index) => {
                        return (
                           <li key={index} id={caminhoes.codigo}>
                              {caminhoes.nome}
                           </li>
                        );
                     })}
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Accordion;
