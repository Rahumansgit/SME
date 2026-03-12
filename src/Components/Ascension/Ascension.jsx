import React from 'react'
import './Ascension.css';

export default function Ascension() {
  return (
    <div className='ascension' >
      <div className="main">
        <h1 data-aos="fade-up">Ascension</h1>
        <span data-aos="fade-up" data-aos-delay="120">Ascension is the annual symposium organized by the Society of Mechanical Engineering (SME) at the College of Engineering Guindy. It serves as a platform for students and professionals to engage with the latest advancements in mechanical engineering through workshops, competitions, and guest lectures.</span>
        <div className="cards">
          <div className="card" data-aos="fade-up" data-aos-delay="0">
            <h2>Event History</h2>
            <p>Since its inception in 2010, Ascension has grown into a significant event in the mechanical engineering community. Each year, the symposium features a unique theme, attracting participants from various institutions across the country. Past themes have included 'Sustainable Engineering Solutions' and 'Innovations in Robotics'.</p>
          </div>
          <div className="card" data-aos="fade-up" data-aos-delay="120">
            <h2>Typical Activity</h2>
            <p>Ascension typically includes a range of activities designed to enhance participants' knowledge and skills. These activities often feature workshops on CAD software, robotics, and automation, as well as competitions such as design challenges, model-making, and technical quizzes. Guest lectures by industry experts provide insights into current trends and future directions in mechanical engineering.</p>
          </div>
          <div className="card" data-aos="fade-up" data-aos-delay="240">
            <h2>Highlights</h2>
            <p>Over the years, Ascension has hosted notable speakers from leading engineering firms and research institutions. The symposium has also been recognized for its innovative workshops and competitions, which often incorporate real-world engineering problems. Participants have praised the event for its well-organized structure, engaging content, and networking opportunities.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
