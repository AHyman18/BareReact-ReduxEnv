//combine reducers into a single object
import { combineReducers } from 'redux';

// combineReducer() is a method that grabs all reducers and combines them into a single object. Ideally sorted by the key:reducer  relationship where the key is the place in state where the returned value of each reducer can be accessed. Why? To manage slices of state

const rootReducer = combineReducers({
  // stateName : reducer
});

export default rootReducer;
