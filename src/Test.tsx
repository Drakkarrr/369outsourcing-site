import React from "react";
import styled from "styled-components";

const Test = () => {
  return <StyledTest className="cusfont">Drakkar lorem ipsum dolor</StyledTest>;
};

export default Test;

const StyledTest = styled.div`
  @font-face {
    font-family: "RosesBolero";
    src: url("Roses Bolero.eot"); /* IE9 Compat Modes */
    src: url("Roses Bolero.eot?#iefix") format("embedded-opentype"),
      /* IE6-IE8 */ url("Roses Bolero.woff") format("woff"),
      /* Modern Browsers */ url("Roses Bolero.ttf") format("truetype"); /* Safari, Android, iOS */
    font-style: normal;
    font-weight: normal;
    text-rendering: optimizeLegibility;
  }

  font-size: 50px;
  color: #da1212;
  display: grid;
  place-items: center;
  margin-top: 2rem;
  /* font-family: "RosesBolero", Georgia; */
`;
