const LoanReducer = (state = 0, action) => {
  switch (action.type) {
    case 'BORROW':
      return state + action.payload;
    case 'PAYMENT':
      return state - action.payload;
    default:
      return state;
  }
};

export default LoanReducer;
