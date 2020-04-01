import {login} from "./actionType";
export let loginf = payload => {
  return {
    type: login,
    payload: payload
  };
};
