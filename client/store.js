//create the store
import { createStore } from 'redux';
import rootReducer from './reducers/index.js';

//compose with Dev Tools, Thunk Middleware
const store = createStore(rootReducer);

export default store;
