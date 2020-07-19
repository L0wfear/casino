import { createPath } from "../utils/utils";

export type DefaultStateType = {
    time: number
    top: number
    showStatic: boolean
    transition: number
}
export type TimerStateType = {
    deciMinutes: DefaultStateType,
    minutes: DefaultStateType,
    deciSeconds: DefaultStateType,
    seconds: DefaultStateType,
    time: number
}

export const defaultState: DefaultStateType = {
    time: 0,
    top: 0,
    showStatic: true,
    transition: 0.3,
};

const initialState: TimerStateType = {
    deciMinutes: defaultState,
    minutes: defaultState,
    deciSeconds: defaultState,
    seconds: defaultState,
    time: 0
}

const TIMER = createPath('TIMER');
const DECI_MINUTES_CHANGE = TIMER`DECI_MINUTES_CHANGE`;
const MINUTES_CHANGE = TIMER`MINUTES_CHANGE`;
const DECI_SECONDS_CHANGE = TIMER`DECI_SECONDS_CHANGE`;
const SECONDS_CHANGE = TIMER`SECONDS_CHANGE`;
const TIME_CHANGE = TIMER`TIME_CHANGE`;

const timerReducer = (state = initialState, action: {type: string, payload: DefaultStateType | number}) => {
    switch (action.type) {
        case DECI_MINUTES_CHANGE: {
            return {
                ...state, deciMinutes: action.payload, 
            }
        }
        case MINUTES_CHANGE: {
            return {
                ...state, minutes: action.payload
            }
        }
        case DECI_SECONDS_CHANGE: {
            return {
                ...state, deciSeconds: action.payload
            }
        }
        case SECONDS_CHANGE: {
            return {
                ...state, seconds: action.payload
            }
        }
        case TIME_CHANGE: {
            return {
                ...state, time: action.payload
            }
        }
        default: {
            return {...state};
        }
    }
}

export const changeDeciMinutes = (payload: DefaultStateType) => ({type: DECI_MINUTES_CHANGE, payload});
export const changeMinutes = (payload: DefaultStateType) => ({type: MINUTES_CHANGE, payload});
export const changeDeciSeconds = (payload: DefaultStateType) => ({type: DECI_SECONDS_CHANGE, payload});
export const changeSeconds = (payload: DefaultStateType) => ({type: SECONDS_CHANGE, payload});
export const changeTime = (payload: number) => ({type: TIME_CHANGE, payload});

export type TimerActionsTypes = {
    changeDeciMinutes: typeof changeDeciMinutes
    changeMinutes: typeof changeMinutes
    changeDeciSeconds: typeof changeDeciSeconds
    changeSeconds: typeof changeSeconds
    changeTime: typeof changeTime
}

export default timerReducer;