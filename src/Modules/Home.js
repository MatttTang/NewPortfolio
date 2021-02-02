import React, {useState} from 'react';
import {motion} from 'framer-motion';
import SV from '../styling/SlidingVariant';
import Item from './Item1';
import Paul from '../assets/paul.jpg';
import C1 from '../assets/card1.jpg';
import Linked from '../assets/linked.jpg';
import Git from '../assets/gitlogo.jpg';

export default function Home() {
    const pictures = [C1, Paul];
    const [SlideNum, setSlide] = useState(0);
    function Changer(symbol){
        if (symbol === '-'){
            setSlide(SlideNum - 1);
        }else{
            setSlide(SlideNum + 1);
        }
    }
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="out2"
            variants={SV}>
            <motion.div className="ItemHolder" layout>
                <Item picture={pictures[SlideNum]} />
                {SlideNum > 0 ? <button id="moveLeft" className="itemButton" onClick={(e) => Changer('-')}> &#60; </button> : (console.log('no'))}
                {SlideNum < pictures.length - 1 ? (<button id="moveRight" className="itemButton" onClick={(e) => Changer('+')}> &#62; </button>): (console.log('no'))}
            </motion.div>
            <div id="Contacts">
                <h1>Personal Accounts</h1>
                <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/tang-matthew/">
                    <motion.img whileHover={{scale: 1.2}} className="logos" src={Linked} />
                </a>
                <a rel="noreferrer" target="_blank" href="https://github.com/MatttTang">
                    <motion.img whileHover={{scale: 1.2}} id="GLogo" src={Git} />
                </a>
            </div>
        </motion.div>
    )
}
