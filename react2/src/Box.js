import React, {memo} from 'react'

const Box = ({x}) => {
    x();

    console.log("##############");
  return (
    <div>Box</div>
  )
}

export default memo(Box);