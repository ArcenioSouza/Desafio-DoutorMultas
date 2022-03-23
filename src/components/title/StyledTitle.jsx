import styled from "styled-components";

export const Container = styled.div`
   height: 200px;
   background-color: var(--backgroundColor);
   display: flex;
   align-items: center;
   justify-content: center;

   .pageTitle {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
   }

   h2 {
      font-family: var(--fontWriting);
      font-size: 4rem;
      margin-top: -20px;
      color: var(--primaryColor);
   }

   h3 {
      font-family: var(--fontSubtitle);
      font-size: 1.5rem;
   }

   @media (max-width: 850px) {
      h2 {
         font-size: 4rem;
      }
   }
`;
