import styled, { css } from "styled-components";

const MarkContainer = styled.div`
  margin-left: 10px;
  table {
    border-collapse : collapse;
  }
`;

const TabelItem = styled.td`
  padding: 0;
  border: 1px groove;
  width: 60px;
  height: 60px;
  text-align: center;
  cursor: pointer;
  &:hover {
    color: lightgray;
  }
`;

const Reset = styled(TabelItem)`
  background: #2F4F4F;
  color: #FFFACD;
`;

function MarkBar({ setValue, setFormerValue, setLaterValue ,setOperator, setOutput }) {
    const onReset = () => {
        setValue(0);
        setFormerValue(0);
        setLaterValue(0);
        setOperator('');
        setOutput(true);
    }
  return (
    <MarkContainer>
      <table>
        <tr>
          <TabelItem 
            onClick={ (e) => setOperator(e.target.innerHTML)}>+</TabelItem>
        </tr>
        <tr>
          <TabelItem 
            onClick={ (e) => setOperator(e.target.innerHTML)}>-</TabelItem>
        </tr>
        <tr>
          <TabelItem
            onClick={ (e) => setOperator(e.target.innerHTML)}>/</TabelItem>
        </tr>
        <tr>
          <TabelItem 
            onClick={ (e) => setOperator(e.target.innerHTML)}>*</TabelItem>
        </tr>
        <tr>
          <Reset onClick={onReset}>AC</Reset>
        </tr>
      </table>
    </MarkContainer>
  );
}

export default MarkBar;
