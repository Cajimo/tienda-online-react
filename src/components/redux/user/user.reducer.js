//Represents all of the states of the app.
//A reducer is a function with 2 props "last state/initial state" and an action.
//!Initializating "INITIAL_STATE"
const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STSATE, action) => {
  switch (
    action.type //Should be a string type.
  ) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload,
      };
    /**
     * To remember: Every single reducer gets every single action that ever gets fired
     * even if those actions are not related to this reducer so the reason why we want
     * a default return is becaus if none of the actions match inside ot the switch
     * statement about the ones that we care about then we just want to return the state.
     */
    default:
      return state;
  }
};
export default userReducer;
