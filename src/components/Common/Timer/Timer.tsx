import React, { useEffect, useCallback, } from 'react';
import styled from "styled-components";
import { 
    changeDeciMinutes, changeMinutes, changeDeciSeconds, changeSeconds, changeTime, TimerStateType, TimerActionsTypes 
} from '../../../redux/reducers/timerReducer/timerReducer';
import { connect } from 'react-redux';
import { StateType } from '../../../redux/store';

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
    overflow: hidden;
`;

const STimerBlockNumber = styled.div<{ top?: number, transition?: number }>`
    height: 50px; 
    width: 100%;
    font: normal 700 45px / 45px 'Pt Sans';
    color: white;
    display: grid;
    justify-content: center;
    align-content: center;
    position: relative;
    top: ${props => props.top || 0}%;
    transition: ${props => props.transition || 0}s;
    &:before {
        content: '';
        position: absolute;
        height: 27px;
        width: 100%;
        background-color: black;
        opacity: 0.5;
    }
`;

const SDoubleDotes = styled.div`
    color: rgba(0, 0, 0, 0.3);
    font: normal 700 45px / 45px 'Pt Sans';
`;

type TimerProps = TimerStateType & TimerActionsTypes;

const Timer: React.FC<TimerProps> = (props) => {

    const {
        deciMinutes,
        minutes,
        deciSeconds,
        seconds,
        time,
        changeDeciMinutes, 
        changeMinutes, 
        changeDeciSeconds, 
        changeSeconds, 
        changeTime,
    } = props;

    const setTimerTime = useCallback((time, setter) => {
            setter({time, showStatic: false, top: 50, transition: 0.3});
            setTimeout(() => {
                setter({time, showStatic: true, top: -50, transition: 0})
            }, 500)
        },
    []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if(time === 0) {
                changeTime(Math.round(Math.random() * 200))
            }
            if (time > 0) {
                changeTime(time - 1)
                let restMinutes = Math.floor(time / 60);
                let nextDeciMinutes = Math.floor(restMinutes / 10);
                let nextMinutes = restMinutes - nextDeciMinutes * 10;
                let restSeconds = time % 60;
                let nextDeciSeconds = Math.floor(restSeconds / 10);
                let nextSeconds = restSeconds - nextDeciSeconds * 10;
    
                if (seconds.time !== nextSeconds) {
                    setTimerTime(nextSeconds, changeSeconds)
                }
                if (minutes.time !== nextMinutes) {
                    setTimerTime(nextMinutes, changeMinutes)
                }
                if (deciMinutes.time !== nextDeciMinutes) {
                    setTimerTime(nextDeciMinutes, changeDeciMinutes)
                }
                if (deciSeconds.time !== nextDeciSeconds) {
                    setTimerTime(nextDeciSeconds, changeDeciSeconds)
                }

            } 
        }, 1000)

        return () => clearInterval(intervalId);
    }, 
        [
         setTimerTime, 
         time, 
         seconds, 
         minutes, 
         deciSeconds,
         deciMinutes, 
         changeDeciMinutes, 
         changeMinutes, 
         changeDeciSeconds, 
         changeSeconds, 
         changeTime,
        ]);

    return (
        <STimer>
            <STimerBlock>
               {[deciMinutes, minutes].map(el => (
                   el.showStatic
                    ? <STimerBlockNumber>
                        {el.time}
                    </STimerBlockNumber>
                    : <STimerBlockNumber top={el.top || -50} transition={el.transition}>
                        <STimerBlockNumber>{el.time}</STimerBlockNumber>
                        <STimerBlockNumber>{el.time === 9 ? 0 : el.time + 1}</STimerBlockNumber>
                    </STimerBlockNumber>
               ))}
            </STimerBlock>
            <SDoubleDotes>:</SDoubleDotes>
            <STimerBlock>
            {[deciSeconds, seconds].map(el => (
                   el.showStatic
                    ? <STimerBlockNumber>
                        {el.time}
                    </STimerBlockNumber>
                    : <STimerBlockNumber top={el.top || -50} transition={el.transition}>
                        <STimerBlockNumber>{el.time}</STimerBlockNumber>
                        <STimerBlockNumber>{el.time === 9 ? 0 : el.time + 1}</STimerBlockNumber>
                    </STimerBlockNumber>
               ))}
            </STimerBlock>
        </STimer>
    )
}

const mapStateToProps = (state: StateType) => {
    return ({
        deciMinutes: state.timerData.deciMinutes,
        minutes: state.timerData.minutes,
        deciSeconds: state.timerData.deciSeconds,
        seconds: state.timerData.seconds,
        time: state.timerData.time,
    })
}

export default connect(mapStateToProps, {changeDeciMinutes, changeMinutes, changeDeciSeconds, changeSeconds, changeTime})(Timer);