import React from 'react'

const SignIn = () => {
  return (
    <> <center>
        <div className="container m-lg-5">
            <div className="row">
                <div style={{marginLeft:"200px" , backgroundColor:"gray" , borderRadius:"30px" }} className="col-lg-6">
                    <input style={{padding:"10px" , width:"75%" , borderRadius:"20px" , marginBottom:"50px" , fontSize:"15px" , marginTop:"20px"}} type="text" name="" id="" placeholder='enter user name ' />
                    <br />
                    <input style={{padding:"10px" , width:"75%" , borderRadius:"20px" , marginBottom:"50px" , fontSize:"15px"}} type="password" name="" id="" placeholder='enter user password ' />
                    <br />
                    <button style={{padding:"15px" ,  borderRadius:"30px" , width:"30%" , marginBottom:"30px"}}> LogIn </button>
                </div>
            </div>
        </div>
        </center>
    </>
  )
}

export default SignIn