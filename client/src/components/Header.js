import React from 'react'
import Logo from './Logo/logo'
import Nav from './Nav/Nav'

const Header = () => {
  return (
    <header className='header'>
        <Logo size="bg-text"/>
        <Nav />
    </header>
  )
}

export default Header