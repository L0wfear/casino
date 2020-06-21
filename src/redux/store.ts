
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import timerReducer, { TimerStateType } from './reducers/timerReducer/timerReducer';

const reducers = combineReducers({
    timerData: timerReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export type StateType = {
    timerData: TimerStateType
}



export default store; 