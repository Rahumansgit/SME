import React, { useState } from 'react'
import './NonTechnicalEvent.css'
import { other_events } from '../../Utils/events_data';

export default function NonTechnicalEvent() {
  const [activeTab, setActiveTab] = useState("non_technical_guest_lectures");
  const tabs = [
      { id: "non_technical_guest_lectures", label: "Guest Lectures" },
      { id: "non_technical_competitions", label: "Competitions" }
  ];

  return (
    <div className='non-technical-event'>
      <h3 className='non-technical-head' data-aos="fade-up">Non-Technical Events</h3>
      <div className="tabs" data-aos="fade-up" data-aos-delay="100">
          {tabs.map((tab) => (
              <span
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={activeTab === tab.id ? "active" : ""}
              >
                  {tab.label}
              </span>
          ))}
      </div>
      <div className="tab-content">
          {other_events[activeTab].map((event, index) => (
              <div
                  key={index}
                  className="event-item"
                  data-aos="fade-up"
                  data-aos-delay={Math.min(index * 80, 320)}
              >
                  <img src={event.image} alt={event.title} />
                  <div className="event-details">
                      <h4>{event.title}</h4>
                      <p>{event.description}</p>
                  </div>
              </div>
          ))}
      </div>
    </div>
  )
}
