// Import from redux
import { legacy_createStore as createStore, applyMiddleware } from 'redux';

// Import thunk from redux thubk to perform async of action creators
import thunk from 'redux-thunk';

// Import the combined reducers stored in the function
import reducers from './Reducers';

// Create the store by setting arguments (reducers, defaultState {})
// This is wrapped around, within Provider, in <App/> index.js
export const store = createStore(reducers, {}, applyMiddleware(thunk));
