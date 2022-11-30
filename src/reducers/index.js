import { combineReducers } from 'redux';
import { showAirplanes } from './airplanes';

const rootReducer = combineReducers({
  airplane: showAirplanes,
});

export default rootReducer;
