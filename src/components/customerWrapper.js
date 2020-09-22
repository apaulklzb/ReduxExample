import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {setFirstnameAction, setLastnameAction} from '../actions/customerActions.js';

import Customer from './customer.js';

function CustomerWrapper(props) {

    return(        

        <fieldset>
        <legend>Customer Wrapper:</legend>

            <Customer firstname={ props.firstname } 
                    lastname={ props.lastname }
                    setFirstname= { props.setFirstname }
                    setLastname= { props.setLastname }
            />

        </fieldset>
    );
}

// Here we will map the data store values to the props for this component.
const mapStateToProps = (state) => {

  console.log("I am mapping state to props", state);

  var props = { firstname: state.customer.firstname,
                lastname: state.customer.lastname
              };
  
  console.log("Mapped properties are ", props);
  
  return props;

}

// In this function, we will create references to functions for handling events
const mapDispatchToProps = dispatch => {
  return {
      setFirstname: (firstname) => { dispatch( setFirstnameAction(firstname) ) },
      setLastname: (lastname) =>   { dispatch( { type: 'setLastName', payload: lastname }  ) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps ) ( CustomerWrapper );







