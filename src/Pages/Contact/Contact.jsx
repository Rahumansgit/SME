import React from 'react'
import './Contact.css'
import EmailIcon from '../../asset/icons/email-svgrepo-com.svg'
import InstagramIcon from '../../asset/icons/logo-instagram.svg'
import FacebookIcon from '../../asset/icons/logo-facebook.svg'
import LinkedinIcon from '../../asset/icons/logo-linkedin.svg'
import DrArunImg from '../../asset/contact/c3.png'
import harishImg from '../../asset/OBs/ChairPersons/Harish.jpg';
import jayashreeImg from '../../asset/OBs/ChairPersons/Jayashree.jpg';

export default function Contact() {
  return (
    <div className='contact'>
      <div className="contact-header" data-aos="fade-up">
        <h1 data-aos="fade-up" data-aos-delay="50">Contact Us</h1>
        <p data-aos="fade-up" data-aos-delay="150">Get in touch with the Society of Mechanical Engineering at the College of Engineering Guindy. We're here to answer your questions and receive your valuable feedback.</p>
      </div>

      <div className="contact-container">
        <div className="contact-info" data-aos="fade-right">
          <h2 data-aos="fade-up">Contacts</h2>
          <div className="contact-cards">
            <div className="contact-card" data-aos="zoom-in" data-aos-delay="0">
              <img src={DrArunImg} alt="Dr. Arun Kumar" />
              <div className="contact-details">
                <h3>Dr. Arun Kumar</h3>
                <p>Faculty Advisor</p>
              </div>
            </div>
            <div className="contact-card" data-aos="zoom-in" data-aos-delay="120">
              <img src={harishImg} alt="Harish L" />
              <div className="contact-details">
                <h3>Harish L</h3>
                <p>Male President</p>
              </div>
            </div>
            <div className="contact-card" data-aos="zoom-in" data-aos-delay="240">
              <img src={jayashreeImg} alt="Jayashree Mani" />
              <div className="contact-details">
                <h3>Jayashree M</h3>
                <p>Female President</p>
              </div>
            </div>
          </div>

          <div className="social-connect">
            <h2 data-aos="fade-up">Connect With Us</h2>
            <div className="social-links">
              <a href="mailto:sme.ceg@example.com" className="social-link" data-aos="fade-up" data-aos-delay="0">
                <img src={EmailIcon} alt="Email" />
                <span>smeceg.official@gmail.com</span>
              </a>
              <a href="https://www.instagram.com/sme_ceg/" target='_blank' className="social-link" data-aos="fade-up" data-aos-delay="80">
                <img src={InstagramIcon} alt="Instagram" />
                <span>Instagram</span>
              </a>
              <a href="https://www.facebook.com/sme.ceg" target='_blank' className="social-link" data-aos="fade-up" data-aos-delay="160">
                <img src={FacebookIcon} alt="Facebook" />
                <span>Facebook</span>
              </a>
              <a href="https://www.linkedin.com/in/smeceg/" target='_blank' className="social-link" data-aos="fade-up" data-aos-delay="240">
                <img src={LinkedinIcon} alt="LinkedIn" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form" data-aos="fade-left">
          <h2 data-aos="fade-up">Feedback & Suggestions</h2>
          <form>
            <div className="form-group" data-aos="fade-up" data-aos-delay="0">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" />
            </div>
            <div className="form-group" data-aos="fade-up" data-aos-delay="80">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" />
            </div>
            <div className="form-group" data-aos="fade-up" data-aos-delay="160">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="6" placeholder="Your message"></textarea>
            </div>
            <button type="submit" className="submit-btn" data-aos="zoom-in" data-aos-delay="240">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}
