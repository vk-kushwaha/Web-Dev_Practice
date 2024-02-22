import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function ShowQuotes() {
    let [quote, setQuotes] = useState({author:"" , text:""})
    let params = useParams()
    useEffect(()=>{
        async function fetchQuotes(){
            let res =await axios.get(`http://localhost:3000/quote/${params.id}`);
            let {author, text} = res.data.quote;
            // console.log(res.data.quote);
            setQuotes({author, text})
        }

        fetchQuotes();
    },[]);
  return (
    <div>
      <div className="container  mt-4 p-4 col-6 border">
        <div className="card-body d-flex justify-content-center">
        <h2>{quote.text}</h2>
        </div>
        <div className="card-body d-flex justify-content-end">
        <h3>{quote.author}</h3>
        </div>
      </div>
    </div>
  )
}

export default ShowQuotes