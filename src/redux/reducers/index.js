import { combineReducers } from 'redux';
import heroReducer from './heroReducer';


export default combineReducers({
    heroes: heroReducer,
});
