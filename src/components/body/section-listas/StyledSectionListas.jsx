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

   .listaVeiculos{
      list-style: none;
      width: 100%;
      height: 300px;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
   }

   .listaVeiculos li:hover{
      cursor: pointer;
      text-decoration: underline;
   }
`;