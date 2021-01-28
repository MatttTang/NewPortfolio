import React, {useState} from 'react'
import {motion} from 'framer-motion';
import SV from '../styling/SlidingVariant';
import {useLocation, useHistory, Switch, Route, Link} from 'react-router-dom';
import Tester from './test';
import Tapper from './Tappy';
import Project from './Project';

export default function Work() {
    function Switcher(e){
        setShowing(false);
        setInfo(e.target.firstChild.data);
    }
    var happy = "happy";
    const [showMenu, setShowing] = useState(true);
    const [projectInfo, setInfo] = useState("none");
    return (
        <motion.div
            initial="initial2"
            animate="animate"
            exit="out"
            variants={SV}>
            <h1>Work</h1>
            
            {showMenu && (
                <motion.div>
                    <button onClick={(e) => Switcher(e)}>
                        Word Guess
                    </button>
                    <button onClick={(e) => Switcher(e)}>
                        Previous Website
                    </button>
                    <button onClick={(e) => Switcher(e)}>
                        Community Algorithm
                    </button>
                </motion.div>
            )}

            {!showMenu && (
                <div>
                    <Project Info={projectInfo} />
                    <button onClick={(e) => setShowing(!showMenu)}>
                        Hello
                    </button>
                </div>
            )}
        </motion.div>
    )
}
