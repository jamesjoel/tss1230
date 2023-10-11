import React from 'react'
import MySlider from 'react-simple-image-slider'

const Slider = () => {

  const images = [
    {
      url : '/assets/images/slider/slider1.jpg'
    },
    {
      url : '/assets/images/slider/slider2.jpg'
    },
    {
      url : '/assets/images/slider/slider3.jpg'
    }
  ]

  return (
    <>
    <div className='container-fluid bg-dark' style={{ minHeight : "300px"}}>
      <MySlider 
        width={"100%"}
        height={300}
        images={images}
        showBullets={true}
        showNavs={true}
        slideDuration={1}
        autoPlay = {true}
        autoPlayDelay={1.0}
      />
    </div>
    </>
  )
}

export default Slider