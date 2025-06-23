

import { Parallax } from 'react-scroll-parallax';
import './HeroSection.css'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Projects from '../components/Projects';
import { SideNav } from '../components/Nav';
import { FaGithub } from "react-icons/fa";
import SkillContainer from '../components/SkillContainer';
import { experience, projects, skills } from '../Data';
import MessageBox from '../components/MessageBox';
import PP from '../assets/PP.png';


function HeroSection({ showNav, setShowNav }) {

    const [showMessage, setShowMessage] = useState(false);

    // const [type, setType] = useState('Frontend');
    // const selectedSkills = skills.find(skill => skill.type === type)?.stack || [];

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowMessage(true);
        }, 1500);

        return () => clearTimeout(timer);
    }, [])

    return (
        <div>
            {showNav && <SideNav showNav={showNav} setShowNav={setShowNav} />}
            <section id='about' className='hero-section'>
                {showMessage && <MessageBox text="Hello there," showMessage={showMessage} setShowMessage={setShowMessage} />}
                {/* <div className="video-background">
                    <video autoPlay muted loop>
                        <source src="/assets/wind.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <p>Video by  Damir K . from Pexels: https://www.pexels.com/video/black-and-white-wind-turbines-in-field-32391111/</p>
                </div> */}
                {/* < img src={meBg} /> */}
                <div className="pp flex">
                    < img src={PP} />
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
            <section id='skills'>
                <h1>Skills</h1>

                <div className='skills-nav'>
                    {skills.map((sk) => (
                        <div className='single-skill flex'>
                            <h2>{sk.type}</h2>
                            <div>{sk.stack.map((sks) => (
                                <SkillContainer position={sks.position} link={sks.link} title={sks.title} alt={sks.alt} />
                            ))}</div>
                        </div>
                    ))}
                </div>

                {/* <div className='selectable flex'>
                    <div className='select flex' >
                        <span onClick={() => setType('Frontend')} className={`${type === 'Frontend' ? type : ''} ` }>Frontend</span>
                        <span onClick={() => setType('Backend')} className={`${type === 'Backend' ? type : ''} ` }>Backend</span>
                        <span onClick={() => setType('Tools')} className={`${type === 'Tools' ? type : ''} ` }>Tools</span>
                    </div>
                    <div>
                        {selectedSkills.map((s) => (
                            <SkillContainer position={s.position} link={s.link} title={s.title} alt={s.alt} />
                        ))}
                    </div>
                </div> */}
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

                <a href="mailto:jatinarora4902@gmail.com" className="email-link">jatinarora4902@gmail.com</a>

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