import React from 'react'

const Box = (props) => {
  return (
      <div style={{backgroundColor : "red", width : "300px"}}>
        <h1>{props.children}</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum consequuntur enim inventore? Voluptatibus, nemo ab rerum praesentium fugit doloribus a vero omnis repellendus labore harum et voluptas excepturi numquam. Debitis?
    </div>
  )
}

export default Box