import React ,{useState}  from 'react';
const FBCState =()=>{
    const[value, setValue]=useState("MRU");
  let changeName=()=>{
    setValue("MALLA REDDY UNIVERSITY");
  }
  return(
    <div>
        FBCState
    <h1>
        {value}
    </h1>
    <button onClick={changeName}>Change State</button>
    </div>
  )
}
export default FBCState