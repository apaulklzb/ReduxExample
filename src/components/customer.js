import React from 'react';
import PropTypes from 'prop-types';

// Define the properties expected by this component.
Customer.propTypes = {
      firstname: PropTypes.string
    , lastname: PropTypes.string
    , setFirstname: PropTypes.func
    , setLastname: PropTypes.func
};

function Customer(props) {

    return(     

        <form>

            <fieldset>
                <legend>Customer Component:</legend>
                    <label>First name: </label>
                    <input type="text"
                           value = { props.firstname }
                           onChange={(e) => { props.setFirstname(e.target.value) }} 
                    ></input>

                    <br />

                    <label>Last name: </label>
                    <input type="text"
                           value = { props.lastname }
                           onChange={(e) => { props.setLastname(e.target.value) }} 
                    ></input>

            </fieldset>

        </form>

    );
}

export default Customer;