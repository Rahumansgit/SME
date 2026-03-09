import React, { useEffect } from 'react'
import './About.css'
import HistoryIcon from '../../asset/icons/history-log-manuscript-svgrepo-com.svg';
import MissionIcon from '../../asset/icons/rocket-svgrepo-com.svg';
import AdvisorIcon from '../../asset/icons/message-square-check-svgrepo-com.svg';
import AchievementsIcon from '../../asset/icons/trophy-1-svgrepo-com.svg';
import AdvisorImg from '../../asset/contact/c3.png';
import '../../Components/CardEffect/CardEffect.css'
import { initCardEffect } from '../../Components/CardEffect/CardEffect';

export default function About() {
  useEffect(() => {
    // Initialize 3D card effects after component mounts
    initCardEffect();
  }, []);
  const milestones = [
    { year: 1990, event: 'Established the first student-run mechanical engineering lab' },
    { year: 2005, event: 'Organized the National Conference on Advanced Manufacturing' },
    { year: 2010, event: 'Launched the annual Technical Symposium' },
    { year: 2018, event: 'Achieved recognition as the Best Student Chapter' },
  ];

  return (
    <div className='about'>
        <div className="about-header">
            <h1>About Us</h1>
            <p>The Society of Mechanical Engineering (SME) at the College of Engineering Guindy is a student-run organization dedicated to fostering technical excellence and professional development.</p>
        </div>

        <div className="about-section">
            <h2><img src={HistoryIcon} alt="History" className="about-icon history-icon"/> History & Establishment</h2>
            <p>Established in 1985, the Society of Mechanical Engineering (SME) at the College of Engineering Guindy has a rich history of promoting technical knowledge and practical skills among its members. Over the years, SME has evolved into a dynamic platform for students to engage in various technical activities, workshops, and competitions, contributing significantly to their academic and professional growth.</p>
        </div>

        <div className="about-section">
            <h2><img src={MissionIcon} alt="Mission" className="about-icon mission-icon"/> Objectives & Mission</h2>
            <p>SME's primary objective is to bridge the gap between theoretical knowledge and practical application in mechanical engineering. Our mission is to provide students with opportunities to enhance their technical skills, explore emerging technologies, and network with industry professionals. We strive to create a vibrant community that encourages innovation, collaboration, and continuous learning.</p>
        </div>

        <div className="about-section">
            <h2><img src={AdvisorIcon} alt="Advisor" className="about-icon advisor-icon"/> Message from the Faculty Advisor</h2>
            <div className="advisor-card card-3d-effect">
                <img src={AdvisorImg} alt="Dr. Eleanor Bennett" className='advisor-img' />
                <div className="advisor-details">
                    <h3>Dr. Eleanor Bennett</h3>
                    <h4>Faculty Advisor, Department of Mechanical Engineering</h4>
                    <p>"It is my great pleasure to guide the bright minds at SME. Their dedication to innovation and learning is truly inspiring. We are committed to providing an environment that nurtures their technical and professional growth."</p>
                </div>
            </div>
        </div>

        <div className="about-section">
            <h2><img src={AchievementsIcon} alt="Achievements" className="about-icon achievements-icon"/> Achievements & Milestones</h2>
            <div className="timeline">
                {milestones.map((item, index) => (
                    <div className="timeline-item" key={index}>
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <p className='timeline-event'>{item.event}</p>
                            <p className='timeline-year'>{item.year}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
