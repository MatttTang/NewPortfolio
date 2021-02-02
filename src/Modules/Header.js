import React from 'react'
import {Link, useLocation} from 'react-router-dom';
import {motion} from 'framer-motion';



export default function Header() {
    var l = useLocation();
    return (
        <div id="header">
            <nav>
                <ul>
                    <Link onMouseOver={(e) => l.state = "toHome"} to="/"><motion.li whileHover={{textShadow: '0 0 3px #F5F905'}}>Home</motion.li></Link>
                    <Link to={{pathname: "/About", state: l.pathname}}><motion.li whileHover={{textShadow: '0 0 3px #F5F905'}}>About</motion.li></Link>
                    <Link onMouseOver={(e) => l.state = "toWork"} to="/Work"><motion.li whileHover={{textShadow: '0 0 3px #F5F905'}}>Work</motion.li></Link>
                </ul>
            </nav>
        </div>
    )
}
