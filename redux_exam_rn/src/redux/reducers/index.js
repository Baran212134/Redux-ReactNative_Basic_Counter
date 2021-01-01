
import counterReducer from './counterReducer';
import {combineReducers} from 'redux';

const reducers = combineReducers({
  counterReducer,
});
export default reducers;