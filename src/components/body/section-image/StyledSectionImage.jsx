import styled from "styled-components";

export const Container = styled.div`
   height: 400px;
   background-color: var(--backgroundColor);
   display: flex;
   align-items: flex-end;
   justify-content: flex-end;
   position: relative;

   .pageTitle{
      position: absolute;
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
   }

   h2{
      font-family: var(--fontWriting);
      font-size: 4rem;
      position: relative;
      bottom: 30px;
      left: 60px;
      color: var(--primaryColor);
   }

   h3{
      font-family: var(--fontSubtitle);
      font-size: 1.5rem;
   }
`;