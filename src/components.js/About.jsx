import React, { useState } from "react";
import bg from "../image/img1.webp";
import AboutData from "../API/AboutData.js";

const About = () => {
  const [about, setAbout] = useState(AboutData);
  return ( 
    <>
      <section className="common-section our-services">
        <div className="container mb-5 ">
          <div className="row">
            <div  style={{marginTop:"0px"  , matginBottom:"0px"}} className="col-12 col-lg-5 text-center our-service-leftside-img">
              <img style={{marginBottom:"250px"}} className="img-fluid" src={bg} alt="" />
            </div>

            {/* 2nd side wala div  */}
            <div className="col-12 col-lg-5 text-center our-service-leftside-img">
              <h3 className="mini-title">
                --AVAILABLE @ GOOGLE AND IOS APP STORE ONLY
              </h3>
              <h1 style={{marginRight:"200px"}} className="main-heading">How to use the App</h1>

              {AboutData.map((currElem) => {
                const { id, title, info } = currElem;
                return (
                  <>
                    <div className="row our-services-info" key={id}>
                      <div className="col-1 our-services-num">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              <br />
              <button style={{marginRight:"100px"}} className="btn-style btn-style-border">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* // 2nd part of about section  */}

      <section className="common-section our-services">
        <div className="container mb-5 ">
          <div className="row">
           

            {/* 2nd side wala div  */}
            <div style={{marginBottom:"200px"}} className="col-12 col-lg-5 text-center our-service-rightside-img d-flex justify-content-center align-items-start flex-column">
              <h3 className="mini-title ">
               SUPPORT IN ANY LANGUAGE
              </h3>
              <h1 className="main-heading">World class support is <br /> avilable in 24/7 </h1>

              {AboutData.map((currElem) => {
                const { id, title, info } = currElem;
                return (
                  <>
                    <div className="row our-services-info" key={id}>
                      <div className="col-1 our-services-num">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              <br />
              <button style={{marginLeft:"200px"}} className="btn-style btn-style-border">Learn More</button>
            
            </div>
            <div className="col-12 col-lg-5 text-center our-service-rightside-img">
              <img style={{marginBottom:"250px"}} className="img-fluid" src={bg} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
