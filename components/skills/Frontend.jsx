// eslint-disable-next-line no-unused-vars
import React from 'react'
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiMysql,
  SiTypescript,
  SiBootstrap,
  SiGit,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiPhp,
  SiLaravel

} from 'react-icons/si'

const Frontend = () => {
  return (
    <div className="skills__content">
      <div className="skills__box">
        <div className="skills__group">

          <div className="skills__data">
            <SiHtml5 size={20} className="text-orange-600" />
            <div>
              <h3 className="skills__name">HTML</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            <SiCss3 size={20} className="text-blue-600" />
            <div>
              <h3 className="skills__name">CSS</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            <SiJavascript size={20} className="text-yellow-400" />
            <div>
              <h3 className="skills__name">JavaScript</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            <SiMysql size={20} className="text-blue-800" />
            <div>
              <h3 className="skills__name">MySQL</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <SiTypescript size={20} className="text-blue-500" />
            <div>
              <h3 className="skills__name">TypeScript</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
                      <SiPhp size={20} className="text-blue-600" />
                      <div>
                        <h3 className="skills__name">PHP</h3>
                        <span className="skills__level">Advanced</span>
                      </div>
                    </div>
          
    

        </div>

        <div className="skills__group">

          <div className="skills__data">
            <SiBootstrap size={20} className="text-purple-600" />
            <div>
              <h3 className="skills__name">Bootstrap</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <SiGit size={20} className="text-red-500" />
            <div>
              <h3 className="skills__name">Git</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <SiReact size={20} className="text-cyan-400" />
            <div>
              <h3 className="skills__name">React</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <SiNodedotjs size={20} className="text-green-600" />
            <div>
              <h3 className="skills__name">Node Js</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <SiTailwindcss size={20} className="text-sky-400" />
            <div>
              <h3 className="skills__name">Tailwind CSS</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>  

           <div className="skills__data">
            <SiLaravel size={20} className="text-yellow-400" />
            <div>
                <h3 className="skills__name">Laravel</h3>
                <span className="skills__level">Intermediate</span>
                </div>
            </div>        
        </div>
      </div>
    </div>
  )
}

export default Frontend
