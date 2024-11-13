import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <>
    <div id='footer' className="footer">
        <div className="footer-content">
            <div className='footer-content-left'>
                <img src={assets.logo} alt="" />
                <p className="">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, nam minima. Sequi labore laboriosam iure quasi perspiciatis ad pariatur tenetur officia sapiente, libero error, soluta eius consequuntur sunt ea repellat!
                </p>
                <div className="footer-social-icon">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul className="">
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul className="">
                    <li>+91 1234567890</li>
                    <li>tasty_food@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">
            Copyright 2024 &copy; Tomato.com - All rights are reserved.
        </p>
    </div>
    </>
  )
}

export default Footer
