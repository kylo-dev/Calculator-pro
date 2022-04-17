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
    background: #D3D3D3;

    .btn {
        display: flex;
        justify-content : center;
    }
`;

function Main(){
    const [value, setValue] = useState(0);
    const [operator, setOperator] = useState('');
    const [formerValue, setFormerValue] = useState(0);
    const [laterValue, setLaterValue] = useState(0);
    const [output, setOutput] = useState(false);
    return(
        <Mainblock>
            <WindowBar 
                value={value} 
                operator={operator}
                formerValue={formerValue}
                laterValue={laterValue}
                output={output}
                />
            <div className="btn">
                <NumberBtn 
                    setValue={setValue}
                    formerValue={formerValue}
                    setFormerValue={setFormerValue}
                    laterValue={setLaterValue}
                    setLaterValue={setLaterValue}
                    operator={operator}
                    setOutput={setOutput}
                    />
                <MarkBar 
                    setValue={setValue}
                    setFormerValue={setFormerValue}
                    setLaterValue={setLaterValue}
                    setOperator={setOperator}
                    setOutput={setOutput}
                    />
            </div>
        </Mainblock>
    );
}

export default Main;