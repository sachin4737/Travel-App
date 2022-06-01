import React from 'react'
import logo from './images/logo.png'
import travel from './images/travel.png'

export default function Navbar() {
  return (
    <div>
        <nav>
            <img src={logo} alt='logo' />
            <img src ={travel} alt='logo' />
        </nav>
    </div>
  )
}
