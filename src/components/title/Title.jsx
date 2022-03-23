import React from "react";
import * as Styled from "./StyledTitle.jsx";

const Title = (props) => {
   return (
      <Styled.Container>
         <div className="pageTitle">
            <h3>{props.titleLineOne}</h3>
            <h2>{props.titleLineTwo}</h2>
         </div>
      </Styled.Container>
   );
};

export default Title;
