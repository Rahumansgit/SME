import React from 'react'
import './Footer.css';
const logo = '/SME_logo_removebg.png';
import { Link } from 'react-router-dom';
import insta_icon from '../../asset/icons/logo-instagram.svg';
import fb_icon from '../../asset/icons/logo-facebook.svg';
import linkedin_icon from '../../asset/icons/logo-linkedin.svg';
import twitter_icon from '../../asset/icons/logo-twitter.svg';
import develperImg from '../../asset/OBs/CoChairPersons/AbdulRahuman_S.jpeg';
export default function Footer() {
  return (
    <>
  <div className='footer'>
        <div className="footer-left">
          <Link className="logo" to="/">
            <img src={logo} alt="Logo" className="footer-logo" />
            <span className="footer-site-name">SME</span>
          </Link>          
          <p>Society of Mechanical Engineering, College of <br /> Engineering Guindy</p>
        </div>
        <div className="footer-middle">
          <div className="quick-links">
            <h3 style={{color: 'var(--text-color)'}}>Quick Links</h3>
            <ul>
              <Link className='qlinks' to="/">Home</Link>
{/*               <Link className='qlinks' to="/Events">Events & Symposiums</Link>
              <Link className='qlinks' to="/Projects">Projects & Innovations</Link> */}
              <Link className='qlinks' to="/Resources">Resources</Link>
              <Link className='qlinks' to="/Alumini">Alumini Connect</Link>
              <Link className='qlinks' to="/About">About Us</Link>
              <Link className='qlinks' to="/OBs">Office Bearers</Link>
              <Link className='qlinks' to="/Contact">Contact Us</Link>
            </ul>
          </div>
        </div>
        <div className="footer-right">
          <h3 style={{color: 'var(--text-color)'}}>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/sme_ceg/" target="_blank" rel="noopener noreferrer"><img src={insta_icon} alt="Instagram" /></a>
            <a href="https://www.facebook.com/smeceg" target="_blank" rel="noopener noreferrer"><img src={fb_icon} alt="Facebook" /></a>
            <a href="https://www.linkedin.com/in/smeceg/" target="_blank" rel="noopener noreferrer"><img src={linkedin_icon} alt="LinkedIn" /></a>
            <a href="https://twitter.com/SME_CEG" target="_blank" rel="noopener noreferrer"><img src={twitter_icon} alt="Twitter" /></a>
          </div>
        </div>
      </div>
      <div className="developer-credit">
        <img src={develperImg} alt="Developer" />
        <p>Design and Developed by <span><Link to="https://www.linkedin.com/in/abdul-rahuman-92b211374/" target="_blank">Abdul Rahuman S <img src={linkedin_icon} alt="LinkedIn" /></Link></span></p>
      </div>
      <div className="copyright">
        <p>© 2026 Society of Mechanical Engineering, CEG, All Rights Reserved</p>
      </div>    
    </>
    
  )
}
