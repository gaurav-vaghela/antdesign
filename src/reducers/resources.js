import { SHOW_AIRPLANES } from '../actions';

const initialState = {
  list: [],
};

export function showResources(state = initialState, action) {
  switch (action.type) {
    case SHOW_AIRPLANES:
      return Object.assign({}, state, { list: action.payload });
    default:
      return state;
  }
}
