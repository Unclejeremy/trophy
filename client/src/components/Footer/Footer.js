import React from 'react'
import "./Footer.css"
import Logo from '../Logo/logo';


const FooterComp = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

  return (
    <footer>
        <Logo size="sm-text"/>
            <p> Designed by Uncle Jeremy. All rights reserved. &copy,2021 - {currentYear}</p>
    
    </footer>
  )
}

export default FooterComp