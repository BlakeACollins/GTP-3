import React from "react";
import './App.css'
import { Header, Footer, Features, Possibility, WhatGTP3, Blog } from './container';
import { CTA, Brand, Navbar } from './components'

const App = () =>{
  return(
    <div className="App">
      <div className="gradient__bg">
          <Navbar />
          <Header />
      </div>
        <Brand />
        <WhatGTP3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App; 