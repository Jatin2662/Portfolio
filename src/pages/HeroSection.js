

import { Parallax } from 'react-scroll-parallax';
import './HeroSection.css'
import { useState } from 'react';
import { motion } from 'framer-motion';
import Projects from '../components/Projects';
import { SideNav } from '../components/Nav';
import { FaGithub } from "react-icons/fa";


function HeroSection({ showNav, setShowNav }) {

    const experience = [
        {
            id: 1,
            title: 'Apprentice at BSNL (Oct 2024 - Present)',
            description: [
                'Assisted in the CAF Warehouse and performed quality checks on data.',
                'Developed communication and problem-solving skills through customer interactions and coordination with seniors.'
            ]
        },
        {
            id: 2,
            title: 'Internship, Trainee (Jan 2024 - June 2024)',
            description: [
                'Developed full-stack web applications using the MERN (MongoDB, Express, React, Node.js) stack.',
                'Collaborated with team members to design user-friendly interfaces and implement backend functionalities.'
            ]
        }
    ]

    const projects = [
        {
            id: 1,
            title: 'Habit Goal Tracker',
            liveLink: 'https://habitgoaltracker-1.onrender.com',
            timePeriod: 'April 2025 - May 2025',
            technology: [
                'Built a website to manage habits using MERN Stack.',
                'Managed both frontend and backend, integrated authentication, and implemented role-based access and toasts.'
            ]
        },
        {
            id: 2,
            title: 'Home Groom Website',
            timePeriod: 'March 2024 - May 2024',
            technology: [
                'Created a platform for hiring household helpers using MERN Stack.',
                'Managed both frontend and backend, ensuring a seamless user experience.',
                'Implemented responsive design, increasing user engagement.'
            ]
        },
        {
            id: 3,
            title: 'Gesture Control',
            timePeriod: 'October 2023',
            technology: [
                'Developed a system to control devices using hand gestures with Python and OpenCV.',
                'Led the team and designed an intuitive UI, enhancing user interaction.'
            ]
        },
        {
            id: 4,
            title: 'Exhibition App',
            timePeriod: 'May 2023',
            technology: [
                'Built an app to showcase exhibition products using Flutter, Dart, and Firebase.',
                'Handled UI/UX design and backend management, resulting in improved navigation.'
            ]
        },
    ]

    return (
        <div>
            {showNav && <SideNav showNav={showNav} setShowNav={setShowNav} />}
            <section id='about' className='hero-section'>
                <div className="video-background">
                    <video autoPlay muted loop>
                        <source src="/assets/wind.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <p>Video by  Damir K . from Pexels: https://www.pexels.com/video/black-and-white-wind-turbines-in-field-32391111/</p>
                </div>
                <Parallax speed={-20}>
                    <div className="hero-content">
                        <h1>Jatin Arora</h1>
                        <div>Hello, I'm Jatin Arora, a MERN Stack Developer, currently gaining experience through hands-on projects.</div>
                    </div>
                </Parallax>
            </section>
            <section id='experience' >
                <h1>Experience</h1>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    {experience.map((exp) => (
                        <div key={exp.id}>
                            <h2>{exp.title}</h2>
                            <ul>
                                {exp.description.map((expd, index) => (
                                    <li key={index} >{expd}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </motion.div>

            </section>
            <section id='projects' >
                <div className='ph flex' >
                    <h1>My Projects</h1>
                    <a href='https://github.com/Jatin2662' target='_blank' >Github</a>
                </div>
                {projects.map((project, index) => (
                    <Projects project={project} key={index} />
                ))}
            </section>
            <section id='contact'>
                <h1>Let's Work Together</h1>
                <p>Have a project in mind, or just want to say hello? Feel free to reach out!</p>

                <a href="mailto:tracker3485@gmail.com" className="email-link">tracker3485@gmail.com</a>

                <a href="https://github.com/Jatin2662" target="_blank" rel="noopener noreferrer" className='flex'>
                    <span className='flex' ><FaGithub /></span>
                    <span>Github</span>
                </a>

            </section>
            <div className='copyright'>© 2025 - No rights reserved. Jatin Arora</div>
        </div>
    );
}

export default HeroSection;