import React from 'react'

 function MultiHooks() {

    const [count, setCount] = React.useState(0);
    const [name, setName] = React.useState('');
    const [age, setAge] = React.useState(0);
    const [gender, setGender] = React.useState('');
    const [city, setCity] = React.useState('');
    const [state, setState] = React.useState('');
    const [country, setCountry] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [website, setWebsite] = React.useState('');
    const [company, setCompany] = React.useState('');
    
    function counter() {
        setCount(count + 1);
    }

    
  return (
    <>
        <div> <h1> you have clicked {count} times</h1></div>
        <button onClick={counter}>Counter</button>
        <div><span>Name</span><input type="text" onChange={(e) => setName(e.target.value)}/></div>
        <div><span>Age</span><input type="text" onChange={(e) => setAge(e.target.value)}/></div>
        <div>       
        <span>Gender</span> <input type="text" onChange={(e) => setGender(e.target.value)}/></div>
        <div><span>City</span><input type="text" onChange={(e) => setCity(e.target.value)}/> </div>
        <div>      
        <span>State</span> <input type="text" onChange={(e) => setState(e.target.value)}/>
        </div>
        <div><span>Countery</span><input type="text" onChange={(e)=>setCountry(e.target.value)} /></div>
        <div><span>Email</span> <input type="email" onChange={(e)=>setEmail(e.target.value)} /></div>
    
        <div> <p> your name is {name}</p></div>
        <div> <p> your age is {age}</p></div>
        <div> <p> your gender is {gender}</p></div>
        <div> <p> your city is {city}</p></div>
        <div> <p> your state is {state}</p></div>
        <div> <p> your country is {country}</p></div>
        <div> <p> your email is {email}</p></div>
    
    </>
  )
}

export default MultiHooks;
