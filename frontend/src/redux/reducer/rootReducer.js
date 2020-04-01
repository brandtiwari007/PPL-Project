import reducer from "./loggedinReducer"
import categoryreducer from "./categoryreducer"
import { combineReducers } from 'redux'
const rootReducer= combineReducers({
      reducer,
      categoryreducer

})
export default rootReducer;