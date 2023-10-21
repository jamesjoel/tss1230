import React from 'react'


const HOC = (props) => {
  return (
    <div style={{backgroundColor : props.color}}>
        <props.cmp />
    </div>
  )
}

export default HOC