import React from 'react'
import { Navigate } from 'react-router-dom'

const Logout = () => {
    localStorage.removeItem("access-token-owner");

  return (
    <Navigate to="/hotels/login" />
  )
}

export default Logout