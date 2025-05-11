import React from 'react'
import Login from './components/Login'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Signup from './components/Signup'
import ProductApi from './components/ProductApi'
import { useEffect } from 'react'

import AOS from "aos";
import "aos/dist/aos.css";
import ProductDetails from './components/SearchProduct';
import SearchProduct from './components/SearchProduct';
import ProductDetail from './components/ProductDetail';
import Banner from './components/Banner';
import Comment from './components/Comment';
import Cookies from "js-cookie"; // Correct import convention

import AddCart from './components/AddCart';
// import ProductDetails from './components/ProductDetails'


const App = () => {

  useEffect(() => {
    AOS.init({
      duration:700, 
      once: false,    
      mirror: true, 
    });
  }, []);

        Cookies.set("isverified", false, { expires: 7 }); // Cookie expires in 7 days
  

  return (
    <>
     <BrowserRouter>
     <Routes>
        <Route path="/" element={<Signup/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<ProductApi />} />
        <Route path="/search" element={<SearchProduct />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/banner" element={<Banner />} />
        <Route path="/comment/:id" element={<Comment/>}/>
        <Route path='addcart' element={<AddCart/>}/>



      </Routes>
     </BrowserRouter>
</>
  )
}

export default App