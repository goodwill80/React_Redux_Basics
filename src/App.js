import './App.css';

// npm i redux react-redux OR
// npx create-react-app my-app --template redux

// Import the useSelector hook to access the reducer states
// Import the useDispatch hook to access the reducer actions
import { useSelector, useDispatch } from 'react-redux';
// Import bindActionCreators to bind all actions
import { bindActionCreators } from 'redux';
// Get all the actions
import actionCreators from './Store/ActionCreators';

function App() {
  // 1. Accessing states
  // useSelector takes in a callback function and return back the state
  const state = useSelector((state) => state);
  console.log(state); // return {account: 0, loan: 0} which is the initial state of the combined reducers

  // 2. Access and call actions
  const dispatch = useDispatch();

  // 3. Bind the actions
  const { depositMoney, withdrawMoney, borrowMoney, payLoan } =
    bindActionCreators(actionCreators, dispatch);

  return (
    <div className="App">
      <div>
        <h2>Account</h2>
        <h1>{state.account}</h1>
        <button onClick={() => depositMoney(1000)}>Deposit</button>
        <button onClick={() => withdrawMoney(200)}>Withdraw</button>
      </div>
      <div>
        <h2>Loan</h2>
        <h1>{state.loan}</h1>
        <button onClick={() => borrowMoney(1000)}>Borrow</button>
        <button onClick={() => payLoan(200)}>Pay</button>
      </div>
    </div>
  );
}

export default App;
