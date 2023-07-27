import React from 'react'

const Gallery = (props) => {
  return (
    <div className="col-md-3 col-sm-6">
        <div className="gallery_img">
            <figure><img src={props.photo.image} alt="#"/></figure>
        </div>
    </div>
  )
}

export default Gallery