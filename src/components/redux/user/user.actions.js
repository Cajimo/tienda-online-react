//Actions are Literally are just functions that return objects
//The only thing is that each objetc is in the correct format
//that the action is expected to be.

export const setCurrentUser = (user) => ({
  type: "SET_CURRENT_USER",
  payload: user,
});
