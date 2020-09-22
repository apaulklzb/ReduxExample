
// We can provide initial state here if we like.  
// Or - we can provide initial state when creating the data store.
const initialState = {
  firstname: 'First Name',
  lastname: 'Last Name'
}

const customer = (state = initialState, action) => {

    console.log("I am in reducer, current state:", state);

    // This is where we can accept the payload, and choose to update the
    // state for this reducer.
    // All reducers get a chance to executeand handle the payload.
    // However, these must be "pure" functions, meaning that they
    // cannot call out to external resources.  (They transorm only what they were given).

    var newState;

    switch (action.type) {
      case "setFirstname":

        newState = { ...state, firstname: action.payload.firstname };
        console.log('New state is ', newState);
        return newState;

      case "setLastname":
        newState = { ...state, lastname: action.payload.lastname };
        console.log('New state is ', newState);
        return newState;
          
      default:
        return state;
      }
    
}

export default customer
