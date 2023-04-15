// Combined all of our reducers
import { combineReducers } from 'redux';

// Import reducers
import AccountReducer from './AccountReducer';
import LoanReducer from './LoanReducer';

//Function that takes in an object comprising all our reducers
const reducers = combineReducers({
  account: AccountReducer,
  loan: LoanReducer,
});

export default reducers;
