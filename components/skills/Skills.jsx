// eslint-disable-next-line no-unused-vars
import React from 'react';
import Frontend from './Frontend';
import Coursework from './Coursework';
import './skills.css'
import "@iconscout/unicons/css/line.css";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">Mastery of Technology, Programming Languages, and Design Tools that I use</span>

      <div className="skills__container container grid">
        <Frontend />
        <Coursework />
      </div>
    </section>
  )
}

export default Skills