const initialState = {
    loggedIn: false,
    value: ""
  };
  const reducer = (state = { ...initialState }, action) => {
    console.log(action.type,"action type");
    if ((action.type === "LOGOUT")) {
      return { loggedIn: false, field: action.payload };
    } else if ((action.type === "LOGIN")) {
      return { loggedIn: true, field: action.payload };
    }
    return state;
  };
  export default reducer;
  