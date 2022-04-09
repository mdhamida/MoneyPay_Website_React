import React from "react";
import img5 from "../image/img6.jfif";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <section className=" contactus-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className=" contact-leftside col-12 col-lg-5" >
                  <h1 className=" main-heading fw-bold">
                    Contact with Our <br /> sales teams
                  </h1>
                  <p className=" main-hero-para">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Eligendi inventore consequuntur dignissimos vel quasi velit
                    nam recusandae et modi. Molestias velit autem facere quas
                    expedita dicta ad at, fuga suscipit.
                  </p>
                  <figure>
                    <img style={{borderRadius:"20px" , height:"200px" , width:"300px"}} src={img5} alt="" className=" img-fluid" />
                  </figure>
                </div>

                {/* right side contact form  */}
                <div className="contact-rightside col-12 col-lg-7 ">
                  <form method=" POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-field ">
                        <input
                          type="text"
                          name=""
                          id=""
                          className=" form-control"
                          placeholder="First Name"
                        />
                      </div>

                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name=""
                          id=""
                          className=" form-control"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>



                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name=""
                          id=""
                          className=" form-control"
                          placeholder="Phone Number"
                        />
                      </div>

                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name=""
                          id=""
                          className=" form-control"
                          placeholder="Email Id"
                        />
                      </div>
                    </div>



                    <div className="row">
                      <div className="col-12 contact-input-field">
                        <input
                          type="text"
                          name=""
                          id=""
                          className=" form-control"
                          placeholder="Add current Address"
                        />
                      </div>
                    </div>


                    <div className="row">
                      <div className="col-12 contact-input-field">
                        <input
                          type="text"
                          name=""
                          id=""
                          className=" form-control"
                          placeholder="Add Parmanent Address"
                        />
                      </div>
                    </div>


                    <div className="row">
                      <div className="col-12 ">
                        <input
                          type="textarea"
                          name=""
                          id=""
                          className=" form-control"
                          placeholder="Enter your Message"
                        />
                      </div>
                    </div>



                    <div class="form-check form-checkbox-style">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                        // checked
                      />
                      <label class="form-check-label " className="main-hero-para">
                        agree for fill this form? yes or no
                      </label>
                    </div>

                    <button type="submit" className="btn btn-style w-100" >submit</button>




                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Contact;
