import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Quotes from '../Quotes/Quotes';

function AllQuotes() {
  let [quotes, setQuotes]= useState([]);

  useEffect(function(){
    async function getQuotes(){
     const res = await axios.get('http://localhost:3000/allquotes ');
      // console.log(res.data.allquotes, 'api call success');
      setQuotes(res.data.allquotes);
    }
    getQuotes();
  },[]);

  return (
    <div>
      <h1>AllQuotes</h1>
      <ul>
        {quotes.map((quote, index) =>{
          return (<Quotes  id={quote._id} key = {quote._id}text= {quote.text}  author= {quote.author}/>  )
        })}
      </ul>
      
    </div>
  )
}

export default AllQuotes;