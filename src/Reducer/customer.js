import customerData from "../Data";

const customer = (state = customerData, action) => {
  switch (action.type) {
    case "ADD_CUSTOMER":
      return [...state, action.payload];
    case "UPDATE_CUSTOMER":
      let newState = [];
      for (var i = 0; i < state.length; i++) {
        if (action.payload.id === state[i].id) {
          newState.push(action.payload);
        } else {
          newState.push(state[i]);
        }
      }
      return newState;

    default:
      return state;
  }
};

export default customer;
