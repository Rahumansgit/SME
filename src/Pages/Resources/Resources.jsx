import React from 'react'
import './Resources.css';
import { resources_data } from '../../Utils/resources_data';

export default function Resources() {
  return (
    <div className='resources'>
        <h1>Resources</h1>
        <p className='resources-p'>Explore a wealth of resources to support your academic and professional journey in mechanical engineering.</p>

        <div className="resource-section">
            <h2>Event Reports</h2>
            <div className="resource-items">
                {resources_data.event_reports.map((item, index) => (
                    <a target='_blank' href={item.link} key={index} className="resource-item">
                        <img src={item.icon} alt="" />
                        <span>{item.name}</span>
                    </a>
                ))}
            </div>
        </div>

        <div className="resource-section">
            <h2>Learning Resources</h2>
            <div className="resource-items">
                {resources_data.learning_resources.map((item, index) => (
                    <a target='_blank' href={item.link} key={index} className="resource-item">
                        <img src={item.icon} alt="" />
                        <span>{item.name}</span>
                    </a>
                ))}
            </div>
        </div>

        <div className="resource-section">
            <h2>Recommended YouTube Channels</h2>
            <div className="resource-items">
                {resources_data.youtube_channels.map((item, index) => (
                    <a target='_blank' href={item.link} key={index} className="resource-item">
                        <img src={item.icon} alt="" />
                        <span>{item.name}</span>
                    </a>
                ))
                }
            </div>
        </div>

        <div className="resource-section">
            <h2>Question Banks & Preparation</h2>
            <div className="resource-items">
                {resources_data.question_banks.map((item, index) => (
                    <a target='_blank' href={item.link} key={index} className="resource-item">
                        <img src={item.icon} alt="" />
                        <span>{item.name}</span>
                    </a>
                ))}
            </div>
        </div>
    </div>
  )
}
