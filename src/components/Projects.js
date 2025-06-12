

import react, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import './Projects.css'

function Projects({ project, id }){

    const [show, setShow] = useState(false);

    return(
        <div className="project" key={id}>
            <div className="project-bar flex">
                <h2>{project.title}</h2>
                <span onClick={() => setShow(!show)} >{show? <FaMinus /> : <FaPlus /> }</span>
            </div>

            { show && (
                <div className="project-description" >
                    <h3>{project.timePeriod} {project.liveLink && <a href={project.liveLink} target="_blank" >Live link</a>}</h3>
                    
                    <ul>
                        {project.technology.map((pt, index) => (
                            <li key={index}>{pt}</li>
                        ))}
                    </ul>
                </div>
            ) }
        </div>
    );
}

export default Projects;