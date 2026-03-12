import React from 'react'
import './Pinnacle.css';
import img1 from '../../asset/events/pinnacle_c1.png';
import img2 from '../../asset/events/pinnacle_c2.png';
import img3 from '../../asset/events/pinnacle_c3.png';
export default function Pinnacle() {
  return (
    <div className='pinnacle' >
      <div className="main">
        <h1 data-aos="fade-up">Pinnacle</h1>
        <span data-aos="fade-up" data-aos-delay="120">Pinnacle is the annual technical symposium organized by the Society of Mechanical Engineering (SME) at the College of Engineering Guindy. It serves as a platform for students and professionals to showcase their technical skills, exchange ideas, and learn about the latest advancements in mechanical engineering. The symposium features a variety of events, including workshops, competitions, guest lectures, and exhibitions, covering a wide range of topics within the field.</span>
        <div className="descriptions">
          <div className="C1" data-aos="fade-right">
            <h2>Event Scope and Significance</h2>
            <p>Pinnacle aims to provide a comprehensive learning experience for participants, fostering innovation and creativity in mechanical engineering. The symposium covers diverse areas such as design, manufacturing, robotics, thermal engineering, and automotive technology. It offers a unique opportunity for attendees to engage with industry experts, network with peers, and gain practical insights into real-world engineering challenges.</p>
          </div>
          <div className="C2" data-aos="fade-left" data-aos-delay="80">
            <h2>Past Events</h2>
              <div className="pinnacle-cards">
                <div className="pinnacle-card" data-aos="zoom-in" data-aos-delay="0">
                  <img src={img1} alt="" />
                  <div className="pinnacle-content">
                    <h3>Pinnacle 2024</h3>
                    <p>Focused on sustainable engineering solutions with a keynote address by Dr. Emily Carter.</p>
                  </div>
                </div>
                <div className="pinnacle-card" data-aos="zoom-in" data-aos-delay="120">
                  <img src={img2} alt="" />
                  <div className="pinnacle-content">
                    <h3>Pinnacle 2023</h3>
                    <p>A successful symposium with over 500 participants and 20 events.</p>
                  </div>
                </div>
                <div className="pinnacle-card" data-aos="zoom-in" data-aos-delay="240">
                  <img src={img3} alt="" />
                  <div className="pinnacle-content">
                    <h3>Pinnacle 2022</h3>
                    <p>Celebrated the 10th anniversary of Pinnacle with a special exhibition.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>          
      </div>
    </div>
  )
}
