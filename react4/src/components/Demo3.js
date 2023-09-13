import React, {useContext} from 'react'
import User from './UserProvider'

const Demo3 = () => {
    let data = useContext(User);
  return (
    <h2>{ data.name }</h2>
  )
}

export default Demo3