import React from 'react';
import {motion} from 'framer-motion';

export default function Item1(props) {
    return (
        <motion.div layout>
            <img className="itemPicture" src={props.picture}/>
        </motion.div>
    )
}
