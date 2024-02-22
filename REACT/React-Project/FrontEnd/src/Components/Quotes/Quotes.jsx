import React from 'react'
import { useNavigate } from 'react-router-dom'

function Quotes(props) {
    let navigate = useNavigate();
    function showQuoteHandler(id) {
        navigate(`/quote/${id}`);
    } 
  return (
    <div className=" card m-4 col-10">
   
    <div className="card-body ">
      <h3 className="card-text d-flex justify-content-center">{props.text}</h3>
      <p className="card-title fw-bold d-flex justify-content-end">Author:{props.author}</p>
      <button className='btn btn-warning ' onClick={()=>showQuoteHandler(props.id)}>View Full page</button>  
    </div>
    
  </div>

       

  )
}

export default Quotes
