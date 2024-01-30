import React from 'react'
import Hello from './Componants/Hello';
import Something from './Componants/Something';

let a=100;
let b=200;

function App() {
  return (
    <div>
      <Something/>
      {/* <Hello/> */}
      <p>Hello from App</p>  
      <div>Print value from a = {a}</div>
    </div>
  )
}

export default App