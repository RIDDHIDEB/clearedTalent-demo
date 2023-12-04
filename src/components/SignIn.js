import React, {useState} from 'react'
import myImage from "../clearedTalent/clearedTalent.png";
import Hamburger from 'hamburger-react';
import BootsModal from "../components/Orient";

function SignIn() {
    const [showIcons, setShowIcons] = useState(false);
  return (
    <>
      <nav className='main-nav'>
        <img className='logo' src={myImage} alt={Image}/>

        <div className={showIcons ? "menu-link mobile-menu-link":"menu-link"}>
          <ul className='ul'>
          <button className="button">Register & Take Test</button>
            <li><a className="a" href="Customer Sign-Up">Customer Sign-Up</a></li>
            <li><a className="a" href="Request Demo">Request Demo</a></li>
            <li><a className="a" href="Referrals">Referrals</a></li>
            <li><BootsModal/></li>
          </ul>
        </div>

        <div className='hamburger-menu'>
          <a href='#' onClick={() => setShowIcons(!showIcons)}>
            <Hamburger />
          </a>
        </div>
      </nav>
       

      <footer>
        <p className='footer-text'>ClearedTalent © 2023.  All Rights Reserved.&nbsp; 
         <a href='#'>Terms of Use</a> &nbsp;&nbsp; <a href='#'>Privacy Policy</a></p>
      </footer>
    </>
  )
}

export default SignIn;
