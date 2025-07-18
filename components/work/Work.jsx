/* eslint-disable no-unused-vars */
import React from 'react';
import "./work.css";
import Works from './Works';

const Work = () => {
  return (
    <section className="work section" id='projects'>
        <h2 className="section__title">Project Experience</h2>
        <span className="section__subtitle"></span>

        <Works />
    </section>
  )
}

export default Work