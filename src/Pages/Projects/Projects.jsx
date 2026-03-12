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
        <h1 data-aos="fade-up">Projects & <span>Innovations</span></h1>
        <p className='projects-p' data-aos="fade-up" data-aos-delay="120">Explore the innovative projects and research contributions from the Society of Mechanical Engineering at the College of Engineering Guindy.</p>
        
        <div className="projects-section">
          <h2 data-aos="fade-up">Student Projects & Models</h2>
          <div className="project-cards">
            {Projects_data.Student_Projects.map((project, index) => (
              <div
                key={index}
                className="project-card card-3d-effect"
                data-aos="zoom-in"
                data-aos-delay={Math.min(index * 90, 360)}
              >
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
          <h2 data-aos="fade-up">Research Contributions</h2>
          <div className="project-cards">
            {Projects_data.Research_Contributions.map((project, index) => (
              <div
                key={index}
                className="project-card card-3d-effect"
                data-aos="zoom-in"
                data-aos-delay={Math.min(index * 90, 360)}
              >
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
          <h2 data-aos="fade-up">Industry Collaborations</h2>
          <div className="project-cards">
            {Projects_data.Industry_Collaborations.map((project, index) => (
              <div
                key={index}
                className="project-card card-3d-effect"
                data-aos="zoom-in"
                data-aos-delay={Math.min(index * 90, 360)}
              >
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
