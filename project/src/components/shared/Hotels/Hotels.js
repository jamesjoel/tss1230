import React from 'react'

const Hotels = (props) => {
  return (
    <div className="col-md-4 col-sm-6">
        <div id="serv_hover"  className="room">
            <div className="room_img">
                <figure><img src={props.info.image} alt="#" style={{height : "200px"}}/></figure>
            </div>
            <div className="bed_room"> 
                <h3>{props.info.title}</h3>
                <p>{props.info.detail}</p>
            </div>
        </div>
    </div>
  )
}

export default Hotels