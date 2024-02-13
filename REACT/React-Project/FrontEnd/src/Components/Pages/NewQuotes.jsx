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
    <div>
      <form  onSubmit={addQuoteHandler}>
        <div>
          <label htmlFor="naam">Author : </label>
          <input type="text" id="naam"  placeholder='Authors Name' ref={authorInputRef}/>
        </div>
        <div>
          <label htmlFor="textt"> Quote: </label>
          <textarea name="quote" id="textt"  placeholder="Your Quotes" cols="23" rows="5" ref={quoteInputRef}></textarea>
        </div>

        <button >Add Quote</button>
      </form>
    </div>
  )
}

export default NewQuotes