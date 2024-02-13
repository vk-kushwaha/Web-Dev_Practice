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
        <h2>{quote.text}</h2>
        <p>{quote.author}</p>
    </div>
  )
}

export default ShowQuotes