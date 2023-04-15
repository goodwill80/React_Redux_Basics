// Depending on how many reducers Here is where all the actions of reducers are held

// FROM Account Reducer
const depositMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: 'DEPOSIT',
      payload: amount,
    });
  };
};

const withdrawMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: 'WITHDRAW',
      payload: amount,
    });
  };
};

// FROM Loan Reducer
const borrowMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: 'BORROW',
      payload: amount,
    });
  };
};

const payLoan = (amount) => {
  return (dispatch) => {
    dispatch({
      type: 'PAYMENT',
      payload: amount,
    });
  };
};

// Export all functions
const actionCreators = { depositMoney, withdrawMoney, borrowMoney, payLoan };
export default actionCreators;
