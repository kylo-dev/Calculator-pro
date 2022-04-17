import styled, {css} from "styled-components";

const MarkContainer = styled.div`
    margin-left: 10px;
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

const Reset = styled(TabelItem)`
    background: yellow;
`;


function MarkBar({setValue}){
    return(
        <MarkContainer>
            <table>
                <tr>
                    <TabelItem>+</TabelItem>
                </tr>
                <tr>
                    <TabelItem>-</TabelItem>
                </tr>
                <tr>
                    <TabelItem>%</TabelItem>    
                </tr>
                <tr>
                    <TabelItem>*</TabelItem>
                </tr>
                <tr>
                    <Reset onClick={ () => setValue(0) }>AC</Reset>
                </tr>
            </table>
        </MarkContainer>
    );
}

export default MarkBar;