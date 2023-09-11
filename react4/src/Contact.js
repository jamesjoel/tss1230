import React from 'react'

const Contact = (props) => {
  return (
    <h4 style={{backgroundColor : props.color, margin : "3px", padding : "5px", width : "200px"}}>
        Contact : {props.num}
    </h4>
  )
}

export default Contact