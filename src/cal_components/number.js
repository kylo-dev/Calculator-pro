import styled, { css } from "styled-components";

const NumberContainer = styled.div`
  table {
    border-collapse : collapse;
  }
`;
const TabelItem = styled.td`
  padding: 0px;
  border: 1px groove;
  width: 60px;
  height: 60px;
  text-align: center;
  margin: 0;
  cursor: pointer;
  &:hover {
    color: lightgray;
  }
`;

function NumberBtn({
  setValue,
  formerValue,
  setFormerValue,
  laterValue,
  setLaterValue,
  operator,
  setOutput
}) {
  const handleClick = (e) => {
    if (operator.length > 0) {
      const num = parseInt(e.target.innerHTML);
      setLaterValue((prev) => prev * 10 + num);
      console.log(laterValue);
    } else {
      const num = parseInt(e.target.innerHTML);
      setFormerValue((prev) => prev * 10 + num);
      console.log(formerValue);
      // setValue((prev) => prev * 10 + num);
    }
  };

  const resultClick = () => {
    if (operator.length > 0) {
      if (operator === "+") {
        setValue(formerValue + laterValue);
      }
      if (operator === "-") {
        setValue(formerValue - laterValue);
      }
      if (operator === "/") {
        setValue(formerValue / laterValue);
      }
      if (operator === "*") {
        setValue(formerValue * laterValue);
      }
      setOutput(true);
    } else {
      return null;
    }
  };

  return (
    <NumberContainer>
      <table>
        <tr>
          <TabelItem onClick={handleClick} value="1">1</TabelItem>
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
          <TabelItem onClick={resultClick}>=</TabelItem>
        </tr>
      </table>
    </NumberContainer>
  );
}

export default NumberBtn;
