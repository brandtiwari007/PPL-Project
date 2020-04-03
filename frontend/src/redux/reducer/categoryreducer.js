const INITIAL_STATE = {
  categories: []
};

const categoryReducer = (state = INITIAL_STATE, action) => {
  if (action.type == "ADD_CATEGORY") {
    console.log("action", action.payload);
    return {
      ...state,
      categories: action.payload

      // ...state, categories:action.payload
    };
  } else {
    return state;
  }
};
export default categoryReducer;
