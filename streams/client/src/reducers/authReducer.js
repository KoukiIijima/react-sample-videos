const INITIAL_STATE = {
  isSignedIn: null,
  userId: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SIGN_IN":
      console.log("SIGN In", action.payload);
      return { ...state, isSignedIn: true, userId: action.payload };
    case "SIGN_OUT":
      console.log("SIGN OUT", action.payload);
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};
