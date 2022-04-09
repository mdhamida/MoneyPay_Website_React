import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-10 mx-auto ">
                    <div className="row">
                        <div className=" col-6 col-lg-3">
                            <h2>Company</h2>
                            <ul>
                                <li>
                                    <a href="/">Wipro</a>
                                </li>

                                <li>
                                    <a href="/">TCS</a>
                                </li>

                                <li>
                                    <a href="/">Solitare </a>
                                </li>

                                <li>
                                    <a href="/">netsmatz</a>
                                </li>
                            </ul>
                        </div>

                        <div className=" col-6 col-lg-3">
                            <h2>Support</h2>
                            <ul>
                                <li>
                                    <a href="/">k khan` </a>
                                </li>

                                <li>
                                    <a href="/">s khan</a>
                                </li>

                                <li>
                                    <a href="/">md hamid</a>
                                </li>

                                <li>
                                    <a href="/">sultan</a>
                                </li>
                            </ul>
                        </div>

                        <div className=" col-6 col-lg-3">
                            <h2>Services</h2>
                            <ul>
                                <li>
                                    <a href="/">web devlopement </a>
                                </li>

                                <li>
                                    <a href="/">app devlopement</a>
                                </li>

                                <li>
                                    <a href="/">React frontend</a>
                                </li>

                                <li>
                                    <a href="/">Node backend</a>
                                </li>
                            </ul>
                        </div>

                        <div className=" col-6 col-lg-3">
                            <h2>Follow us</h2>
                            <div className="row">
                                <div className="col-3 mx-auto">
                                  <a href="https://www.instagram.com/mdhamid370/">
                                  <i className=' fab fa-instagram fontawasome-style '></i>
                                  </a>  
                                </div>
                                <div className="col-3 mx-auto">
                                  <a href="https://www.facebook.com/mdhamid.ali.5836/">
                                  <i className=' fab fa-facebook fontawasome-style '></i>
                                  </a>  
                                </div>

                                <div className="col-3 mx-auto">
                                  <a href="https://www.linkedin.com/in/md-hamid-ali-b46474210/">
                                  <i className=' fab fa-linkedin fontawasome-style '></i>
                                  </a>  
                                </div>

                                <div className="col-3 mx-auto">
                                  <a href="https://www.youtube.com/channel/UCJJLwV3a3CCGIuDPR0466yg">
                                  <i className=' fab fa-youtube fontawasome-style '></i>
                                  </a>  
                                </div>
                            </div>  
                        </div>

                    </div>
                    <hr />
                    <div className=" mt-5">
                     <p className=' main-hero-para text-center'>copyright @ 2022 moneypay All right reserved</p>   
                    </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer