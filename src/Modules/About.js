import React from 'react'
import SV from '../styling/SlidingVariant';
import {motion} from 'framer-motion';
import {useLocation} from 'react-router-dom';

export default function About() {
    var location = useLocation();
    console.log(location);
    return (
        <motion.div
            initial={location.state === "/" ? "initial2" : "initial"}
            animate="animate"
            exit={location.state === "toHome" ? "out" : "out2"}
            variants={SV}>
            <h1>About</h1>
        </motion.div>
    )
}
