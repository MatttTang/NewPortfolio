import React, {useState} from 'react'
import {motion} from 'framer-motion';
import SV from '../styling/SlidingVariant';
import Project from './Project';
import Resume from '../assets/Matt_Resume.pdf';
import '../styling/About.css';

export default function Work() {
    function Switcher(e){
        setShowing(false);
        setInfo(e.target.firstChild.data);
    }
    function ReShow(){
        setShowing(true);
    }
    const [showMenu, setShowing] = useState(true);
    const [projectInfo, setInfo] = useState("none");
    return (
        <motion.div
            initial="initial2"
            animate="animate"
            exit="out"
            variants={SV}>
            <div className="banner">
                <h1>Work</h1>
            </div>
            
            {showMenu && (
                <div id="SeeMe">
                    <nav id="pNav">
                        <motion.button whileHover={{color: "rgba(255,255,255)", backgroundColor: "rgba(0,0,0)"}} onClick={(e) => Switcher(e)}>
                            Word Guess
                        </motion.button>
                        <motion.button whileHover={{color: "rgba(255,255,255)", backgroundColor: "rgba(0,0,0)"}} onClick={(e) => Switcher(e)}>
                            Previous Website
                        </motion.button>
                        <motion.button whileHover={{color: "rgba(255,255,255)", backgroundColor: "rgba(0,0,0)"}} onClick={(e) => Switcher(e)}>
                            Community Algorithm
                        </motion.button>
                    </nav>
                    <iframe id="ResumeDisplay" title="Resume" src={Resume} />
                </div>
                
            )}


            {!showMenu && (
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    >
                    <Project Info={projectInfo} />
                    <button onClick={() => ReShow()}>
                        Return
                    </button>
                </motion.div>
            )}

        </motion.div>
    )
}
