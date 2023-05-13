import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, useLocation } from "react-router-dom";
import React from 'react';
import Navbar from './pages/nav-foot/Navbar';
import Footer from "./pages/nav-foot/Footer";
import ScrollToTop from './helpers/ScrollToTop';
import { AllRoutes } from './routes/AllRoutes';
import { useEffect } from 'react';
import { useState } from 'react';
function App() {
  const [showScrollButton, setShowScrollButton] = useState(false)
  useEffect(()=>{
    // const resizeOps = () => {
    //   document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
    // };
  
    // resizeOps();
    // window.addEventListener("resize", resizeOps);
    const handleScrollButtonVisibility = () =>{
      window.pageYOffset > 300 ? setShowScrollButton(true):setShowScrollButton(false)
    }
    window.addEventListener('scroll',handleScrollButtonVisibility);
    return () =>{
      window.addEventListener('scroll',handleScrollButtonVisibility);
    }
  },[])
  const handleScrollToTop = () =>{
    window.scrollTo({top:0, behavior:'smooth'})
  };
  let location = useLocation()
  return (
    <React.Fragment>
      <div className='app'>
        <Navbar />
        {
          location.pathname !== "/login" ? location.pathname !== "/signup"? <Footer />:<></>:<></>
        }
      </div>
      {showScrollButton && <div className='scroll_button' onClick={handleScrollToTop}>🔺</div>}
    </React.Fragment>
  );
}

export default App;
