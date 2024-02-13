import React, { useState } from 'react'
import Hello from './Hello'

function Logout() {

    // let username = "mohit"

    let [username ,setUsename]=useState("mohit");
    function handleCLick(){
       
        setUsename('anonymous');
    }
  return (
    <div>
        <h1>Logout page</h1>
    <Hello name={username} age ='21' fav="blue" />
    <button onClick={handleCLick}>Logout</button>
    </div>
  )
}

export default Logout