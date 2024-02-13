import React from 'react'
import { useNavigate } from 'react-router-dom'

function Quotes(props) {
    let navigate = useNavigate();
    function showQuoteHandler(id) {
        navigate(`/quote/${id}`);
    } 
  return (
    <li>
        <span>
        <h1> {props.text}</h1>
        <h3>Author:{props.author}</h3>
        </span>
        <button onClick={()=>showQuoteHandler(props.id)}>View Full page</button>   
    </li>
  )
}

export default Quotes