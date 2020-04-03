import Axios from "axios";

export const categoryAction = dispatch => {
  return () => {
    Axios.get("http://localhost:8969/getcats").then(response => {
      if (response.data) {
        // this.setState({
        //   categories: response.data
        // });
        console.log("action data hello", response.data);
        dispatch({ type: "ADD_CATEGORY", payload: response.data });
      }
    });
  };
};
