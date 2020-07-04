export const addCustomer = (payload) => {
  return {
    type: "ADD_CUSTOMER",
    payload,
  };
};
export const updateCustomer = (payload) => {
  return {
    type: "UPDATE_CUSTOMER",
    payload: payload,
  };
};
  