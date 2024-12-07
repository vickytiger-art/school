// src/components/BackgroundSlider.jsx
import React from 'react'
import Slider from 'react-slick'
import './BackgroundSlider.css' // Custom CSS for the slider
import 'slick-carousel/slick/slick.css' // Slick carousel default styles
import 'slick-carousel/slick/slick-theme.css' // Slick carousel theme styles
// import school2 from 'pages/Login/school';

const BackgroundSlider = () => {
  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000, // Transition speed
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000, // Time each slide is displayed
    fade: true,
    pauseOnHover: false,
    arrows: false,
  }

  return (
    <div className="background-slider">
      <Slider {...settings}>
        <div>
          <img src="src/views/pages/school.jpg" alt="Slide 1" />
        </div>
        <div>
          <img src="src/views/pages/school3.jpg" alt="Slide 2" />
        </div>
        <div>
          <img src="src/views/pages/school4.jpg" alt="Slide 3" />
        </div>

        <div>
          <img src="src/views/pages/school2.jpg" alt="Slide 3" />
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  )
}

export default BackgroundSlider
