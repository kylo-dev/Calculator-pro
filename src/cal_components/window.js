import styled, {css} from "styled-components";
import { useState } from "react";

const Windowblock = styled.input`
    width: 280px;
    height: 50px;
    margin: 40px;
    text-align: end;
    font-size: 30px;
`;

function WindowBar( {value} ){

    return(
        <>
            <Windowblock 
                type="text"
                name="windowbar"
                value={value}
                disabled
            />
        </>
    );
}

export default WindowBar;