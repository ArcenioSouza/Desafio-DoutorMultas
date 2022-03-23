import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin: 1%;
   text-align: center;

   .list-group{
      width: 80%;
      height: 400px;
      overflow-y: scroll;
      border: 1px solid var(--primaryColor);
      margin: 1%;
      display: flex;
      align-items: flex-start;
      justify-content: center;
   }

   h3{
      font-family: var(--fontSubtitle);
      font-size: 1.5rem;
   }
`;