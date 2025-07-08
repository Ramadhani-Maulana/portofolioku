/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './experience.css';

const Experience = () => {
    const[setToggleState] = useState(false);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <div className="section experience section" id="experience">
        <h2 className="section__title">Experience</h2>
        <span className="section__subtitle">Organization, Committee Experience, Work Experience & Certification</span>

        <div className="exp__container container grid">
            <div className="exp__content">
                <div>
                    <span className="exp__comp">March 2024 - December 2024</span>
                </div>
                <div>
                    <h3 className="exp__title">HMPSTI FV UB - Expert Staff at ADVOKESMA [Advokasi dan Kesejahteraan Mahasiswa]</h3>
                </div>

                <div>
                    <span className="exp__comp">- Advokesma Voice (Suara Advokesma) : Create a brief about scholarship information and competition information relevant to information technology majors, and post it on hmpsti.voakasiub Instagram.</span>
                </div>
                 <div>
                    <span className="exp__comp">- SEAVO (Sharing and Education With Advokesma) : Make poster design, consumption division.</span>
                </div>
                 <div>
                    <span className="exp__comp">- IT Charity DDM Coordinator : Create a design plan for DDM division members and provide jobdesc for each member, determine the design theme, create an activity poster design, create a live report frame, create an instagram feeds design to be uploaded on itcharity24 instagram, projector operator when the activity takes place, documentation of activities.</span>
                    </div>
                </div>
            </div>

            <div className="exp__container container grid">
            <div className="exp__content">
                <div>
                    <span className="exp__comp">December 2023</span>
                </div>
                <div>
                    <h3 className="exp__title">TECHFAIR HMPSTI FV UB Committee Volunteers</h3>
                </div>
                <div>
                    <span className="exp__comp">Job Description :</span>
                </div>

                <div>
                    <span className="exp__comp">- Logistics division : Responsible for the management and provision of all needs before the techfair event takes place until the event is over. Planning logistical needs for each event, including equipment, supplies, and other needs, then distributing the required equipment and supplies to various divisions or event locations.</span>
                </div>
                </div>
            </div>

            <div className="exp__container container grid">
            <div className="exp__content">
                <div>
                    <span className="exp__comp">January 2022 - June 2022</span>
                </div>
                <div>
                    <h3 className="exp__title">Internship at PT RetGoo Sentris Informa, Kota Malang - Jawa Timur</h3>
                </div>
                <div>
                    <span className="exp__comp">Job Description :</span>
                </div>
                <div>
                    <span className="exp__comp">- Quality Assurance Testing : Ensure the quality of ERP and BPM application development services with established standards. Testing or called looking for bugs in the ERP and BPM application development service application that has been made by the developer team.</span>
                </div>
                <div>
                    <span className="exp__comp">- Deployment : The process of updating the ERP and BPM application services to the latest version, moving the program code and assets of the ERP and BPM applications from the development team to production (Deployment), so that the ERP and BPM applications can be accessed and used by end users with the latest version (end-user).</span>
                </div>
                </div>
            </div>

            <div className="exp__container container grid">
            <div className="exp__content">
                <div>
                    <span className="exp__comp">May 2023 - July 2023</span>
                </div>
                <div>
                    <h3 className="exp__title">Part Time Work at CV Kreasi Pangan Kita, Kota Malang - Jawa Timur</h3>
                </div>
                <div>
                    <span className="exp__comp">Job Description :</span>
                </div>

                <div>
                    <span className="exp__comp">- Production : Make pasteurized milk according to company standards.</span>
                </div>
                 <div>
                    <span className="exp__comp">- Stock Opname : Milk calculation activities in the showcase, the calculation is according to the flavors that have been made by the production team.</span>
                </div>
                </div>
            </div>

            <div className="exp__container container grid">
            <div className="exp__content">
                <div>
                    <span className="exp__comp">July 2023</span>
                </div>
                <div>
                    <h3 className="exp__title">PCAP: Programming Essentials in Python</h3>
                </div>
                <div>
                    <span className="exp__comp">OpenEDG - Python</span>
                </div>
                <div>
                    <span className="exp__comp">- Learn general computer programming concepts, including variables, data structures, algorithms, control flow, functions, and exceptions.</span>
                </div>
                <div>
                    <span className="exp__comp">- Be able to use developer tools, runtime environments, and Python language syntax and semantics proficiently. Use fundamental programming techniques, best practices, and vocabulary. Includes the most common standard library functions in Python 3.</span>
                </div>
                <div>
                    <span className="exp__comp">- Be able to write Python programs using standard language infrastructure and know how to solve common implementation problems. Understand the basics of object-oriented programming (OOP) and how to apply it in Python.</span>
                </div>
                </div>
            </div>

            <div className="exp__container container grid">
            <div className="exp__content">
                <div>
                    <span className="exp__comp">May 2023</span>
                </div>
                <div>
                    <h3 className="exp__title">Fundamental Mobile Development With Flutter</h3>
                </div>
                <div>
                    <span className="exp__comp">Alterra Indonesia</span>
                </div>

                <div>
                    <span className="exp__comp">- Introduction to Flutter and Dart: Understand the basics of Flutter as a mobile application development framework and the Dart programming language used.</span>
                </div>
                <div>
                    <span className="exp__comp">- Learn the fundamentals of Figma.</span>
                </div>
                <div>
                    <span className="exp__comp">- Learn Git control.</span>
                </div>
                <div>
                    <span className="exp__comp">- Learn basic Dart programming.</span>
                </div>
                <div>
                    <span className="exp__comp">- Learning Stateless & Stateful Widgets.</span>
                </div>
                <div>
                    <span className="exp__comp">- Learning Forms, Inputs, and Buttons.</span>
                </div>
                <div>
                    <span className="exp__comp">- Creating a Mini Project</span>
                </div>
                </div>
            </div>

            <div className="exp__container container grid">
            <div className="exp__content">
                <div>
                    <span className="exp__comp">February 2023</span>
                </div>
                <div>
                    <h3 className="exp__title">AWARD of FINAL EXAM COMPLETION [Java Foundations]</h3>
                </div>
                <div>
                    <span className="exp__comp">Oracle Academy</span>
                </div>

                <div>
                    <span className="exp__comp">- Understanding the difference between JDK and JRE.</span>
                </div>
                <div>
                    <span className="exp__comp">- Understand the difference between procedural programming and object-oriented programming.</span>
                </div>
                <div>
                    <span className="exp__comp">- Understand data types in Java.</span>
                </div>
                <div>
                    <span className="exp__comp">- Understand and use method functions in Java.</span>
                </div>
                <div>
                    <span className="exp__comp">- Understand and use class functions in Java.</span>
                </div>
                <div>
                    <span className="exp__comp">- Understand conditional execution in Java.</span>
                </div>
                <div>
                    <span className="exp__comp">- Understand and use loop, while, and do while functions in Java.</span>
                </div>
                <div>
                    <span className="exp__comp">- Understand debugging techniques.</span>
                </div>
                <div>
                    <span className="exp__comp">- Be able to develop and test applications.</span>
                </div>
                </div>
            </div>

            <div className="exp__container container grid">
            <div className="exp__content">
                <div>
                    <span className="exp__comp">January 2023</span>
                </div>
                <div>
                    <h3 className="exp__title">AWARD of FINAL EXAM COMPLETION [Java Fundamentals]</h3>
                </div>
                <div>
                    <span className="exp__comp">Oracle Academy</span>
                </div>

                <div>
                    <span className="exp__comp">- Understand and use IF and WHILE control structures.</span>
                </div>
                <div>
                    <span className="exp__comp">- Understand variables and data types in Java.</span>
                </div>
                <div>
                    <span className="exp__comp">- Understand Methods, Variables, and Classes in Java.</span>
                </div>
                <div>
                    <span className="exp__comp">- Understand Randomisation and Construction.</span>
                </div>
                <div>
                    <span className="exp__comp">- Be able to operate keyboard and sound controls.</span>
                </div>
                <div>
                    <span className="exp__comp">- Understand Loops, Variables, and Arrays</span>
                </div>
                <div>
                    <span className="exp__comp">- Understand OOP mechanisms such as: Inheritance, classes, interfaces, polymorphism.</span>
                </div>
                </div>
            </div>

            <div className="exp__container container grid">
            <div className="exp__content">
                <div>
                    <span className="exp__comp">April 2022</span>
                </div>
                <div>
                    <h3 className="exp__title">Sololearn</h3>
                </div>
                <div>
                    <span className="exp__comp">Database Basics: Understanding how data is stored in relational databases.</span>
                </div>

                <div>
                    <span className="exp__comp">- SQL Queries: Learning how to use the SELECT command to retrieve data, as well as combining it with the WHERE clause to filter data based on specific conditions.</span>
                </div>
                <div>
                    <span className="exp__comp">- Aggregate Functions: Learn how to use functions such as SUM, AVG, COUNT, MIN, and MAX to analyse data.</span>
                </div>
                <div>
                    <span className="exp__comp">- Data Manipulation: Learn how to modify data in tables using the UPDATE, INSERT, and DELETE commands.</span>
                </div>
                <div>
                    <span className="exp__comp">- Tables: Learn how to create, update, and delete tables in a database.</span>
                </div>
                <div>
                    <span className="exp__comp">- Multi-Table Databases: Learn how to work with databases consisting of multiple interconnected tables and how to combine data from those tables using the JOIN command.</span>
                </div>
                </div>
            </div>

            <div className="exp__container container grid">
            <div className="exp__content">
                <div>
                    <span className="exp__comp">April 2022 - Expired April 2025</span>
                </div>
                <div>
                    <h3 className="exp__title">Test of English as a Foreign Language [TOEFL]</h3>
                </div>
                <div>
                    <span className="exp__comp">Universitas Merdeka Malang</span>
                </div>

                <div>
                    <span className="exp__comp">- TOEFL Equivalent Score: 593</span>
                </div>
                 <div>
                    <span className="exp__comp">- Level: Upper Intermediate</span>
                </div>
            </div>
        </div>
    </div>
  )
}


export default Experience