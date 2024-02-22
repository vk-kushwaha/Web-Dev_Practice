import React from 'react'
import { Link } from 'react-router-dom'

function MainNav() {
  return (

    <nav className="navbar navbar-expand-lg navbar" style={{backgroundColor:'lightgray'}}>
  <div className="container">
    <Link className="navbar-brand fw-bold" to="#"><i class="p-2 fa-regular fa-xl fa-envelope"></i>Quotes App</Link> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" to="/">Home</Link> 
        <Link className="nav-link" to="/allquotes">All Quotes</Link>    
        <Link  className="nav-link" to="/new"> New Quote</Link>
      </div>
    </div>
  </div>
</nav>
   
  )
}

export default MainNav