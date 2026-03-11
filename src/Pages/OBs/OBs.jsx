import React, { useEffect } from 'react'
import './OBs.css';
import { ChairPersons_data, CoChairPersons_data, developer_data } from '../../Utils/obs_data.js';
/* import { past_OBs_data } from '../../obs_data.js'; */
import '../../Components/CardEffect/CardEffect.css'
import { initCardEffect } from '../../Components/CardEffect/CardEffect';

export default function OBs() {
  useEffect(() => {
    initCardEffect();
  }, []);
  return (
    <div className='OBs'>
        <h1>Office Bearers</h1>
        <p className='OBs-p'>Meet the dedicated team leading the Society of Mechanical Engineering at the <br />College of Engineering Guindy.</p>
        <h2 className='current-OBS'>Current Chair Persons (2025-2026)</h2>
        <div className="OBs-container">
            {ChairPersons_data.map((ob, index) => (
                <div className="OBs-card card-3d-effect" key={index}>
                    <img src={ob.image} alt={ob.name} />
                    <h2>{ob.name}</h2>
                    <p>{ob.position}</p>
                    <p style={{color: 'var(--primary)',fontWeight: '600'}}>{ob.year}</p>
                </div>
            ))}
        </div>
        <h2 className='current-OBS'>Current Co-Chair Persons (2025-2026)</h2>
        <div className="OBs-container">
            {CoChairPersons_data.map((ob, index) => (
                <div className="OBs-card card-3d-effect" key={index}>
                    <img src={ob.image} alt={ob.name} />
                    <h2>{ob.name}</h2>
                    <p>{ob.position}</p>
                    <p style={{color: 'var(--primary)',fontWeight: '600'}}>{ob.year}</p>
                </div>
            ))}
        </div>
        <h2 className='current-OBS'>Web Developer</h2>
        <div className="OBs-container">
            {developer_data.map((ob, index) => (
                <div className="OBs-card card-3d-effect" key={index}>
                    <img src={ob.image} alt={ob.name} />
                    <h2>{ob.name}</h2>
                    <p>{ob.position}</p>
                    <p style={{color: 'var(--primary)',fontWeight: '600'}}>{ob.year}</p>
                </div>
            ))}
        </div>
{/*         <h2 className='past-OBS'>Past Presidents Archive</h2>
        <div className="past-OBs-container">
          { past_OBs_data.map((ob, index) => (
                <div className="pOBs-card" key={index}>
                    <img src={ob.image} alt={ob.name} />
                      <div className="pOBs-details">
                      <p style={{color: 'var(--primary)',fontWeight: '600'}}>{ob.year}</p>
                      <h2>{ob.name}</h2>
                      <p>{ob.position}</p>
                    </div>
                </div>
            ))
          }
        </div> */}
    </div>
  )
}
