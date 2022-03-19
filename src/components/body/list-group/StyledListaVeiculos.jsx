import styled from "styled-components";

export const Container = styled.div`
   width: 30%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin: 2%;

   .list-group{
      width: 100%;
      height: 400px;
      overflow-y: scroll;
      border: 1px solid var(--primaryColor);
   }

   h3{
      font-family: var(--fontSubtitle);
      font-size: 1.5rem;
   }

`;