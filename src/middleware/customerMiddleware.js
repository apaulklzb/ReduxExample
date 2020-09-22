

const customerMiddleware = store => next => action => {

  console.log('I am in middleware ',  action )

  switch ( action.type )

  case: 'CreateCustomer' {

    store.dispatch( { type: 'CreatingCustomer', '' });

    axios.post( ... ).then( ( result => {
                                          store.dispatch( { type: 'CustomerCreated', payload: { customerid: result.customerid }})
                                        }
                            )
                      .error(   )
                           )
                           
    return next(action);                                
  }
  default: {
    return next(action);
  }

    
}

export default customerMiddleware;
  

