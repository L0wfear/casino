import React, { useEffect, useState } from 'react';
import styled from "styled-components";

const STimer = styled.div`
    position: absolute;
    top: 50%;
    left: 57%;
    transform: translate(50%, -50%);
    height: 50px;
    width: 150px;
    display: grid;
    grid-template-columns: 5fr 1fr 5fr;
    column-gap: 3px;
    position: relative;
`
const STimerBlock = styled.div`
    height: 100%;
    width: 100%;
    background-color: black;
    border-radius: 2px;
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

const STimerBlockNumber = styled.div`
    height: 100%; 
    width: 100%;
    font: normal 700 45px / 45px 'Pt Sans';
    color: white;
    display: grid;
    justify-content: center;
    align-content: center;
    position: relative;
    &:before {
        content: '';
        position: absolute;
        height: 50%;
        width: 100%;
        background-color: black;
        opacity: 0.5;
    }
`

const SDoubleDotes = styled.div`
    color: rgba(0, 0, 0, 0.3);
    font: normal 700 45px / 45px 'Pt Sans';
`;
const Timer = () => {

    const [minutes, setMinutes] = useState(0);
    const [deciMinutes, setDeciMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [deciSeconds, setDeciSeconds] = useState(0);
    
    useEffect(() => {
        let random = Math.round(Math.random() * 200);

        const intervalId = setInterval(() => {
            if(random > 0) {
                random -= 1;
                let restMinutes = Math.floor(random / 60);
                let deciMinutes = Math.floor(restMinutes / 10);
                let minutes = restMinutes - deciMinutes * 10;
                let restSeconds = random % 60;
                let deciSeconds = Math.floor(restSeconds / 10);
                let seconds = restSeconds - deciSeconds * 10;
                setMinutes(minutes);
                setSeconds(seconds);
                setDeciMinutes(deciMinutes);
                setDeciSeconds(deciSeconds);
            }
        }, 1000)

        return () => clearInterval(intervalId);
    }, 
    []);

    return (
        <STimer>
            <STimerBlock>
                <STimerBlockNumber>
                    {deciMinutes}
                </STimerBlockNumber>
                <STimerBlockNumber>
                    {minutes}
                </STimerBlockNumber>
            </STimerBlock>
            <SDoubleDotes>:</SDoubleDotes>
            <STimerBlock>
                <STimerBlockNumber>
                    {deciSeconds}
                </STimerBlockNumber>
                <STimerBlockNumber>
                    {seconds}
                </STimerBlockNumber>
            </STimerBlock>
        </STimer>
    )
}

export default Timer;