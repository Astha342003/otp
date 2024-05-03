"use client";
import React from "react";
import "swiper/css";
import Welcome from "../../components/welcome";
import Slider1 from "../../components/slider1";
import Buttons from "../../components/buttons";
import Gdooo from "../../components/gdooo";
import Slider234 from "../../components/slider234";
import Navbar from "../../components/navbar";

function page() {
  return (
    <div className="container">
      <div className="grid gap-8">
       
        <Welcome/>
        
        <Slider1/>
        
        <Buttons/>
       
        <Gdooo/>
        
        <Slider234 />
      </div>

     <Navbar/>
    </div>
  );
}

export default page;
