// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './Navbar'

const Herosection = () => {
  return (
    <>
         <Navbar />
        <div className="land">
        <div className="left">
        <div className="box">
           <h1 className="heads">Discover and Find Your Own Fashion!</h1>
           </div>
           <div className="para">
            <p>Explore our curated collection of stylish clothing and accessories tailored to your unique taste.</p>
           </div>
        </div>
         <div className="right">
         <div className="boxr">

         </div>
            <img src="/images/model2.png" alt="" />
         </div>

        </div>
    </>
  )
}

export default Herosection