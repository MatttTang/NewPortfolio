import React from 'react'
import SV from '../styling/SlidingVariant';
import {motion} from 'framer-motion';
import {useLocation} from 'react-router-dom';

export default function About() {
    var location = useLocation();

    return (
        <motion.div
            initial={location.state === "/" ? "initial2" : "initial"}
            animate="animate"
            exit={location.state === "toHome" ? "out" : "out2"}
            variants={SV}>
            <h1>About</h1>
            <h1 id="greet">Greetings</h1>
            <div className="aboutSec">
                <p id="Personal" className="aboutText">
                    My name is Matthew Tang, and I am a developer seeking opportunities in front end development. 
                    Over the course of learning programming, what really stood out to me was front end development,
                    since it presents some of the complex problems of coding, whilst being more free-flowing than coding
                    normally is. 
                </p>
            </div>
            <div className="aboutSec">
                <p id="Technical" className="aboutText"> 
                    My background in coding is heavily based in C++, since my curriculum was based around that language. 
                    However, over the last few years I have been trying to explore new technologies that interest me, which has brought
                    me to studying a variety of languages, in many different contexts. I have done some work in C#, Java,
                    Javascript, HTML, and C++. 
                </p>
            </div>
            <div className="aboutSec">
                <p>
                    Even this current website is a type of experiment for me, in my attempt to learn Reactjs. I am constantly trying
                    to learn new things, solely because I have fun learning. Although the creation of this website annoyed me,
                    and implementing this weird sliding animation with the navigation bar was a real pain, I had fun doing it. 
                </p>
            </div>
        </motion.div>
    )
}
