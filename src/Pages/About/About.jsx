import React, { useEffect } from 'react'
import './About.css'
import HistoryIcon from '../../asset/icons/history-log-manuscript-svgrepo-com.svg';
import MissionIcon from '../../asset/icons/rocket-svgrepo-com.svg';
import AdvisorIcon from '../../asset/icons/message-square-check-svgrepo-com.svg';
import { IoPersonOutline } from "react-icons/io5";
import AchievementsIcon from '../../asset/icons/trophy-1-svgrepo-com.svg';
import AdvisorImg from '../../asset/contact/c3.png';
import hodImg from '../../asset/contact/faculties/hod.png';
import presidentImg from '../../asset/contact/faculties/president.png'
import vicePresidentImg from '../../asset/contact/faculties/vice_president.png'
import '../../Components/CardEffect/CardEffect.css'
import { initCardEffect } from '../../Components/CardEffect/CardEffect';

export default function About() {
  useEffect(() => {
    initCardEffect();
  }, []);
/*   const milestones = [
    { year: 1990, event: 'Established the first student-run mechanical engineering lab' },
    { year: 2005, event: 'Organized the National Conference on Advanced Manufacturing' },
    { year: 2010, event: 'Launched the annual Technical Symposium' },
    { year: 2018, event: 'Achieved recognition as the Best Student Chapter' },
  ]; */
    const facultyMembers = [
        {
            name: "Dr. S. Senthil Kumaran",
            title: "HOD, Department of Mechanical Engineering",
            img: hodImg,
        },
        {
            name: "Dr. C. Balamurugan",
            title: "Professor, President of Society of Mechanical Engineer",
            img: presidentImg,
        },
        {
            name: "Dr. K. Malarmohan",
            title: "Professor, Vice President of Society of Mechanical Engineer",
            img: vicePresidentImg,
        },
    ];

  return (
    <div className='about'>
        <div className="about-header" data-aos="fade-up">
            <h1 data-aos="fade-up" data-aos-delay="50">About Us</h1>
            <p data-aos="fade-up" data-aos-delay="150">The Society of Mechanical Engineering (SME) at the College of Engineering Guindy is a student-run organization dedicated to fostering technical excellence and professional development.</p>
        </div>

        <div className="about-section" data-aos="fade-up">
            <h2><img src={HistoryIcon} alt="History" className="about-icon"/> History & Establishment</h2>
            <p>
                Established in 1931, the Society of Mechanical Engineering (SME) at the College of Engineering Guindy has a proud legacy of nurturing technical excellence and innovation among students. Over the years, SME has grown into a vibrant student-driven organization that promotes learning beyond the classroom. <br /> <br />
                The society was formed with the aim of bringing together passionate mechanical engineering students and faculty members to share knowledge, exchange ideas, and develop practical skills. Through various technical events, workshops, seminars, and competitions, SME has consistently encouraged students to enhance their abilities and stay updated with the latest advancements in engineering. <br /> <br />
                Today, SME stands as an active platform that supports students in developing both technical expertise and professional skills, preparing them for future challenges in the engineering field.
            </p>
        </div>

        <div className="about-section" data-aos="fade-up" data-aos-delay="80">
            <h2><img src={MissionIcon} alt="Mission" className="about-icon"/> Objectives & Mission</h2>
            <p>
                The primary objective of SME is to bridge the gap between theoretical knowledge and practical application in mechanical engineering. The society strives to create opportunities that help students strengthen their technical understanding and apply their knowledge to real-world problems. <br /> <br />
                Our mission is to provide a dynamic environment where students can learn, innovate, collaborate, and grow professionally. SME aims to conduct technical workshops, guest lectures, industrial interactions, and project-based activities that expose students to emerging technologies and industry practices. <br /> <br />
                By fostering teamwork, leadership, and continuous learning, SME seeks to build a community of aspiring engineers who are prepared to contribute meaningfully to the field of engineering and society.
            </p>
        </div>

        <div className="about-section" data-aos="fade-up">
            <h2><IoPersonOutline className="about-icon" />Faculty Advisors</h2>
            <div className="faculty-card-container">
                {facultyMembers.map((member, index) => (
                    <div
                        className="faculty-card card-3d-effect"
                        key={index}
                        data-aos="zoom-in"
                        data-aos-delay={index * 120}
                    >
                        <img src={member.img} alt={member.name} className='faculty-img' />
                        <div className="faculty-details">
                            <h3>{member.name}</h3>
                            <p>{member.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* <div className="about-section">
            <h2><img src={AdvisorIcon} alt="Advisor" className="about-icon advisor-icon"/> Message from the Faculty Advisor</h2>
            <div className="advisor-card card-3d-effect">
                <img src={AdvisorImg} alt="Dr. Eleanor Bennett" className='advisor-img' />
                <div className="advisor-details">
                    <h3>Dr. Eleanor Bennett</h3>
                    <h4>Faculty Advisor, Department of Mechanical Engineering</h4>
                    <p>"It is my great pleasure to guide the bright minds at SME. Their dedication to innovation and learning is truly inspiring. We are committed to providing an environment that nurtures their technical and professional growth."</p>
                </div>
            </div>
        </div> */}

        {/* <div className="about-section">
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
        </div> */}
    </div>
  )
}
