import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <section className=' navbar-bg'>
 <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand" href="/">MoneyPay</a>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/about">Services</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/services">About</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
       
      
      </ul>
      <form className="d-flex">
       
        <button  className=" btn-style " id='btn' type="submit">SignUp</button>
        <button  className="btn-style  "  type="submit">SignIn</button>
      </form>
    </div>
  </div>
</nav>
</section>       
    </>
  )
}

export default Navbar