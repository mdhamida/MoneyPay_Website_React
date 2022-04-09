import React from 'react'
import About from './components.js/About'
import Contact from './components.js/Contact'
import Footer from './components.js/Footer'
import Forms from './components.js/Forms'
import Header from './components.js/Header'
import Home from './components.js/Home'
import Navbar from './components.js/Navbar'
import Services from './components.js/Services'
import { BrowserRouter, Routes,Route} from "react-router-dom";
import SignIn from './components.js/SignIn'

const App = () => {
  return (
    <>

   <Navbar/>
 
    <Routes>
      <Route path="/" element={<Header/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/services" element={<Services/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
   












{/*     
    <Navbar/>
    <Header/>
    <Home/>
    <About/>
    <Services/>
    <Contact/>
    <Footer/> */}
   
    </>
  )
}

export default App