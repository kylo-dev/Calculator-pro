import styled, { css } from "styled-components";
import { useState } from "react";

const Windowblock = styled.input`
  width: 280px;
  height: 50px;
  margin: 40px;
  text-align: end;
  font-size: 30px;
`;

function WindowBar({ value, operator, formerValue, laterValue, output }) {
  // if (operator < 0) {
  //     const numBar = {value};
  // } else {
  //     const numBar = operator;
  // }
  const numBar = operator.length <= 0 ? formerValue : 
                    ( (laterValue === 0 ) ? operator : laterValue);

  return (
    <>
      <Windowblock 
        type="text" 
        name="windowbar" 
        value={ output ? value : numBar} 
        disabled />
    </>
  );
}

export default WindowBar;
