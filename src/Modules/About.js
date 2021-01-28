import React from 'react'
import SV from '../styling/SlidingVariant';
import {motion} from 'framer-motion';
import {useLocation} from 'react-router-dom';
import PC from './PathCreator';

export default function About() {
    var location = useLocation();
    console.log(location);
    var anim = [];
    // if (location.state === "/"){
    //     anim.push("initial2");
    // }
    return (
        <motion.div
            initial={location.state == "/" ? "initial2" : "initial"}
            animate="animate"
            exit={location.state == "toHome" ? "out" : "out2"}
            variants={SV}>
            <h1>About</h1>
        </motion.div>
    )
}
