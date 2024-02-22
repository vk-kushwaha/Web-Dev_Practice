import React, { useRef } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function NewQuotes() {
  let authorInputRef = useRef();
  let quoteInputRef = useRef();
  let navigate = useNavigate();

  async function addQuoteHandler(e){
    e.preventDefault()
    let author = authorInputRef.current.value;
    let text = quoteInputRef.current.value;
    try{
      let res = await axios.post( 'http://localhost:3000/addquotes',{author,text});
      navigate('/');
      }
    catch(e){
      console.log("Error in quote creation request");
      }
  }
  return (
    <div  >
      <form className='container' onSubmit={addQuoteHandler}>

        <div className="mb-3 p-3 col-6 row">
            <label htmlFor="exampleFormControlInput1" className="form-label">Author</label>
            <div className="col-sm-10">
               <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Author's Name" ref={authorInputRef}/>
            </div>
        </div>
        <div className="mb-3 p-3 col-6 row" >
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Quote </label>
            <div className="col-sm-10">
              <textarea className="form-control" id="exampleFormControlTextarea1" cols="23" rows="3" ref={quoteInputRef}></textarea>
            </div>
        </div>
        <span className='p-3'>
          <button  className='btn btn-success '>Add Quote</button>
          </span>
      </form>
    </div>
  )
}

export default NewQuotes