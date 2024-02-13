import React, { useState } from 'react'

function User () {

   let [time, setTask] = useState("wake up early morning");

  function handleClick(){
    setTask(Math.floor(Math.random()*10));
  }

  
  return (
    <div>

      <ToDos title="You are my  TOdays task"/>
      <button onClick={handleClick}>Click on me</button>
      <ToDos title= {time}/>
      <ToDos title="Take breakfast on time"/>
      <ToDos title="Study 2 hous daily to upskills yourself"/>
      <ToDos title="Get ready for office"/>
    </div>
  )
  }

function ToDos(props) {
  return (
    <div>Task : {props.title}</div>
  )
}
 
export default User