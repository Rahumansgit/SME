import React, { useState, useRef, useEffect } from 'react';
import './Alumni.css';
import { FaExternalLinkAlt } from "react-icons/fa";
import { aluminiData } from '../../Utils/alumini_data';

const Alumni = () => {
  return (
    <div className='alumni-section'>
      <div className="about-header" data-aos="fade-up">
            <h1 data-aos="fade-up" data-aos-delay="50"><span style={{color: "var(--primary)"}}>Alumni</span> Connect</h1>
            <p data-aos="fade-up" data-aos-delay="150">Meet our alumnis from Mechanical Department. <br /> Reconnect with peers, celebrate achievements, and build lasting professional relationships within the SME CEG family.</p>
        </div>
        <div className="alumni-container">
          {aluminiData.map((alumni, index) => (
            <div
              className="alumni-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={Math.min(index * 70, 350)}
            >
              <h4 className='alumni-name'>{alumni.name}</h4>
              {/* <p className='graduation-year'>Class of {alumni.year_of_graduation}</p>
              <p className='alumni-position'>{alumni.current_position}</p> */}
              <a href={alumni.linkedin} target="_blank" rel="noopener noreferrer">
                View Linkedin Profile <FaExternalLinkAlt size={12} />
              </a>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Alumni

{/* Feature Updates */}

/* 
import a1 from '../../asset/alumni/a1.png';
import a2 from '../../asset/alumni/a2.png';
import a3 from '../../asset/alumni/a3.png';
import ap1 from '../../asset/alumni/ap1.png';
import ap2 from '../../asset/alumni/ap2.png';
import ap3 from '../../asset/alumni/ap3.png';
import groupAddIcon from '../../asset/icons/group-add-people-svgrepo-com.svg';
import eventIcon from '../../asset/icons/event-svgrepo-com.svg';

export default function Alumni() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const scrollerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  const recentMeets = [
    {
      id: 1,
      title: 'Innovations in EV Technology',
      host: 'Dr. Arun Kumar',
      short_desc: 'A deep dive into the future of electric vehicles and sustainable transport.',
      long_desc: 'This session, led by Dr. Arun Kumar, explored the latest advancements in battery technology, powertrain efficiency, and the role of AI in autonomous driving. Attendees had the opportunity to engage in a live Q&A and network with industry pioneers.',
      img: a1
    },
    {
      id: 2,
      title: 'Aerospace Propulsion Systems',
      host: 'Mr. Karthik Srinivasan',
      short_desc: 'Exploring the next generation of jet engines and space propulsion.',
      long_desc: 'Mr. Karthik Srinivasan shared insights from his work at AeroPropel, discussing breakthroughs in materials science and combustion efficiency that are shaping the future of air and space travel. The talk included case studies from recent successful projects.',
      img: a2
    },
    {
      id: 3,
      title: 'Digital Manufacturing & Industry 4.0',
      host: 'Ms. Priya Sharma',
      short_desc: 'How IoT and AI are transforming the manufacturing landscape.',
      long_desc: 'An interactive workshop focusing on the integration of smart technologies in modern factories. Ms. Priya Sharma demonstrated real-world applications of digital twins, predictive maintenance, and automated quality control, providing a roadmap for digital transformation.',
      img: a3
    }
  ];

  const recentMeetDuplicated = [...recentMeets, ...recentMeets]; // For seamless scroll

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let animationFrameId;
    const pixelsPerFrame = 0.6; // controls auto-scroll speed

    const autoScroll = () => {
      if (!isHovering) {
        const halfWidth = scroller.scrollWidth / 2; // duplicated content allows seamless loop
        if (scroller.scrollLeft >= halfWidth) {
          scroller.scrollLeft -= halfWidth;
        } else {
          scroller.scrollLeft += pixelsPerFrame;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    const handleWheel = (event) => {
      // Allow wheel/touchpad horizontal scroll only while hovering
      if (!isHovering) return;
      event.preventDefault();
      const dominantDelta = Math.abs(event.deltaX) > Math.abs(event.deltaY)
        ? event.deltaX
        : event.deltaY;
      scroller.scrollLeft += dominantDelta;
    };

    scroller.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      cancelAnimationFrame(animationFrameId);
      scroller.removeEventListener('wheel', handleWheel);
    };
  }, [isHovering]);

  const handleReadMore = (event) => {
    setSelectedEvent(event);
  };

  const handleClosePopup = () => {
    setSelectedEvent(null);
  };

  const successStories = [
    {
      name: 'Dr. Arun Kumar',
      title: 'CEO, Sustainable Motors',
      story: "Pioneering sustainable vehicle design, Dr. Kumar's leadership has driven his company to the forefront of the automotive industry. His journey began in the labs of SME CEG.",
      img: a1
    },
    {
      name: 'Mr. Karthik Srinivasan',
      title: 'Chief Engineer, AeroPropel',
      story: 'Mr. Srinivasan is a key figure in aerospace, leading innovations in advanced propulsion systems. His foundational knowledge was nurtured at SME CEG.',
      img: a2
    }
  ];

  const alumniMessages = [
    {
      quote: '"My time at SME CEG laid the foundation for my career. The rigorous curriculum and supportive faculty were instrumental in my success."',
      name: 'Mr. Rajesh Verma',
      class: "Class of '98",
      img: ap1
    },
    {
      quote: '"The SME community is a network for life. I\'m grateful for the connections and mentorship I received."',
      name: 'Ms. Anjali Nair',
      class: "Class of '05",
      img: ap2
    },
    {
      quote: '"SME CEG instilled in me a passion for innovation and problem-solving, which has been invaluable in my professional journey."',
      name: 'Mr. Vikram Singh',
      class: "Class of '12",
      img: ap3
    }
  ];

  return (
    <div className='alumni'>
      <div className="alumni-hero">
        <div className="alumni-hero-content">
          <h1>Alumni Connect</h1>
          <p>Reconnect with peers, celebrate achievements, and build lasting professional relationships within the SME CEG family.</p>
          <button>
            Join the Network <img src={groupAddIcon} alt="Join" />
          </button>
        </div>
      </div>

      <div className="alumni-section">
        <h2 className="section-title">Recent Alumni Meet Highlights</h2>
        <div 
          className="alumni-meet-scroller"
          ref={scrollerRef}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div 
            className="alumni-meet-container"
          >
            {recentMeetDuplicated.map((meet, index) => (
              <div key={index} className="meet-card">
                <img src={meet.img} alt={meet.title} className="meet-img" />
                <div className="meet-card-content">
                  <h3>{meet.title}</h3>
                  <h4>Hosted by: {meet.host}</h4>
                  <p>{meet.short_desc}</p>
                  <span className="read-more" onClick={() => handleReadMore(meet)}>
                    Read More
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="alumni-section">
        <h2 className="section-title">Success Stories</h2>
        <div className="success-stories-container">
          {successStories.map((story, index) => (
            <div className="success-card" key={index}>
              <div className="success-card-header">
                <img src={story.img} alt={story.name} className="success-img" />
                <div>
                  <h3>{story.name}</h3>
                  <p className="success-title">{story.title}</p>
                </div>
              </div>
              <p className="success-story">{story.story}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="alumni-section">
        <h2 className="section-title">Messages from Alumni</h2>
        <div className="messages-container">
          {alumniMessages.map((msg, index) => (
            <div className="message-card" key={index}>
              <p className="message-quote">{msg.quote}</p>
              <div className="message-author">
                <img src={msg.img} alt={msg.name} className="author-img" />
                <div>
                  <h4>{msg.name}</h4>
                  <p className="author-class">{msg.class}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="alumni-section">
        <div className="networking-card">
          <div className="networking-content">
            <h2>Networking Opportunities</h2>
            <p>Engage with a vibrant community of innovators. Our networking events, mentorship programs, and collaborative projects offer invaluable opportunities for professional growth.</p>
            <button>
              Explore Events <img src={eventIcon} alt="Events" />
            </button>
          </div>
        </div>
      </div>

      {selectedEvent && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close-btn" onClick={handleClosePopup}>&times;</button>
            <img src={selectedEvent.img} alt={selectedEvent.title} className="popup-img" />
            <h2>{selectedEvent.title}</h2>
            <h3>Hosted by: {selectedEvent.host}</h3>
            <p>{selectedEvent.long_desc}</p>
          </div>
        </div>
      )}
    </div>
  );
}
 */