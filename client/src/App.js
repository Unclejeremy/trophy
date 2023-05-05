//import React from 'react'

import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./App.css"
import Homepage from "./pages/home";
import Aboutpage from "./pages/about";
import Contactpage from "./pages/contact";
import Blogpage from "./pages/blog";
import ErrorPage from "./pages/errorPage";
import FooterComp from "./components/Footer/Footer";
import SignUp from "./pages/signUp";
import Login from "./pages/login";

const App = () => {
  return (
    <div>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/blog" element={<Blogpage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
          
        </Routes>
        <FooterComp />
    </div>
  )
}

export default App

//REACT app is a SPA - Single Page Application
// Routing is REACT
