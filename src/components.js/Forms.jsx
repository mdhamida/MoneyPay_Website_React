import React from "react";

const Forms = () => {
  return (
    <>
      <center>
        <div className="container ml-10 form-container">
          <div className="row">
            <form>
              <div class="mb-3">
                <label for="" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id=""
                  placeholder="enter your name"
                />
              </div>

              <div class="mb-3">
                <label for="" class="form-label">
                  Mobile No
                </label>
                <input
                  type="number"
                  class="form-control"
                  id=""
                  placeholder="enter your mobile number"
                />
              </div>

              <div class="mb-3 ">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="enter valid email"
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="enter your password"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                ></textarea>
              </div>

              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </center>
    </>
  );
};

export default Forms;
