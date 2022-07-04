import React from 'react'
import { Link } from 'react-router-dom'
import "./button.css"

const Button = () => {
  return (
    <Link to="signup" className='btn'>Signup</Link>
  )
}

export default Button