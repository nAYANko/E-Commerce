import React from 'react'
import './Footer.css'
import InstaIcon from '../Assets/Instagram.png'
import LinkedinIcon from '../Assets/LinkedIn.png'
import Handshake from '../Assets/Handshake.png'
export const Footer = () => {
  return (
    <div className='footer'>
        <div className="foot1">
        <p>Nayanko  </p>
        <img className='img1' src={Handshake} alt=''/>
        <p>  Sherlock</p>
        </div>
        <div className='footer-social'>
            <div className='footer-cont'>
                <img src={InstaIcon} alt='' />
            </div>
            <div className='footer-cont'>
                <img src={LinkedinIcon} alt='' />
            </div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <h4>Copyright @ 2025 - All Rights Reserved</h4>
        </div>
    </div>
  )
}
export default Footer
