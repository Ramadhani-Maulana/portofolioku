// eslint-disable-next-line no-unused-vars
import React from 'react'
import {
  SiGithub,
  SiLaragon,
  SiArduino,
  SiPostman,
  SiFigma,
  SiCanva,
  SiObsstudio,
} from 'react-icons/si'

import {
  FaFileWord,
  FaFileExcel,
  FaFilePowerpoint
} from 'react-icons/fa'

const Frontend = () => {
  return (
    <div className="skills__content">
      <div className="skills__box">
        <div className="skills__group">

          <div className="skills__data">
            <SiGithub size={20} className="text-orange-600" />
            <div>
              <h3 className="skills__name">Github</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            <SiPostman size={20} className="text-purple-600" />
            <div>
              <h3 className="skills__name">Postman</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <SiLaragon size={20} className="text-blue-800" />
            <div>
              <h3 className="skills__name">Laragon</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            <SiArduino size={20} className="text-blue-500" />
            <div>
              <h3 className="skills__name">Arduino</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <SiFigma size={20} className="text-red-500" />
            <div>
              <h3 className="skills__name">Figma</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
          
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <SiCanva size={20} className="text-cyan-400" />
            <div>
              <h3 className="skills__name">Canva</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            <SiObsstudio size={20} className="text-green-600" />
            <div>
              <h3 className="skills__name">OBS Studio</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <FaFileWord size={20} color="#2B579A" />
            <div>
              <h3 className="skills__name">Word</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            <FaFileExcel size={20} color="#217346" />
            <div>
              <h3 className="skills__name">Excel</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <FaFilePowerpoint size={20} color="#D24726" />
            <div>
              <h3 className="skills__name">PowerPoint</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          
    
        </div>
      </div>
    </div>
  )
}

export default Frontend
