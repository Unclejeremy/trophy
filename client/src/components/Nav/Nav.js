import React from 'react'
import "../Nav/nav.css"
import { Link } from 'react-router-dom'

const Nav = () => {

  const navStyles = {
    padding: 5,
    
  }

  return (
    <nav className='navig'>
        <Link to="/" style={navStyles}>Home</Link>
        <Link to="/about"style={navStyles}>About</Link>
        <Link to="/contact" style={navStyles}>Contact</Link>
        <Link to="/blog" style={navStyles}>Blog</Link>
        
    </nav>
  )
}

export default Nav