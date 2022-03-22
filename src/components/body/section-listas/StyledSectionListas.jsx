import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   height: 400px;
   padding-top: 30px;
   display: flex;
   align-items: center;
   justify-content: flex-start;
   flex-direction: column;

   .accordion {
      width: 90%;
   }

   .accordion-button {
      background-color: var(--primaryColor);
      color: #fff;
      font-size: 1.2rem;
      font-weight: bold;
   }

   .listaVeiculos {
      list-style: none;
      width: 100%;
      height: 300px;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
   }

   @media (max-width: 1000px) {
      .listaVeiculos {
         height: 800px;
      }
   }

   @media (max-width: 600px) {
      .listaVeiculos {
         height: 1200px;
      }
   }

   @media (max-width: 470px) {
      .listaVeiculos {
         height: auto;
      }
   }
`;
