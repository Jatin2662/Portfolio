


import react from "react";
import { motion } from "framer-motion";
import './SkillContainer.css'

function SkillContainer({ position, link, title, alt }) {

    let a = 0, b = 0;

    switch (position) {
        case 'left':
            a = -50;
            break;
        case 'right':
            a = 50;
            break;
        case 'top':
            b = 50;
            break;
        case 'bottom':
            b = -50;
            break;
        default:
            a = 0; b = 0;
    }

    return (
        <motion.div
            initial={{ opacity: 0, x: a, y: b }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6 }}
            // , type: "tween" 
            viewport={{ once: true, amount: 0.5 }}
            whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 }
            }}
        //         drag="x"
        //   dragConstraints={{ left: 0, right: 300 }}
        // drag whileDrag={{ scale: 1.2, backgroundColor: "#f00" }}
        >
            <div className="skills-box flex">
                <div><img src={link} alt={alt} /></div>
                <span>{title}</span>
            </div>
        </motion.div>
    );
}

export default SkillContainer;