import React, { useState } from 'react'
import './TechnicalEvents.css';
import { other_events } from '../../Utils/events_data';

export default function TechnicalEvents() {
    const [activeTab, setActiveTab] = useState("workshops");
    const tabs = [
        { id: "workshops", label: "Workshops" },
        { id: "guest_lectures", label: "Guest Lectures" },
        { id: "competitions", label: "Competitions" }
    ];
     
  return (
    <div className='technical-events'>
        <h3 className='technical-head' data-aos="fade-up">Technical Events</h3>
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

