import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './Home.css';
import bg from '../../asset/home/Home_bg1.jpg';
const bg1 = '/Department1.png';
import { upcoming_events } from '../../Utils/events_data';
import '../../Components/CardEffect/CardEffect.css'
import { initCardEffect } from '../../Components/CardEffect/CardEffect';
import { Link } from 'react-router-dom';


export default function Home() {
  useEffect(() => {
    initCardEffect();
  }, []);
  
  return (
    <div className='Home'>
      <div className="hero">
        <img className='bg' src={bg1} alt="" />
        <div className="hero-content">
          <h1>Society of Mechanical Engineers</h1>
          <p>Empowering the next generation of mechanical engineers through innovation,<br /> collaboration, and excellence.</p>
          <button><Link to="/about">Explore Our World</Link></button>          
        </div>
      </div>
      <div className="home-content">
        <div className="section-1">
          <div className="about-sme">
            <h2>About <span>SME</span></h2>
            <p>The Society of Mechanical Engineers (SME) is the official student association of the Department of Mechanical Engineering at the College of Engineering Guindy. Established in 1931, SME stands as one of India’s oldest and most prestigious student-run societies. Since its inception, the society has been dedicated to nurturing well-rounded engineers by fostering academic excellence, leadership capabilities, and essential professional skills.</p>
            <br />
            <p>Through a wide range of initiatives, including technical workshops, expert lectures, guidance programs, and career-oriented activities, SME provides a dynamic platform for students to learn, share ideas, and collaborate on innovative projects. The society plays a vital role in shaping future engineers who excel not only in academics but also in teamwork, creativity, and problem-solving.</p>
          </div>
          <div className="about-dme">
            <h2>Department of <span>Mechanical Engineering</span></h2>
            <p>The Department of Mechanical Engineering at the College of Engineering Guindy (CEG), founded in 1894, is one of the oldest and most prestigious mechanical engineering departments in India. With a legacy of over a century, the department has been at the forefront of engineering education, research, and innovation. It is committed to nurturing technically skilled, research-driven, and socially responsible engineers who contribute to technological advancement and sustainable development. Through its modern infrastructure, distinguished faculty, and strong industry partnerships, the department continues to set benchmarks in mechanical engineering education and practice</p>
          </div>
        </div>
        <div className="section-2">
          <div className="mission">
            <h3>Our Mission</h3>
            <p>Organize technical and non-technical events, workshops, and symposiums to enhance student development.</p>

            <p>Promote teamwork, creativity, and innovation among members.</p>

            <p>Foster strong connections with industry and alumni to provide career guidance and exposure.</p>

            <p>Support students in achieving balance between academic excellence and extracurricular engagement.</p>
          </div>
          <div className="vision">
            <h3>Our Vision</h3>
            <p>To shape students into skilled engineers and responsible individuals by building a strong foundation for both technical excellence and professional growth.
            </p>
          </div>
        </div>
      </div>
       <div className="upcoming-events">
        <h2>Upcoming Event & <span>Announcement</span></h2>
        <p>Stay updated with our recent activities and news</p>
        <div className="event-card">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {upcoming_events.map((event, index) => (
              <SwiperSlide key={index}>
                <div className="event-content">
                  <img src={event.img} alt={event.title} />
                </div>
              </SwiperSlide>
            ))}

          </Swiper>
        </div>
       {/* <div className="event-cards">
          {latest_events.map((event, index) => (
            <div key={index} className="event-card card-3d-effect">
              <img src={event.image} alt={`Event ${index + 1}`} />
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          ))}
        </div>  */}
      </div>
    </div>
  )
}
