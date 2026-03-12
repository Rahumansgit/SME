import React from 'react';
import './Events.css';
import Ascension from '../../Components/Ascension/Ascension';
import Pinnacle from '../../Components/Pinnacle/Pinnacle';
import TechnicalEvents from '../../Components/TechnicalEvents/TechnicalEvents';
import NonTechnicalEvent from '../../Components/NonTechnicalEvent/NonTechnicalEvent';

export default function Events() {
  return (
    <div className='events'>
        <h2 className='event-head' data-aos="fade-up">Events & <span>Symposiums</span></h2>
        <p className='event-description' data-aos="fade-up" data-aos-delay="120">Explore the dynamic world of mechanical engineering through our diverse range of events and symposiums. From technical workshops to cultural celebrations, we offer a platform for learning, innovation, and networking.</p>
        <div className="annual-symposium">
            <h3 className='annual-symposium-head' data-aos="fade-up">Annual Symposium</h3>
            <Ascension />
            <Pinnacle />
        </div>
        <div className="other-events">
            <h3 className='other-events-head' data-aos="fade-up">Other Events</h3>
            <TechnicalEvents />
            <NonTechnicalEvent />
        </div>
    </div>
  )
}
