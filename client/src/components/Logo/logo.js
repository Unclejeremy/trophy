import React from 'react'
import "../Logo/logo.css"

const Logo = ({size}) => {
  return (
    <div className='logo-box'>
        {/* <p className='logo-text'>SENDPADI</p> */}
        <p className={`${size} logo-text`}>SENDPADI</p>
    </div>
  )
}

export default Logo