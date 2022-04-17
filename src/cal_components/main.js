import styled, {css} from 'styled-components';
import WindowBar from './window.js';
import NumberBtn from './number.js';
import MarkBar from './mark.js';
import { useState } from 'react';

const Mainblock = styled.div`
    border: 1px solid;
    width: 360px;
    height: 480px;
    margin: 0 auto;

    .btn {
        display: flex;
        justify-content : center;
    }
`;

function Main(){
    const [value, setValue] = useState(0);

    return(
        <Mainblock>
            <WindowBar value={value}/>
            <div className="btn">
                <NumberBtn setValue={setValue}/>
                <MarkBar setValue={setValue}/>
            </div>
        </Mainblock>
    );
}

export default Main;