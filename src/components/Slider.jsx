import React from 'react'
import Slider from "react-slick";
import {sliderImages} from "../utils/images"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeaderSlider = () => {

  let settings = {
    autoplay :true ,
    autoplaySpeed : 3000,
    arrows :false,
    dots : true,
    infinite : true ,
    speed : 500,
    slidesToShow : 1,
    slidesToShow :1,
    slidesToScroll : 1
  }

  return (
    <div className='p-12'>
        <Slider {...settings}>
                    <div>
                        <img src = {sliderImages[0]} alt = ""/>
                    </div>
                    <div>
                        <img src = {sliderImages[1]} alt = ""/>
                    </div>
                </Slider>
    </div>
  )
}

export default HeaderSlider