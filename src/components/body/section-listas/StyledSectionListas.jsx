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
      width: 80%;
   }

   .accordion-button {
      background-color: var(--primaryColor);
      color: #fff;
      font-size: 1.2rem;
      font-weight: bold;
   }
`;