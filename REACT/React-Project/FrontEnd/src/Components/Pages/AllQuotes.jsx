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
    <>
     <h1 className="card-header d-flex justify-content-center  "> AllQuotes</h1>
      <div className="container " >
        <div className="">
          {quotes.map((quote, index) =>{
            return (<Quotes  id={quote._id} key = {quote._id}text= {quote.text}  author= {quote.author}/>  )
          })}
        </div>
      </div> 
    </>
  )
}

export default AllQuotes;