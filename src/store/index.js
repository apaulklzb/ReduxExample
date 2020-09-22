import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import customerMiddleware from '../middleware/customerMiddleware.js'

// The format of the state object follows the naming convention of the reducers.
// So - the "Customer" reducer can't write to the "Questions" section of the state object.
// However, the middleware can see all of the state data, and can take action as is appropriate.
// And, every reducer get's a chance to act on every action.
const initialState = { 
                     };

const store = createStore(  rootReducer
                          , initialState
                          , applyMiddleware(customerMiddleware)
                         ); 

export default store
