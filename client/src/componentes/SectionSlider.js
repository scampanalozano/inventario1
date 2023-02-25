import React, { useState, Component } from "react";
import { Slide } from "react-slideshow-image";

import { styled } from '@mui/material/styles';


import '../App.css';
const SectionSlider = () => {
  
  const [autoplay, setAutoplay] = useState(true);

  const style = {
    textAlign: "center",
    background: "#0174DF",
    padding: "200px 0",
    fontSize: "30px",
    

  }

  return (

  
      <Slide autoplay={autoplay}>
          <div className='container-image1'></div>
          <div className='container-image2'></div>
          <div className='container-image3'></div>
        </Slide>
     
  );
};

export default SectionSlider;