import React from 'react'

function Counter() {

    const [count, setCount] = React.useState(0);

    function handleClick(){
        setCount(count + 1)
    }
  return (
    <div>
        <button onClick={handleClick}>Counter = {count}</button>
    </div>
  )
}

export default Counter