
export function setFirstnameAction(firstname) {

  console.log("Raising set firstname action");

  return {
    type: "setFirstname",
    payload: { firstname: firstname }
  }

}

export function setLastnameAction(lastname) {

    console.log("Raising set lastname action");
  
    return {
      type: "setLastname",
      payload: { lastname: lastname }
    }
  
  }
  