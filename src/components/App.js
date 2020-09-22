import React, { useState } from 'react';
import Customer from './customerWrapper.js';

function App() {

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  return (

      <fieldset>
        <legend>Application</legend>

        <br />
        Your First Name is { firstname } <br /><br />
        Your Last Name is { lastname } <br /><br />

        <Customer firstName={ firstname } 
                  lastname={ lastname } 
                  setFirstname={ setFirstname } 
                  setLastname= { setLastname } 
        />
        
      </fieldset>
  );
}

export default App;
