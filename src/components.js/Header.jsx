import React from "react";
import  img1 from '../image/img2.jpg'
import  img2 from '../image/img5.jpg'
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Services from "./Services";

const Header = () => {
  return (
    <>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-item-start">
              <h1 className="display-2">
                Online Payment Mode <br /> easy for you
              </h1>
              <p className="main-hero-para">
              Online payments are payments that are initiated over the internet for goods or services purchased either online or offline.
               Common methods to facilitate this include: Bank Debits via online mandate (often referred to as Direct Debit - which is the
                terminology we'll use in this guide)
              </p>
              <h3>Get early acccess for you</h3>
              <div className="input-group mt-3" >
                  <input className="rounded-pill w-75 me-3 p-2 form-control-text " placeholder="Enter Youe Email" type="text" name="" id="" />
                  <div className="input-group-button">Get it now</div>
              </div>
            </div>
    
{/* main header right side wla  */}


      <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-item-center main-herosection-images ">
          <img className="img-fluid " src={img1} alt="" />
          <img className="img-fluid main-hero-img2" src={img2} alt="" />
      </div>

          </div>
        </section>
      </header>
      <Home/>
      <About/>
      <Services/>
      <Contact/>


{/*     
    <Navbar/>
    <Header/>
    <Home/>
    <About/>
    <Services/>
    <Contact/>
    <Footer/> */}
    </>
  );
};

export default Header;
