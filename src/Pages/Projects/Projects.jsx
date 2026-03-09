import React, { useEffect } from 'react'
import './Projects.css';
import { Projects_data } from '../../Utils/project_data';
import '../../Components/CardEffect/CardEffect.css'
import { initCardEffect } from '../../Components/CardEffect/CardEffect';

export default function Projects() {
  useEffect(() => {
    // Initialize 3D card effects after component mounts
    initCardEffect();
  }, []);
  return (
    <div className='projects'>
        <h1>Projects & <span>Innovations</span></h1>
        <p className='projects-p'>Explore the innovative projects and research contributions from the Society of Mechanical Engineering at the College of Engineering Guindy.</p>
        
        <div className="projects-section">
          <h2>Student Projects & Models</h2>
          <div className="project-cards">
            {Projects_data.Student_Projects.map((project, index) => (
              <div key={index} className="project-card card-3d-effect">
                <img src={project.image} alt={project.name} />
                <div className="project-content">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="projects-section">
          <h2>Research Contributions</h2>
          <div className="project-cards">
            {Projects_data.Research_Contributions.map((project, index) => (
              <div key={index} className="project-card card-3d-effect">
                <img src={project.image} alt={project.name} />
                <div className="project-content">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="projects-section">
          <h2>Industry Collaborations</h2>
          <div className="project-cards">
            {Projects_data.Industry_Collaborations.map((project, index) => (
              <div key={index} className="project-card card-3d-effect">
                <img src={project.image} alt={project.name} />
                <div className="project-content">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}
