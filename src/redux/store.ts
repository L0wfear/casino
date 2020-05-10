
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

const defaultReducer = (state = {}, action: any) => {
    return state
}

const store = createStore(defaultReducer, applyMiddleware(thunkMiddleware));

export default store; 