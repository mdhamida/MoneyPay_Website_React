import React, { useState } from 'react'
import dataApi from '../API/workApi'

const Home = () => {
    const [data , setData] = useState(dataApi);
    console.log(dataApi)


  return (
    <>
     <section>
      <div className="work-container container">
          <h1 className='main-heading text-center'>How does it works</h1>
          <div className="row">

          {
            dataApi.map((currEle)=>{
                const {id , logo , title, info} = currEle;
                return (
                    <>
                    <div className="col-12 col-lg-4 text-center work-container-subdiv">
          <i class= {`fontawasome-style ${logo}`}></i>
          <h2 className='sub-heading'>{title}</h2>
          <p className='main-hero-para w-100'>{info}</p>
          </div>    
                    </>
                ) 

            })
          }

          

          </div>
      </div>   
     </section>
    </>
  )
}

export default Home