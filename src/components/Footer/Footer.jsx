import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <h2 className='companyTitle'>Delivery Hub</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio ipsum, temporibus nemo animi minus quas, dolorum tempore quaerat rem officiis necessitatibus similique repellendus modi est facilis reprehenderit dicta nobis cum.</p>
                    <div className='footer-social-icons'>
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                     <h2>GET IN TOUCH</h2>

                     <ul>
                        <li>+919704132631</li>
                        <li>sivanageswarareddy268@gmail.com</li>
                     </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">
                Copyright 2022 delivery-hub.com - All Right Reserved
            </p>
        </div>
    )
}

export default Footer