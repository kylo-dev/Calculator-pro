import styled, { css } from "styled-components";

const NumberContainer = styled.div`
    table {
        
    }
`;
const TabelItem = styled.td`
    border: 1px solid;
    width: 50px;
    height: 50px;
    text-align: center;
    cursor: pointer;
    &:hover{
        color : lightgray;
    }
`;


function NumberBtn( {setValue} ) {
    const handleClick =  ( e ) => {
        const num = parseInt(e.target.innerHTML);
        setValue( prev => prev*10 + num);
    }
  return (
    <NumberContainer>
      <table>
        <tr>
          <TabelItem onClick={handleClick}>1</TabelItem>
          <TabelItem onClick={handleClick}>2</TabelItem>
          <TabelItem onClick={handleClick}>3</TabelItem>
        </tr>
        <tr>
          <TabelItem onClick={handleClick}>4</TabelItem>
          <TabelItem onClick={handleClick}>5</TabelItem>
          <TabelItem onClick={handleClick}>6</TabelItem>
        </tr>
        <tr>
          <TabelItem onClick={handleClick}>7</TabelItem>
          <TabelItem onClick={handleClick}>8</TabelItem>
          <TabelItem onClick={handleClick}>9</TabelItem>
        </tr>
        <tr>
          <TabelItem onClick={handleClick}>0</TabelItem>
          <TabelItem>.</TabelItem>
          <TabelItem>=</TabelItem>
        </tr>
      </table>
    </NumberContainer>
  );
}

export default NumberBtn;
